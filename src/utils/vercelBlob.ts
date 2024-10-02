import fetch from "node-fetch";
import { list, put } from "@vercel/blob";
import { cache } from "react";
import sharp from "sharp";

export const listBlobStore = cache(async () => {
  const { blobs } = await list();
  return blobs;
});

export const uploadImageToBlob = async (url: string, filename: string) => {
  try {
    const res = await fetch(url);
    const imageBuffer = await res.buffer();
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType?.includes("image")) {
      throw new Error(`The MIME type is ${contentType}, and it's not an image`);
    }

    // Convert image buffer to WebP format with quality set to 80
    const optimizedImage = await sharp(imageBuffer)
      .resize({ width: 640 })
      .webp({ quality: 80 })
      .toBuffer();

    // Put it to Vercel Blob
    const blob = await put(filename, optimizedImage, {
      access: "public",
      contentType,
      cacheControlMaxAge: 0,
    });

    return blob;
  } catch (error) {
    console.error(`Error while uploading image to Vercel Blob: ${error}`);

    return null;
  }
};

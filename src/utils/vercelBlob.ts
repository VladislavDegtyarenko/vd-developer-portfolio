import fetch from "node-fetch";
import { list, put } from "@vercel/blob";
import { cache } from "react";
import sharp from "sharp";

const listBlobStore = cache(async () => {
  const { blobs } = await list();
  return blobs;
});

export const getImageFromBlob = cache(async (pathname: string) => {
  const blobs = await listBlobStore();
  return blobs.find((blob) => blob.pathname === pathname) ?? null;
});

export const uploadImageToBlob = async (url: string, pathname: string) => {
  try {
    const res = await fetch(url);
    const imageBuffer = await res.buffer();
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType?.includes("image")) {
      throw new Error(
        `The MIME type is ${contentType}, and it's not an image. Url: ${url}`
      );
    }

    // Convert image buffer to WebP format with quality set to 80
    const optimizedImage = await sharp(imageBuffer)
      .resize({ width: 640 })
      .webp({ quality: 80 })
      .toBuffer();

    // Put it to Vercel Blob
    const blob = await put(pathname, optimizedImage, {
      access: "public",
      contentType,
      cacheControlMaxAge: 0,
      addRandomSuffix: false,
    });

    return blob;
  } catch (error) {
    console.error(`Error while uploading image to Vercel Blob: ${error}`);

    return null;
  }
};

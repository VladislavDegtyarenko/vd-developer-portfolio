import fetch from "node-fetch";
import { list, put } from "@vercel/blob";
import { cache } from "react";

export const listBlobStore = cache(async () => {
  const { blobs } = await list();
  console.log("listBlobStore blobs[0]: ", blobs[0]);
  return blobs;
});

export const uploadImageToBlob = async (url: string, filename: string) => {
  console.log(`uploadImageToBlob: ${url} ${filename}`);

  try {
    const res = await fetch(url);
    const imageBuffer = await res.buffer();
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType?.includes("image")) {
      throw new Error(`The MIME type is ${contentType}, and it's not an image`);
    }

    const blob = await put(filename, imageBuffer, {
      access: "public",
      contentType,
      cacheControlMaxAge: 0,
    });

    console.log("blob: ", blob);
    return blob;
  } catch (error) {
    console.error(`Error while uploading image to Vercel Blob: ${error}`);
  }
};

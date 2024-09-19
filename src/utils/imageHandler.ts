import fetch from "node-fetch";
import { Cover } from "@/types/notion";
import { put } from "@vercel/blob";
import { list } from "@vercel/blob";
import { cache } from "react";

const uploadImageToBlob = async (url: string, filename: string) => {
  console.log("uploadImageToBlob: ");
  const res = await fetch(url);
  const imageBuffer = await res.buffer();
  const contentType = res.headers.get("content-type");
  const imageBlob = new Blob([imageBuffer], {
    type: contentType || "image/jpeg",
  });
  console.log("\u001b[1;32m", "imageBlob: ", imageBlob, "\u001b[0m");

  const blob = await put(filename, imageBlob, {
    access: "public",
  });

  console.log("blob: ", blob);
  return blob;
};

const listBlobStore = cache(async () => {
  console.log("listBlobStore function");
  const { blobs } = await list();
  return blobs;
});

// Function to check if image URL has expired
const isUrlExpired = (expiryTime: string) => {
  const expiryDate = new Date(expiryTime);
  const currentDate = new Date();
  return currentDate > expiryDate;
};

export const resolveCoverUrl = async (postId: string, cover: Cover) => {
  if (cover === null) return null;

  if (cover.type === "external") return cover.external.url;

  const { url, expiry_time } = cover.file;

  const blobStore = await listBlobStore();
  const isUploadedToVercelBlob = blobStore.some(
    (blob) => blob.pathname === postId
  );
  const isNotionAWSBucketExpired = isUrlExpired(expiry_time);

  // Check if the file exists and if the URL has expired
  if (!isUploadedToVercelBlob || isNotionAWSBucketExpired) {
    // If the URL is expired or the file doesn't exist, download the image again
    const newBlob = await uploadImageToBlob(url, postId);
    return newBlob.url;
  }

  const image = blobStore.find(({ pathname }) => pathname === postId);

  if (image) {
    return image.url;
  }

  return null;
};

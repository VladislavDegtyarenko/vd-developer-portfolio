import { Cover } from "@/types/notion";
import { listBlobStore, uploadImageToBlob } from "./vercelBlob";

function isValidISO8601(timestamp: string) {
  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;
  return regex.test(timestamp);
}

// Function to check if Notion image URL from AWS Bucket has expired
const isUrlExpired = (expiryTime: string) => {
  if (typeof expiryTime !== "string") {
    console.warn(
      `The expiryTime type is not a string. Current type: ${typeof expiryTime}`
    );

    return true;
  }

  if (!isValidISO8601(expiryTime)) {
    console.error(
      `The expiryTime timestamp which is ${expiryTime} is not an ISO 8601 string`
    );

    return true;
  }

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
    return newBlob?.url ?? null;
  }

  const image = blobStore.find(({ pathname }) => pathname === postId);

  if (image) {
    return image.url;
  }

  return null;
};

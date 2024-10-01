import { Cover } from "@/types/notion";
import { listBlobStore, uploadImageToBlob } from "./vercelBlob";
import { isNotionUrlExpired } from "./isNotionUrlExpired";

/**
 * Resolves the URL for a Notion image by checking its status and uploading it if necessary.
 *
 * This function handles different types of covers (external and file-based) and checks if
 * the image is already uploaded to Vercel Blob or if its URL has expired. If the image is
 * not uploaded or the URL has expired, it downloads the image from the Notion URL and uploads
 * it to Vercel Blob. If successful, it returns the new image URL; otherwise, it returns the
 * existing image URL or null if couldn't resolve an image.
 *
 * @param {string} postId - The ID of the post associated with the image.
 * @param {Cover} cover - The cover object containing image details, including type and URL.
 * @returns {Promise<string | null>} A promise that resolves to the image URL if found or null.
 */

export const resolveNotionImage = async (
  postId: string,
  cover: Cover
): Promise<string | null> => {
  if (cover === null) return null;

  // External images are not stored in AWS Cloud
  if (cover.type === "external") return cover.external.url;

  const { url, expiry_time } = cover.file;

  const blobStore = await listBlobStore();
  const isUploadedToVercelBlob = blobStore.some(
    (blob) => blob.pathname === postId
  );
  const isNotionAWSBucketExpired = isNotionUrlExpired(expiry_time);

  // Check if the file is not in Vercel Blob yet
  // OR
  // if the URL has expired
  if (!isUploadedToVercelBlob || isNotionAWSBucketExpired) {
    // If the URL is expired or the file doesn't exist,
    // download the image and upload it to Vercel Blob
    const newBlob = await uploadImageToBlob(url, postId);

    // If the image is uploaded successfully, return a URL from Vercel Blob
    if (newBlob?.url) {
      console.log(`Returned new image url: ${newBlob.url}`);
      return newBlob?.url;
    }
  }

  // Otherwise, find the image in Vercel Blob
  const image = blobStore.find(({ pathname }) => pathname === postId);

  if (image) {
    console.log(`Returned already uploaded image to Vercel Blob: ${image.url}`);
    return image.url;
  }

  console.log(`Returned null as image for url: ${url}`);
  return null;
};

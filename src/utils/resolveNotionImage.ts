import { NotionCoverImage } from "@/types/notion";
import { isNotionUrlExpired } from "./isNotionUrlExpired";
import { getImageFromVercelBlob } from "./vercelBlob/getImageToVercelBlob";
import { uploadImageToVercelBlob } from "./vercelBlob/uploadImageToVercelBlob";
import { ResizeOptions } from "sharp";

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
 * @param {NotionCoverImage} image - The cover object containing image details, including type and URL.
 * @returns {Promise<string | null>} A promise that resolves to the image URL if found or null.
 */

export const resolveNotionImage = async (
  image: NotionCoverImage,
  resizeOptions: ResizeOptions = {}
): Promise<string | null> => {
  if (image === null) return null;

  // External images are not stored in AWS Cloud
  if (image.type === "external") return image.external.url;

  // Extra check if the notion image is a file
  if (image.type !== "file") {
    return null;
  }

  const { url, expiry_time } = image.file;

  const imageUrl = new URL(url);
  const pathname = imageUrl.pathname.slice(1); //remove leading slash

  const imageInVercelBlob = await getImageFromVercelBlob(pathname);
  const isNotionAWSBucketExpired = isNotionUrlExpired(expiry_time);

  // Check if the file is not in Vercel Blob yet
  // OR
  // if the URL has expired
  if (!imageInVercelBlob || isNotionAWSBucketExpired) {
    // If the URL is expired or the file doesn't exist,
    // download the image and upload it to Vercel Blob
    const newBlob = await uploadImageToVercelBlob({
      url,
      pathname,
      resizeOptions,
    });

    // If the image is uploaded successfully, return a URL from Vercel Blob
    if (newBlob?.url) {
      console.log(`Returned new image url: ${newBlob.url}`);
      return newBlob.url;
    }
  }

  // Otherwise, use the already uploaded image in Vercel Blob
  if (imageInVercelBlob) {
    console.log(
      `Returned already uploaded image to Vercel Blob: ${imageInVercelBlob.url}`
    );
    return imageInVercelBlob.url;
  }

  console.log(`Returned null as image for url: ${url}`);
  return null;
};

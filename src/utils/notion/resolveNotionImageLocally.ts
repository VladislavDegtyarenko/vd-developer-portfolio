import { NotionCoverImage } from "@/types/notion";
import { ResizeOptions } from "sharp";
import { saveNotionImageToPublicFolder } from "./saveNotionImageToPublicFolder";
import fs from "fs";
import path from "path";
import { toPosixPath } from "../toPosixPath";

/**
 * Resolves the local path to a Notion image by checking if it exists in the `/public` folder,
 * and downloading it from Notion if necessary.
 *
 * This function only processes Notion cover images of type "file". If the image is of type "external",
 * its URL is returned directly. If the image is of type "file", it checks whether the corresponding file
 * already exists in the `/public/assets/blog/posts` folder.
 *
 * - If the file is missing, it downloads and saves the image locally (with optional resizing).
 * - If saved successfully, it returns the local public path to the image.
 * - If the file is already present, it returns the existing path.
 * - If the image type is neither "external" nor "file", or download fails, it returns `null`.
 *
 * @param {NotionCoverImage} image - The Notion image object (must be of type "external" or "file").
 * @param {ResizeOptions} [resizeOptions={}] - Optional sharp resizing options used during image saving.
 * @returns {Promise<string | null>} The local POSIX-style path to the image in `/public`, or the external URL, or `null`.
 */

const BLOG_POSTS_ASSETS_FOLDER = path.join("assets", "blog", "posts");

export const resolveNotionImageLocally = async (
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

  const { url } = image.file;

  const imageUrl = new URL(url);
  const pathname = decodeURIComponent(imageUrl.pathname.slice(1)); //remove leading slash
  const fullPath = path.join(
    "public",
    BLOG_POSTS_ASSETS_FOLDER,
    ...pathname.split("/")
  );

  const isFileExists = fs.existsSync(fullPath);

  // Check if the file is not present in /public
  if (!isFileExists) {
    const newFile = await saveNotionImageToPublicFolder({
      url,
      pathname: fullPath,
      resizeOptions,
    });

    // If the image is uploaded successfully, return a URL from Vercel Blob
    if (newFile?.url) {
      // console.log(`Returned new image url: ${newBlob.url}`);
      return toPosixPath(newFile.url);
    }
  }

  // Otherwise, use the already uploaded image in Vercel Blob
  if (isFileExists) {
    // console.warn(
    //   `Returned already uploaded image to Vercel Blob: ${imageInVercelBlob.url}`
    // );
    return toPosixPath(fullPath);
  }

  // console.warn(`Returned null as image for url: ${url}`);
  return null;
};

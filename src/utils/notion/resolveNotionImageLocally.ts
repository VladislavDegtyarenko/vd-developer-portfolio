import { NotionCoverImage } from "@/types/notion";
import { ResizeOptions } from "sharp";
import { saveNotionImageToPublicFolder } from "./saveNotionImageToPublicFolder";
import fs from "fs";
import path from "path";
import process from "process";
import { toSrcPath } from "../toSrcPath";

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
 * @param {ResolveNotionImageLocallyOptions} [options={}] - Resize and refresh behavior.
 * @returns {Promise<string | null>} The local POSIX-style path to the image in `/public`, or the external URL, or `null`.
 */

const BLOG_POSTS_ASSETS_FOLDER = path.join(
  process.cwd(),
  "public",
  "assets",
  "blog",
  "posts"
);

export type ResolveNotionImageLocallyOptions = {
  resizeOptions?: ResizeOptions;
  forceDownload?: boolean;
};

export type NotionImageResolution = {
  url: string | null;
  localPath: string | null;
  sourceType: "file" | "external" | "none";
  status:
    | "downloaded"
    | "refreshed"
    | "existing"
    | "external"
    | "missing"
    | "failed";
};

export const getNotionImageLocalPath = (
  image: NotionCoverImage
): string | null => {
  if (!image || image.type !== "file") {
    return null;
  }

  const imageUrl = new URL(image.file.url);
  const pathname = decodeURIComponent(imageUrl.pathname.slice(1));
  // Keep the dynamic suffix visibly scoped so Next.js traces only blog assets.
  const fullPath = path.join(
    process.cwd(),
    "public/assets/blog/posts",
    pathname
  );
  const relativePath = path.relative(BLOG_POSTS_ASSETS_FOLDER, fullPath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`Notion image path escapes the blog assets folder: ${pathname}`);
  }

  return fullPath;
};

export const resolveNotionImageLocallyWithMetadata = async (
  image: NotionCoverImage,
  {
    resizeOptions = {},
    forceDownload = false,
  }: ResolveNotionImageLocallyOptions = {}
): Promise<NotionImageResolution> => {
  if (image === null) {
    return {
      url: null,
      localPath: null,
      sourceType: "none",
      status: "missing",
    };
  }

  // External images are not stored in AWS Cloud
  if (image.type === "external") {
    return {
      url: image.external.url,
      localPath: null,
      sourceType: "external",
      status: "external",
    };
  }

  // Extra check if the notion image is a file
  if (image.type !== "file") {
    return {
      url: null,
      localPath: null,
      sourceType: "none",
      status: "missing",
    };
  }

  const { url } = image.file;
  const fullPath = getNotionImageLocalPath(image);

  if (!fullPath) {
    return {
      url: null,
      localPath: null,
      sourceType: "file",
      status: "failed",
    };
  }

  const isFileExists = fs.existsSync(fullPath);

  // Download a missing file, or deliberately refresh a stale local copy.
  if (!isFileExists || forceDownload) {
    const newFile = await saveNotionImageToPublicFolder({
      url,
      pathname: fullPath,
      resizeOptions,
    });
    if (newFile?.url) {
      const src = toSrcPath(newFile?.url);

      return {
        url: src,
        localPath: fullPath,
        sourceType: "file",
        status: isFileExists ? "refreshed" : "downloaded",
      };
    }

    return {
      url: null,
      localPath: fullPath,
      sourceType: "file",
      status: "failed",
    };
  }

  if (isFileExists) {
    const src = toSrcPath(fullPath);

    return {
      url: src,
      localPath: fullPath,
      sourceType: "file",
      status: "existing",
    };
  }

  return {
    url: null,
    localPath: fullPath,
    sourceType: "file",
    status: "failed",
  };
};

export const resolveNotionImageLocally = async (
  image: NotionCoverImage,
  options: ResolveNotionImageLocallyOptions = {}
): Promise<string | null> => {
  const resolution = await resolveNotionImageLocallyWithMetadata(
    image,
    options
  );

  return resolution.url;
};

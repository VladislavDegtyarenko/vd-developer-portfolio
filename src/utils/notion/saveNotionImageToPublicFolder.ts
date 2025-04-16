import fetch from "node-fetch";
import sharp, { ResizeOptions } from "sharp";
import fs from "fs";
import path from "path";

type Args = {
  url: string;
  pathname: string;
  resizeOptions?: ResizeOptions;
};

export const saveNotionImageToPublicFolder = async ({
  url,
  pathname,
  resizeOptions,
}: Args) => {
  try {
    const res = await fetch(url);
    const imageBuffer = await res.buffer();
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType?.includes("image")) {
      throw new Error(
        `The MIME type is ${contentType}. That means that the Notion image uploaded to AWS Cloud has cache expired. Url: ${url}`
      );
    }

    // Convert image buffer to WebP format with quality set to 80
    const optimizedImage = await sharp(imageBuffer)
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toBuffer();

    // Save to PATH_TO_IMAGES
    const parsedPath = path.parse(pathname);
    const dir = parsedPath.dir;
    const filename = parsedPath.base;

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, filename), optimizedImage);

    return {
      url: pathname,
    };
  } catch (error) {
    console.error(`Error saving Notion image to /public: ${error}`);

    return null;
  }
};

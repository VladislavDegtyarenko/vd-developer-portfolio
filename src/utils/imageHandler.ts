import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { GetStaticProps } from "next";
import { Cover } from "@/types/notion";

const PUBLIC = "public";
const NOTION_IMAGES = "notion-images";

// Function to download an image and save it in the public folder
export const downloadImage = async (url: string, filename: string) => {
  const imagesDir = path.join(process.cwd(), PUBLIC, NOTION_IMAGES);

  // Ensure that the images directory exists, create if not
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true }); // Creates the directory if it doesn't exist
  }

  const res = await fetch(url);
  const imageBuffer = await res.buffer();
  const filePath = path.join(imagesDir, filename);
  fs.writeFileSync(filePath, imageBuffer);
};

// Function to check if image URL has expired
const isUrlExpired = (expiryTime: string) => {
  const expiryDate = new Date(expiryTime);
  const currentDate = new Date();
  return currentDate > expiryDate;
};

export const notionImageResolver = async (cover: Cover) => {
  if (cover === null) return null;

  if (cover.type === "external") return cover.external.url;

  const { url, expiry_time } = cover.file;
  const imageUrl = new URL(url);
  const imageName = imageUrl.pathname.split("/").pop()!;
  const filePath = path.join(process.cwd(), PUBLIC, NOTION_IMAGES, imageName);

  // Check if the file exists and if the URL has expired
  if (!fs.existsSync(filePath) || isUrlExpired(expiry_time)) {
    // If the URL is expired or the file doesn't exist, download the image again
    await downloadImage(url, imageName);
  }

  // Return the local path to be used in your rendering
  return `/notion-images/${imageName}`;
};

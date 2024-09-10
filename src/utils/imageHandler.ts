import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { GetStaticProps } from "next";

// Function to download an image and save it in the public folder
export const downloadImage = async (url: string, filename: string) => {
  const res = await fetch(url);
  const imageBuffer = await res.buffer();
  const filePath = path.join(
    process.cwd(),
    "public",
    "notion-images",
    filename
  );
  fs.writeFileSync(filePath, imageBuffer);
};

// Function to check if image URL has expired
const isUrlExpired = (expiryTime: string) => {
  const expiryDate = new Date(expiryTime);
  const currentDate = new Date();
  return currentDate > expiryDate;
};

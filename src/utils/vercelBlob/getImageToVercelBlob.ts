import { list } from "@vercel/blob";
import { cache } from "react";

const listBlobStore = cache(async () => {
  const { blobs } = await list();
  return blobs;
});

export const getImageFromVercelBlob = cache(async (pathname: string) => {
  const blobs = await listBlobStore();
  return blobs.find((blob) => blob.pathname === pathname) ?? null;
});

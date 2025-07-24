import { PRODUCTION_DOMAIN } from "@/constants";

const normalizeUrl = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

export const getSiteUrl = () => {
  const vercelEnv = process.env.VERCEL_ENV;
  const nodeEnv = process.env.NODE_ENV;
  const vercelUrl = process.env.VERCEL_URL || "";

  console.table({ vercelEnv, nodeEnv, vercelUrl });

  if (vercelUrl && vercelEnv === "preview") {
    return normalizeUrl(vercelUrl);
  }

  if (nodeEnv === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_DOMAIN;
};

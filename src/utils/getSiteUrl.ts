import { PRODUCTION_DOMAIN } from "@/constants";

export const getSiteUrl = () => {
  console.table({
    "process.env.VERCEL_ENV": process.env.VERCEL_ENV,
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.VERCEL_URL": process.env.VERCEL_URL,
  });

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_DOMAIN;
  }

  // Prefer Vercel-provided environment variable

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Default to localhost in development
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // Fallback for production build
  return PRODUCTION_DOMAIN;
};

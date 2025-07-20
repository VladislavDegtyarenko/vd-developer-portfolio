import { PRODUCTION_DOMAIN } from "@/constants";

export const getSiteUrl = () => {
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

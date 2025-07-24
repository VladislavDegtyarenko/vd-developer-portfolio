import { PRODUCTION_DOMAIN } from "@/constants";

export const isProd = () =>
  process.env.NODE_ENV === "production" &&
  (process.env.VERCEL_ENV === "production" ||
    process.env.VERCEL_URL?.includes(PRODUCTION_DOMAIN));

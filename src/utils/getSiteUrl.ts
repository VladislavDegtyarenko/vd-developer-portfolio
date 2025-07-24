import { PRODUCTION_DOMAIN } from "@/constants";

const normalizeUrl = (url: string) =>
  url.startsWith("http") ? url : `https://${url}`;

export const getSiteUrl = () => {
  const env = process.env.VERCEL_ENV;
  const nodeEnv = process.env.NODE_ENV;
  const vercelUrl = process.env.VERCEL_URL;

  console.table({ env, nodeEnv, vercelUrl });

  if (vercelUrl) {
    const fullUrl = normalizeUrl(vercelUrl);
    const isProduction =
      env === "production" || fullUrl.includes(PRODUCTION_DOMAIN);

    if (isProduction) {
      return PRODUCTION_DOMAIN;
    }

    return fullUrl;
  }

  if (nodeEnv === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_DOMAIN;
};

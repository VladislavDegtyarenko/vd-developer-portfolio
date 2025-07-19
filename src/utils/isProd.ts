import { PRODUCTION_DOMAIN } from "@/constants";
import { getSiteUrl } from "./getSiteUrl";

export const isProd = () => {
  return (
    process.env.NODE_ENV === "production" &&
    getSiteUrl().includes(PRODUCTION_DOMAIN)
  );
};

export const isPreview = () =>
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_URL?.includes(".vercel.app");

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: { unoptimized: true },
};

export default nextConfig;

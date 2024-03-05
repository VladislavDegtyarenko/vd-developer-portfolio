const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);

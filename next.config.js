/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

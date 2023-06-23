/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-app" : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-app" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

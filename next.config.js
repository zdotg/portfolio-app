/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-app" : "",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-app" : "",
  images: {
    unoptimized: true,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  assetPrefix: process.env.BASE_PATH,
  basePath: process.env.BASE_PATH,
  output: "export",
  images: {
    unoptimized: true,
  },
};

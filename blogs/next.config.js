/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
});

module.exports = nextConfig;
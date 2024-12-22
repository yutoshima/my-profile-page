import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true,
    },
};

export default withContentlayer(nextConfig);

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/my-profile-page",
  trailingSlash: true,
};

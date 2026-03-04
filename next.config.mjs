/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  ...(process.env.GITHUB_ACTIONS && {
    output: "export",
    images: { unoptimized: true },
  }),
  basePath: process.env.GITHUB_ACTIONS ? "/my-profile-page" : "",
  trailingSlash: true,
};

export default nextConfig;

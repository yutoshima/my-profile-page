import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  // APIルートを使用するため静的エクスポートを無効化
  // output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  // GitHub PagesのリポジトリURLに合わせてbasePath設定
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio-site" : "",
  trailingSlash: true,
};

export default withContentlayer(nextConfig);

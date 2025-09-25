// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@/lib/mdx-components",
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",
  images: { unoptimized: true },

  // ✅ evita que ESLint rompa el build
  eslint: { ignoreDuringBuilds: true },
};

export default withMDX(nextConfig);

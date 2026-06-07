import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out so it can be hosted by GitHub Pages.
  output: "export",
  // next/image's default loader requires a Node server. Disabling optimization
  // makes <Image> render plain <img> tags that work on static hosts.
  images: { unoptimized: true },
  // Strip any trailing slash from request URLs so GitHub Pages' static routing
  // matches Next's generated files cleanly.
  trailingSlash: true,
};

export default nextConfig;

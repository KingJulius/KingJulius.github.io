import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export", 
};


export default nextConfig;

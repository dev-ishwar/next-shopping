import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/**",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        pathname: "/**",
        hostname: "lh3.googleusercontent.com",
      }
    ]
  }
};

export default nextConfig;

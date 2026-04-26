import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vumbnail.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

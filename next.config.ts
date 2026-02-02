import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // 개발 모드에서 N 버튼 숨김
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

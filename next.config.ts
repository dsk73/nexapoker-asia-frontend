import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/activities/welcome-to-nexapoker-south-asia",
        destination: "/activities/welcome-to-nexapoker",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

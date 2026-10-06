import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",          // When someone goes to localhost:3000
        destination: "/home", // Send them to localhost:3000/home
        permanent: false,     // Keeps it as a temporary 307 redirect (safe for local development)
      },
    ];
  },
};

export default nextConfig;

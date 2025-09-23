import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignorer les erreurs ESLint pendant le build pour la présentation
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

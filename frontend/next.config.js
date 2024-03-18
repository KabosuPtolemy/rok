require("dotenv").config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false
      }
    }
    config.resolve.extensions.push('.ts', '.tsx'); // TS support
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  devIndicators: {
    buildActivity: false
  }
}

module.exports = nextConfig

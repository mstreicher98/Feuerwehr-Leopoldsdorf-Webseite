/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_API_URL: process.env.NEXT_API_URL,
      NEXT_API_TOKEN: process.env.NEXT_API_TOKEN,
    }
  }

module.exports = nextConfig

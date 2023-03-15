/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    TEST: process.env.TEST,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "dans.stagingaja.com",
      "tecdn.b-cdn.net",
      "dummyimage.com",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    TEST: process.env.TEST,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '"images.pexels.com"',
      },
      {
        hostname: '"images.unsplash.com"',
      },
    ],
  },
}

module.exports = nextConfig

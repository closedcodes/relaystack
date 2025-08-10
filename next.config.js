/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
}

module.exports = nextConfig

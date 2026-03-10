/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 禁用Cloudflare的自动部署
  trailingSlash: true,
}

module.exports = nextConfig

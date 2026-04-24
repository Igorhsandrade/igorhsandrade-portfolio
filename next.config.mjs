/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['react-icons/si', 'react-icons/fa', 'react-icons/hi2', 'react-icons/hi'],
  },
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      // Add this new configuration for your student works
      {
        protocol: 'https',
        hostname: 'maacgreaternoida.b-cdn.net',
        port: '',
        pathname: '/student-works/**',
      },
    ],
  },
}

export default nextConfig
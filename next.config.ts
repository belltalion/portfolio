import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   output: 'standalone',
   experimental: {
      optimizePackageImports: ['@devup-ui/reset-css'],
   },
   reactCompiler: true,
}

export default nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   output: 'export',
   basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
   images: {
      unoptimized: true,
   },
   reactCompiler: true,
}

export default nextConfig

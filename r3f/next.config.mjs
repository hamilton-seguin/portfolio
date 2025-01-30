/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/jablonkowy-las/:path*',
        destination:
          'http://www.jablonkowylas.website/:path*',
      },
    ]
  },
}

export default nextConfig

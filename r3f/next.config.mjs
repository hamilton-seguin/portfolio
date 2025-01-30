/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/jablonkowy-las/:path*',
        destination:
          'https://www.jablonkowylas.website/:path*/',
      },
    ]
  },
}

export default nextConfig

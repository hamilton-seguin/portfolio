/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/jablonkowy-las/:path*',
        destination: 'https://www.jablonkowylas.website/:path*',
      },
      {
        source: '/nasa-api/:path*',
        destination: 'https://nasa-api-xi-five.vercel.app/:path*',
      },
      {
        source: '/static/:path*',
        destination:
          'https://nasa-api-xi-five.vercel.app/nasa-api/static/:path*',
      },
    ]
  },
}

export default nextConfig

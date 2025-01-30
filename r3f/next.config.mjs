/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/jablonkowy-las/:path*',
        destination: 'https://jablonkowylas.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig

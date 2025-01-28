/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/jablonkowy-las/:path*', // Matches /jablonkowy-las and all sub-routes
        destination:
          'https://jablonkowylas-hkv4eqzyy-hamilton-seguins-projects.vercel.app/:path*', // Proxies requests to the Gatsby app
      },
    ]
  },
}

export default nextConfig
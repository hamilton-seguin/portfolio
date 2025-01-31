export default function manifest() {
  return {
    name: 'Hamilton Seguin Portfolio',
    short_name: 'Portfolio',
    description: 'R3F Nextjs Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#050a14',
    theme_color: '#050a14',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

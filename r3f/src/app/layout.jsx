import './globals.css'

export const metadata = {
  title: 'Hamilton Seguin Portfolio',
  description: 'Nextjs React Three Fiber Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

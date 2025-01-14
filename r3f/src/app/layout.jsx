import './globals.css'
import { Amatic_SC } from 'next/font/google'

export const metadata = {
  title: 'Hamilton Seguin Portfolio',
  description: 'Nextjs React Three Fiber Portfolio',
}

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['cursive'],
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-6xl ${amatic.className}`}>{children}</body>
    </html>
  )
}

import './globals.css'
import { amatic } from '@/font'

export const metadata = {
  title: 'Hamilton Seguin Portfolio',
  description: 'Nextjs React Three Fiber Portfolio',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-6xl ${amatic.className}`}>{children}</body>
    </html>
  )
}

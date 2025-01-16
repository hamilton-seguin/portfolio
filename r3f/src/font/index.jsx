import localFont from 'next/font/local'
import { Amatic_SC } from 'next/font/google'

export const andaleMono = localFont({
  src: [
    {
      path: './fonts/AndaleMono.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-andale',
  fallback: ['monospace'],
  preload: true,
})

export const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['cursive'],
  variable: '--font-amatic',
  preload: true,
})

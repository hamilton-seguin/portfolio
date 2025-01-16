import { Amatic_SC, Fira_Mono } from 'next/font/google'

export const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['cursive'],
  variable: '--font-amatic',
  display: 'swap',
  preload: true,
})

export const fira = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['mono'],
  style: 'normal',
  variable: '--font-fira',
  display: 'swap',
  preload: true,
})

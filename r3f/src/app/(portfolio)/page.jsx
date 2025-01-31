import dynamic from 'next/dynamic'

import { Modal } from '@/components/Modal'
import { Preloader } from '@/components/Preloader'

const CanvasScene = dynamic(() => import('@/components/CanvasScene'), {
  ssr: false,
})

export const metadata = {
  title: 'Hamilton Seguin Portfolio',
  description: 'R3F Nextjs Portfolio',
}

export default function Home() {
  return (
    <>
      <Preloader />
      <Modal />
      <CanvasScene />
    </>
  )
}

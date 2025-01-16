import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Modal } from '@/components/Modal'
import { Preloader } from '@/components/Preloader'

const CanvasScene = dynamic(() => import('@/components/CanvasScene'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamilton Seguin Portfolio</title>
        <meta name="description" content="R3F Nextjs Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050a14" />
      </Head>

      <Preloader />
      <Modal />
      <CanvasScene />
    </>
  )
}

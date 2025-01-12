import Head from 'next/head'
import dynamic from 'next/dynamic'

const CanvasScene = dynamic(() => import('@/components/CanvasScene'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-900">
      <Head>
        <title>Hamilton Seguin Portfolio</title>
        <meta name="description" content="R3F Nextjs Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute z-10 top-4 left-4 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="mt-2 text-lg">
          Explore my work in an interactive 3D environment.
        </p>
      </div>

      <CanvasScene />
    </div>
  )
}

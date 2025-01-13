'use client'
import { useProgress, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

import { appStateStore } from '@/utils/store'

export const AssetLoader = () => {
  const { progress, loaded, total } = useProgress()
  useGLTF.preload('/models/environment.glb')
  useGLTF.preload('/models/h-avatar.glb')
  useGLTF.preload('/models/m-avatar.glb')

  useEffect(() => {
    let timer
    if (loaded === total && total > 0) {
      timer = window.setTimeout(
        () => appStateStore.setState({ assetsReady: true }),
        1200
      )
    }
    return () => clearTimeout(timer)
  }, [loaded, total])

  return <p>Loading Experience... {Math.floor(progress)}%</p>
}

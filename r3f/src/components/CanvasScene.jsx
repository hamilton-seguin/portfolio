'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { CharacterWireframe, Character } from '@/components/Character'
import { Lights } from '@/components/Lights'
// import { Camera } from '@/components/Camera'

import { appStateStore } from '@/utils/store'
import { LogMesh, LogScene } from '@/utils'

export default function CanvasScene() {
  const characterSelected = appStateStore((state) => state.characterSelected)

  return (
    <Canvas>
      <Lights />
      {/* <Camera /> */}

      <CharacterWireframe />
      {characterSelected && (
        <Character position={[0, 10, 0]} avatarChosen={characterSelected} />
      )}

      <OrbitControls enableDamping />
      <LogScene />
      {/* <LogMesh meshName={'floorTarget'} /> */}
    </Canvas>
  )
}

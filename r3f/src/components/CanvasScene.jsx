'use client'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'

import { Character } from '@/components/Character'
import { Lights } from '@/components/Lights'
import { Environment } from '@/components/Environment'
import { Controller } from '@/components/Controller'

import { appStateStore } from '@/utils/store'
import { LogMesh, LogScene, bgColor } from '@/utils'

export default function CanvasScene() {
  const characterSelected = appStateStore((state) => state.characterSelected)

  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows
        camera={{ fov: 35, position: [15, 6, 22] }}
        gl={{
          toneMapping: 1,
          toneMappingExposure: 5,
        }}
        onPointerDown={(e) => {
          if (e.pointerType === 'mouse') {
            e.target.requestPointerLock()
          }
        }}
        fallback={<div>Sorry, WebGL is not supported by your device!</div>}
      >
        <color attach="background" args={[bgColor.r, bgColor.g, bgColor.b]} />
        <Lights />

        <Physics timeStep="vary">
          <Environment />
          {characterSelected && (
            <Controller>
              <Character avatarChosen={characterSelected} />
            </Controller>
          )}
        </Physics>

        <OrbitControls enableDamping />
        {/* <LogScene />
        <LogMesh meshName={'avatarController'} /> */}
      </Canvas>
    </div>
  )
}

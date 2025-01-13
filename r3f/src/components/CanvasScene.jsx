'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Lights from '@/components/Lights'

import { LogMesh } from '@/utils'

const CanvasScene = () => (
  <Canvas>
    <Lights />

    <Character />
    <AnimatedCharacter 
      position={[0, 10, 0]}/>
  </Canvas>
)

export default CanvasScene

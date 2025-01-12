'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Lights from '@/components/Lights'

import { LogMesh } from '@/utils'

const CanvasScene = () => (
  <Canvas>
    <Lights />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    <OrbitControls enableDamping/>
    <LogMesh meshName={'floorTarget'} />
  </Canvas>
)

export default CanvasScene

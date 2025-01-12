'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const CanvasScene = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    <OrbitControls />
  </Canvas>
)

export default CanvasScene

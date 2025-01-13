import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export const Character = ({ avatarChosen = null }) => {
  return (
    <mesh position={[0, 10, 0]} name="character">
      <boxGeometry args={[0.6, 2, 0.6]} />
      <meshStandardMaterial color={0x00ff00} wireframe visible={true} />
    </mesh>
  )
}

export function AnimatedCharacter() {
  const { scene, animations } = useGLTF('/models/h-avatar.glb', '/draco-gltf/')
  const { actions } = useAnimations(animations, scene)
  const avatarRef = useRef()

  useEffect(() => {
    actions?.[animations[1].name]?.play()
  }, [actions, animations])

  return (
    <primitive
      ref={avatarRef}
      object={scene}
      scale={[1.1, 1.1, 1.1]}
      rotation-y={Math.PI}
      position={[0, 9, 0]}
    />
  )
}

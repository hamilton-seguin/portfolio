import { Gltf } from '@react-three/drei'

export function Character({ avatarChosen = null }) {
  return (
    <Gltf
      scale={0.8}
      position={[0, -1, 0]}
      castShadow
      receiveShadow
      src={`/models/${avatarChosen}.glb`}
      useDraco="/draco-gltf"
    />
  )
}

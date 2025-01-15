import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export const Lights = () => {
  const directionalLightRef = useRef(null)
  const { scene } = useThree()

  useEffect(() => {
    const floorObject = scene.getObjectByName('floor')
    if (floorObject && directionalLightRef.current) {
      directionalLightRef.current.target = floorObject
    }
  }, [scene])
  return (
    <>
      <ambientLight color={'white'} intensity={0.22} />
      <directionalLight
        ref={directionalLightRef}
        position={[34, 50, -29]}
        color={0xd1ad69}
        intensity={0.3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-normalBias={-0.001}
        
      >
        <orthographicCamera attach="shadow-camera" args={[-40, 40, 30, -30]} />
      </directionalLight>
      <directionalLight
        position={[-19, 15, -38]}
        color={0x35359c}
        intensity={0.06}
        shadow-camera-top={3}
        shadow-camera-right={3}
        shadow-camera-bottom={-3}
        shadow-camera-left={-3}
      />
    </>
  )
}

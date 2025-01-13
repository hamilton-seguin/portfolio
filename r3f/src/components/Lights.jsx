import { useRef } from 'react'

export const Lights = () => {
  const directionalLight = useRef()
  const targetRef = useRef()

  return (
    <>
      <mesh
        ref={targetRef}
        position={[1.78, -2.1, 0]}
        name="floorTarget"
        visible={false}
      />

      <ambientLight color={0xffffff} intensity={0.3} />
      <directionalLight
        ref={directionalLight}
        position={[34, 50, -29]}
        color={0xe37730}
        intensity={0.5}
        castShadow
        shadow-camera-top={30}
        shadow-camera-right={40}
        shadow-camera-bottom={-30}
        shadow-camera-left={-40}
        shadow-bias={-0.0003}
        shadow-normalBias={-0.0891}
        target={targetRef.current}
      />
      <directionalLight
        position={[-19, 15, -38]}
        color={0x35359c}
        intensity={0.1}
        castShadow
        shadow-camera-top={3}
        shadow-camera-right={3}
        shadow-camera-bottom={-3}
        shadow-camera-left={-3}
      />
    </>
  )
}

import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export const LogMesh = ({ meshName }) => {
  const { scene } = useThree()

  useEffect(() => {
    const meshToLog = scene.getObjectByName(meshName)
    console.log(`Logging Mesh: '${meshName}'`, meshToLog)
  }, [scene])

  return null
}
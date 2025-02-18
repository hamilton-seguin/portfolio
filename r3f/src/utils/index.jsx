import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { Color } from 'three'

export const LogMesh = ({ meshName }) => {
  const { scene } = useThree()
  useEffect(() => {
    const meshToLog = scene.getObjectByName(meshName)
    console.log(`Logging Mesh: '${meshName}'`, meshToLog)
  }, [scene])
  return null
}

export const LogScene = () => {
  const { scene } = useThree()
  useEffect(() => {
    console.log('Logging Scene: ', scene)
  }, [scene])
  return null
}

export const bgColor = new Color(0x050a14)

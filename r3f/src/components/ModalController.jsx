import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

import { modalStore } from '@/utils/store'

const createMaterial = (color, opacity, doubleSided) => {
  const material = new THREE.MeshStandardMaterial({
    color,
    transparent: true,
    opacity,
    emissive: color,
  })
  doubleSided && (material.side = THREE.DoubleSide)

  return material
}

export const ModalController = ({ mesh, modalName }) => {
  const { scene } = useThree()

  const characterRef = useRef(null)
  const prevIsNear = useRef(false)
  const originalMaterial = useRef(null)
  const nearMaterial = createMaterial(0x5f3b9c, 0.5, true)
  const farMaterial = createMaterial(0x5f3b9c, 0.7, true)
  const isTutorialTile = mesh.name === 'tiles014'
  const tileNearMaterial = createMaterial(null, 1, false)
  const tileFarMaterial = createMaterial(null, 0.8, false)

  useEffect(() => {
    if (!originalMaterial.current && mesh.material) {
      originalMaterial.current = mesh.material
    }
    if (mesh.name.includes('portal')) {
      mesh.material = farMaterial
    }
    console.log('ModalController mesh:', mesh.material);
    
  }, [mesh])

  useFrame(() => {
    if (!mesh || !mesh.material) {
      console.error(`Mesh material is undefined for mesh: ${mesh.name}`)
      return
    }

    if (!characterRef.current) {
      const character = scene.getObjectByName('avatarController')
      if (character) characterRef.current = character
      return
    }

    const character = characterRef.current
    const portalPosition = mesh.position
    const distance = character.position.distanceTo(portalPosition)
    const isNear = distance < 2.5

    if (isNear !== prevIsNear.current) {
      prevIsNear.current = isNear

      if (isNear) {
        modalStore.setState({ modalOpen: true, modalName })
        isTutorialTile
          ? (mesh.material = tileNearMaterial)
          : (mesh.material = nearMaterial)
      } else {
        modalStore.setState({ modalOpen: false, modalName: null })
        isTutorialTile
          ? (mesh.material = tileFarMaterial)
          : (mesh.material = farMaterial)
      }
    }
  })

  return null
}

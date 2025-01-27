import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { ModalController } from '@/components/ModalController'

export const Environment = () => {
  const { scene: environment } = useGLTF('/models/environment.glb')

  const portals = useMemo(() => {
    const portalNames = ['portalBot', 'portalMid', 'portalTop', 'tiles014']
    return portalNames.map((name) => environment.getObjectByName(name))
  }, [environment])

  const modalNames = ['aboutMe', 'projects', 'contactMe', 'tutorial']

  const processedEnvironment = useMemo(() => {
    const physicalObjects = [
      'trees',
      'boulders',
      'terrain',
      'stairs',
      'gates',
      'invisibleWalls',
      'bushes',
      'pondRocks',
      'floor',
      'tiles',
    ]
    const shadowCasters = [
      'Cone', // = 'trees' but Group not Mesh
      'boulders',
      'Cube', // = 'terrain' but Group not Mesh
      'stairs',
      'gates',
      'bushes',
      'pondRocks',
    ]
    const shadowReceivers = ['Cube', 'floor']

    return environment.children.map((child) => {
      let colliderType = null

      if (child.name.includes('boulders') || child.name.includes('trees')) {
        colliderType = 'trimesh'
      } else if (
        physicalObjects.some((keyword) => child.name.includes(keyword)) &&
        !child.name.includes('tilesEmpty')
      ) {
        colliderType = 'cuboid'
      }

      child.traverse((obj) => {
        obj.castShadow = shadowCasters.some((keyword) =>
          obj.name.includes(keyword)
        )
        obj.receiveShadow = shadowReceivers.some((keyword) =>
          obj.name.includes(keyword)
        )
      })

      return { object: child, colliderType }
    })
  }, [environment])

  return (
    <>
      {processedEnvironment.map(({ object, colliderType }, index) =>
        colliderType ? (
          <RigidBody key={index} type="fixed" colliders={colliderType}>
            <primitive object={object} />
          </RigidBody>
        ) : (
          <primitive key={index} object={object} />
        )
      )}
      {portals.map((portalMesh, index) => {
        return (
          <ModalController key={index} mesh={portalMesh} modalName={modalNames[index]} />
        )
      })}
    </>
  )
}

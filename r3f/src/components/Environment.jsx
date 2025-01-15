import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useMemo } from 'react'

export const Environment = () => {
  const { scene: environment } = useGLTF('/models/environment.glb')

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
    </>
  )
}

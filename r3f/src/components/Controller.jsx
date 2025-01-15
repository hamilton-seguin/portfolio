import { KeyboardControls } from '@react-three/drei'
import CharacterController from 'ecctrl'

export const Controller = ({ children }) => {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyQ'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyE'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    { name: 'action1', keys: ['KeyF'] },
  ]

  return (
    <KeyboardControls map={keyboardMap}>
      <CharacterController
        maxVelLimit={5}
        position={[8.3, 4, 10.5]}
        capsuleHalfHeight={0.45}
        characterInitDir={16.3}
        // mode={'FixedCamera'}
        // fixedCamRotMult={2}
        // camLerpMult={5}
        // camInitDis={-7}
        // camMaxDism={-20}
        // camMinDis={3}
        camInitDir={{ x: 0.32, y: 3.75 }}
        camTargetPos={{ x: 0, y: 2.6, z: -7 }}

        sprintMult={1.4}
        jumpVel={3}
        jumpForceToGroundMult={3.5}
        moveImpulsePointY={0} //makes you bend sideways when moving
        // floatHeight={0.1}
      >
        {children}
      </CharacterController>
    </KeyboardControls>
  )
}

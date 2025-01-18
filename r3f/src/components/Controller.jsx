import { KeyboardControls } from '@react-three/drei'
import CharacterController, { EcctrlAnimation } from 'ecctrl'

import { appStateStore } from '@/utils/store'

export const Controller = ({ children }) => {
  const characterSelected = appStateStore((state) => state.characterSelected)

  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyQ'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyE'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
    { name: 'action1', keys: ['KeyF'] },
  ]
  const animationSet = {
    idle: 'Idle',
    walk: 'Running',
    run: 'Running',
    jump: 'Jumping',
    jumpIdle: 'Jumping',
    jumpLand: 'Jumping',
    fall: 'Jumping',
    action1: characterSelected === 'h-avatar' ? 'Dancing' : 'Idle-Hand',
  }

  const characterURL = `/models/${characterSelected}.glb`

  return (
    <KeyboardControls map={keyboardMap}>
      <CharacterController
        name="avatarController"
        maxVelLimit={5}
        position={[8.3, 4, 10.5]}
        capsuleHalfHeight={0.45}
        characterInitDir={16.3}
        animated
        camInitDir={{ x: 0.38, y: 3.75 }}
        camTargetPos={{ x: 0, y: 5, z: -10 }}
        sprintMult={1.4}
        jumpVel={3}
        jumpForceToGroundMult={3.5}
        moveImpulsePointY={0} //makes you bend sideways when moving
        // floatHeight={0.1}
      >
        <EcctrlAnimation
          characterURL={characterURL}
          animationSet={animationSet}
        >
          {children}
        </EcctrlAnimation>
      </CharacterController>
    </KeyboardControls>
  )
}

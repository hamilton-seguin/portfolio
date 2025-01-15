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
      <CharacterController maxVelLimit={5}>{children}</CharacterController>
    </KeyboardControls>
  )
}

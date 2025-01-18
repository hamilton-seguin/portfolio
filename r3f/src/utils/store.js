import { create } from 'zustand'

export const appStateStore = create(() => ({
  physicsReady: false,
  assetsReady: false,
  characterReady: false,
  isFalling: false,
  characterSelected: null,
}))

export const inputStore = create(() => ({
  forward: false,
  backward: false,
  left: false,
  right: false,
  extra: false,
  jump: false,
}))

export const modalStore = create(() => ({
  modalOpen: false,
  modalName: null,
}))
'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

import { AssetLoader } from '@/components/AssetLoader'

import { appStateStore } from '@/utils/store'

export const Preloader = () => {
  const [characterChosen, setCharacterChosen] = useState('')
  const [done, setDone] = useState(false)
  const assetsReady = appStateStore((state) => state.assetsReady)

  const oppositeCharacter = (url) => {
    return Array('h-avatar', 'm-avatar').filter((c) => c !== url)[0]
  }

  useEffect(() => {
    let timer
    if (characterChosen) {
      timer = window.setTimeout(() => {
        setDone(true)
      }, 1500)
    }
    return () => clearTimeout(timer)
  }, [characterChosen])

  const handleCharacterSelect = (characterId) => {
    setCharacterChosen(characterId)
    appStateStore.setState({ characterSelected: characterId })
    useGLTF.clear(`/models/${oppositeCharacter(characterId)}.glb`)
    document.getElementById('preloader').classList.add('opacity-0')
  }

  if (done) return null

  return (
    <div
      id="preloader"
      className={`fixed w-full h-full text-white z-10 transition-all duration-1000 ${
        characterChosen ? 'opacity-0 bg-transparent' : 'opacity-100 bg-[#050a14]'
      }`}
    >
      <div className="flex justify-center items-center h-full text-white">
        {!assetsReady ? (
          <AssetLoader />
        ) : (
          <div className="flex gap-8">
            <button
              type="button"
              className="hover:text-[#9effe7]"
              onClick={() => handleCharacterSelect('h-avatar')}
            >
              START as 👨‍🦱
            </button>
            <button
              type="button"
              className="hover:text-[#9effe7]"
              onClick={() => handleCharacterSelect('m-avatar')}
            >
              START as 👩
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

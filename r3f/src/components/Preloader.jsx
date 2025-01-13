'use client'
import { AssetLoader } from '@/components/AssetLoader'

import { appStateStore } from '@/utils/store'

export const Preloader = () => {
  const assetsReady = appStateStore((state) => state.assetsReady)
  const characterSelected = appStateStore((state) => state.characterSelected)

  const handleCharacterSelect = (characterId) => {
    appStateStore.setState({
      characterSelected: characterId,
    })
  }

  if (characterSelected) return null

  return (
    <div className="fixed bg-black w-full h-full text-white ">
      <div className="flex justify-center items-center h-full text-white transition-opacity duration-1000">
        {!assetsReady && <AssetLoader />}

        {!characterSelected && assetsReady && (
          <div className="character-select">
            <button
              type="button"
              onClick={() => handleCharacterSelect('h-avatar')}
            >
              START as 👨‍🦱
            </button>
            <button
              type="button"
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

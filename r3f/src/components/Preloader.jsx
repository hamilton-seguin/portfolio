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
    <div className="fixed bg-[#050a14] w-full h-full text-white z-10">
      <div className="flex justify-center items-center h-full text-white transition-opacity duration-1000">
        {!assetsReady && <AssetLoader />}

        {!characterSelected && assetsReady && (
          <div className="flex gap-8">
            <button
              type="button"
              className='hover:text-[#9effe7]'
              onClick={() => handleCharacterSelect('h-avatar')}
            >
              START as 👨‍🦱
            </button>
            <button
              type="button"
              className='hover:text-[#9effe7]'
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

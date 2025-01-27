'use client'
import { ModalContentProvider } from '@/components/ModalContentProvider'

import { modalStore } from '@/utils/store'
import { fira } from '@/font'

export const Modal = () => {
  const modalOpen = modalStore((state) => state.modalOpen)
  const modalName = modalStore((state) => state.modalName)

  if (!modalOpen) return null

  const handleClick = () => {
    if (modalName === 'respawn') {
      window.location.reload()
    } else {
      modalStore.setState({ modalOpen: false, modalName: null })
    }
  }

  return (
    <div
      className={`fixed z-20 flex justify-center items-center h-full w-full bg-transparent ${
        modalOpen
          ? 'h-svh overflow-auto opacity-100'
          : 'h-0 overflow-hidden opacity-0'
      }`}
    >
      <div
        className={`relative  flex flex-col justify-center items-center gap-4 ${fira.className}`}
      >
        <div className="backdrop-blur-xl min-h-48 max-h-[90vh] p-5 rounded-2xl shadow-transparent/20">
          <ModalContentProvider portalName={modalName} />
        </div>
        <button
          type="button"
          className="text-xl font-bold backdrop-blur-xl h-auto py-2 px-6 rounded-2xl shadow-transparent/20 hover:text-[#9effe7] hover:bg-[#ffffff4d] transition-colors"
          onClick={() => handleClick()}
        >
          {modalName === 'respawn' ? 'RESTART' : 'CLOSE'}
        </button>
      </div>
    </div>
  )
}

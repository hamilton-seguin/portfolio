'use client'
import { ModalContentProvider } from '@/components/ModalContentProvider'

import { modalStore } from '@/utils/store'
import { fira } from '@/font'

export const Modal = () => {
  const modalOpen = modalStore((state) => state.modalOpen)
  const modalName = 'tutorial'
  // modalStore((state) => state.modalName)

  const handleClick = () => {
    modalStore.setState({ modalOpen: false, modalName: null })
  }

  return (
    <div
      className={`fixed z-20 left-0 top-0 w-full bg-transparent ${
        modalOpen
          ? 'h-svh overflow-auto opacity-100'
          : 'h-0 overflow-hidden opacity-0'
      }`}
    >
      <div
        className={`relative w-11/12 mt-4 flex flex-col justify-center items-center  ${fira.className}`}
      >
        <div className="backdrop-blur-xl h-auto min-h-48 p-5 rounded-2xl shadow-transparent/20">
          <ModalContentProvider portalName={modalName} />
        </div>
        <button
          type="button"
          className="text-xl font-bold"
          onClick={handleClick}
        >
          CLOSE
        </button>
      </div>
    </div>
  )
}

import Image from 'next/image'

import data from '@/data'

export const ModalContentProvider = ({ portalName }) => {
  const modal = data[portalName]

  if (!modal) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="font-bold text-3xl">{modal.title}</h1>
      {modal.descriptionHeader && (
        <h2 className="font-medium text-xl">{modal.descriptionHeader}</h2>
      )}
      {modal.description && (
        <p className="text-lg text-center">{modal.description}</p>
      )}
      {modal.img && (
        <Image
          src={modal.img}
          width={400}
          height={400}
          alt={modal.title}
          priority
        />
      )}
    </div>
  )
}

import { useState } from 'react'
import Image from 'next/image'

import data, { projectsData } from '@/data'
import Link from 'next/link'

const CustomLink = ({ url, children }) => {
  if (!url) return <>{children}</>
  if (url.includes('https')) {
    return (
      <a href={url} target="_blank" noreferrer noopener className="underline">
        {children}
      </a>
    )
  }
  return (
    <Link href={url} className="underline">
      {children}
    </Link>
  )
}

export const ModalContentProvider = ({ portalName }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const modal = data[portalName]

  if (!modal) {
    return null
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
  }

  return portalName !== 'projects' ? (
    <div className="flex flex-col gap-8 items-center text-center min-w-[60vw] max-w-[80vw] sm:max-w-[60vw] p-4 max-h-[80vh] overflow-y-auto">
      <h1 className="font-bold text-3xl">{modal.title}</h1>
      {modal.descriptionHeader && (
        <h2 className="font-medium text-xl leading-snug">
          {modal.descriptionHeader}
        </h2>
      )}
      {modal.description && (
        <p className="text-lg leading-snug">{modal.description}</p>
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
  ) : (
    <div className="flex flex-col gap-6 items-center text-center relative min-w-[60vw] max-w-[80vw] mb-2">
      <h1 className="font-bold text-3xl">Projects</h1>
      <div className="relative w-full">
        <div
          key={projectsData[currentIndex].title}
          className="flex flex-col gap-4 items-center"
        >
          <div>
            <CustomLink url={projectsData[currentIndex].url}>
              <h2 className="font-medium text-xl">
                {projectsData[currentIndex].title}
              </h2>
            </CustomLink>
            <h3 className="text-sm italic">
              {projectsData[currentIndex].subtitle}
            </h3>
          </div>
          <ul className="flex gap-2 flex-wrap justify-center">
            {projectsData[currentIndex].stacks.map((stack) => (
              <li key={stack} className="text-sm">
                {stack}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 justify-center items-center w-full">
            <button
              onClick={handlePrev}
              className="bg-slate-500/20 text-white px-3 py-1 sm:py-2 rounded-full text-3xl sm:text-5xl shadow-transparent/20 hover:text-[#9effe7] hover:bg-[#ffffff4d] transition-colors"
            >
              &lt;
            </button>
            <Image
              src={projectsData[currentIndex].img}
              width={400}
              height={400}
              alt={projectsData[currentIndex].title}
              priority
              className="max-w-full min-w-[60vw] sm:min-w-[30vw] mb-8"
            />

            <button
              onClick={handleNext}
              className="bg-slate-500/20 text-white px-3 py-1 sm:py-2 rounded-full text-3xl sm:text-5xl shadow-transparent/20 hover:text-[#9effe7] hover:bg-[#ffffff4d] transition-colors"
            >
              &gt;
            </button>
          </div>

          <div className="flex flex-col gap-6 max-h-[30vh] xs:max-h-[40vh] sm:max-h-[50vh] lg:max-h-full overflow-y-auto justify-center items-center">
            <p className="text-base leading-snug w-11/12 ">
              {projectsData[currentIndex].description}
            </p>
            <div className="flex flex-col gap-2 w-10/12 justify-center items-center">
              <b className="text-base leading-snug">Key Achievements</b>
              <ul className="text-base leading-snug">
                {projectsData[currentIndex].achievements.map((achievement) => {
                  const [title, description] = achievement.split(': ')
                  return (
                    <li key={achievement}>
                      <b>{title}:</b> {description}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

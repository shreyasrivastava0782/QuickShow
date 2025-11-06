import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import ReactPlayer from 'react-player'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-10 overflow-hidden">
      {/* Section title */}
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto text-center">
        Trailers
      </p>

      {/* Main trailer video */}
      <div className="relative mt-4 flex justify-center">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          key={currentTrailer.videoUrl} // force reload when trailer changes
          url={currentTrailer.videoUrl}
          controls={true}
          playing={false}
          muted={true}
          className="rounded-lg overflow-hidden"
          width="960px"
          height="540px"
        />
      </div>

      {/* Thumbnails grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
              currentTrailer.image === trailer.image
                ? 'ring-2 ring-red-500 scale-105'
                : 'hover:scale-105 hover:opacity-90'
            }`}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="w-full h-40 object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection

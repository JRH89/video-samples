import React from "react"
import Image from "next/image"

const Video = ({ src }) => {
  return (
    <video
      controls
      width="100%"
      height="auto"
      className="mb-4 rounded-lg shadow-md"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video format (h.264 mp4).
    </video>
  )
}

const Home = () => {
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-24_3.mp4?alt=media&token=baeb9dbf-8849-4f53-8365-cd3f94fd74f4",
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-7_3_HD_3.mp4?alt=media&token=dd5f88d1-a82f-4e2d-a5ee-e70347247d7e",
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-13_HD_8.mp4?alt=media&token=e940a3c1-2136-4dce-a54f-1498a0229381"
  ]

  const images = [
    "/003.png",
    "/004.png",
    "/008.png",
    "/001.png",
    "/006.png",
    "/007.png",
  ]

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 my-auto place-content-center mx-auto flex flex-col">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-xl sm:text-2xl underline font-bold mb-4 text-center text-neutral-950">Animated 3D Logo Examples</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {videos.map((video, index) => (
              <Video key={index} src={video} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-4 my-auto place-content-center mx-auto flex flex-col">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-xl sm:text-2xl underline font-bold mb-4 text-center text-neutral-950">3D Logo Examples</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {images.map((image, index) => (
              <Image key={index} src={image} height={1080} alt="Images" width={1920} className="rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-950 text-center py-2">
        <a href="https://www.hookerhillstudios.com" className="hover-link text-white text-xl transition duration-300">
          <span className="word">Hooker </span>
          <span className="word">Hill </span>
          <span className="word">Studios</span>
        </a>
      </div></>
  )
}

export default Home

import React from "react"

const Video = ({ src }) => {
  return (
    <video
      controls
      width="1920"
      height="1080"
      className="mb-4"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video format (h.264 mp4).
    </video>
  )
}

const Home = () => {
  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-13_HD_8.mp4?alt=media&token=e940a3c1-2136-4dce-a54f-1498a0229381",
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-7_3_HD_3.mp4?alt=media&token=dd5f88d1-a82f-4e2d-a5ee-e70347247d7e",
    "https://firebasestorage.googleapis.com/v0/b/builders-land.appspot.com/o/videos%2F10-24_2_4K.mp4?alt=media&token=b1ab3525-044b-4356-a9fc-529fd4dd0af9",
  ]

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6 my-auto place-content-center mx-auto flex flex-col">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-2xl underline font-bold mb-4 text-center text-neutral-950">Video Logo Samples</h1>
          <div className="space-y-4">
            {videos.map((video, index) => (
              <Video
                key={index} src={video} />
            ))}
          </div>
        </div>

      </div>
      <div
        className="bg-neutral-950 text-center duration-200"
      >
        <a href="https://www.hookerhillstudios.com" class="hover-link transition duration-300">
          <span class="word">Hooker </span>
          <span class="word">Hill </span>
          <span class="word">Studios</span>
        </a>

      </div>
    </>
  )
}

export default Home

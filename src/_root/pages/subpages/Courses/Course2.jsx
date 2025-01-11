import { useState } from "react";

const Course2 = () => {
  const [isVisible, setIsVisible] = useState(1);
  const handleVisibilty = (listNumber) => {
    setIsVisible(listNumber);
  }

  return (
    <div className="course-1 mt-12">
      <h1 className="font-bold text-lg">CSS Course</h1>
      <div className="relative mt-12 flex flex-col gap-16 lg:gap-32 lg:flex-row me-10">
        <div className="absolute left-0 right-0 flex flex-col sm:flex-row">
          <div className="flex gap-3 flex-grow">
            <a href="course-details-1/#week1" className="text-blue-700">Week 1</a>
            <p>&gt;</p>
            <a href="" className="text-blue-700 text-nowrap">Introduction to the course</a>
          </div>
          <div className="flex me-8 mt-2 sm:mt-0 gap-7">
            <div>
              <a href="/all courses/course-1" className="flex gap-3 text-blue-700">
                <p>&lt;</p>
                <p>Previous</p>
              </a>
            </div>
            <div>
              <a href="/all courses/course-3" className="flex gap-3 text-blue-700">
                <p>Next</p>
                <p>&gt;</p>
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-16 sm:mt-10 mb-4 w-[100%]">
          {/* <iframe className="w-[100%] h-full" src="https://www.youtube.com/watch?v=AkdVOhYh6fs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <video className="w-[100%]" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">Introduction to the course</video>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-medium">Introduction to the course</h1>
        </div>
        <div className="mb-40">
          <ul className="flex gap-8">
            <li className="text-lg font-medium cursor-pointer" onClick={() => handleVisibilty(1)}>Downloads</li>
            <li className="text-lg font-medium cursor-pointer" onClick={() => handleVisibilty(2)}>Ask Questions</li>
          </ul>
          <hr className="border-gray-400 mt-2"/>
          {isVisible === 1 && (
            <div className="download flex flex-col mt-1 gap-5 text-blue-900">
              <a href="" download className="hover:underline">Lecture video(240 p) mp4</a>
              <a href="" download className="hover:underline">Lecture video(360 p) mp4</a>
              <a href="" download className="hover:underline">Lecture video(720 p) mp4</a>
            </div>
          )}
          {isVisible === 2 && (
            <div className="question mt-2">
              <h1>Go to <a href="/rooms/room1" className="text-blue-900 hover:underline">rooms</a> page to ask your questions</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Course2
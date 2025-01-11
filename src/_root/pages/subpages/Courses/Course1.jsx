import { useState } from "react";

const Course1 = () => {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(1);

  const weeks = [
    // week 1
    {
      week: 1,
      title: "Introduction to the course",
      videos: [
        // week 1 First video
        {
          title: "Introduction Part 1",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 1 Second video
        {
          title: "Introduction Part 2",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 1 Third video
        {
          title: "Introduction Part 2",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 1 Fourth video
        {
          title: "Introduction Part 2",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
      ]
    },
    // Week 2
    {
      week: 2,
      title: "Introduction to the course",
      videos: [
        // week 2 First video
        {
          title: "HTML Basics Part 1",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 2 Second video
        {
          title: "HTML Basics Part 2",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 2 Third video
        {
          title: "HTML Basics Part 3",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
        // week 2 Fourth video
        {
          title: "HTML Basics Part 4",
          videoSrc: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          downloads: [
            "Lecture video (240p) mp4",
            "Lecture video (360p) mp4",
            "Lecture video (720p) mp4"
          ]
        },
      ]
    },
  ]

  // Get the current week and video data
  const currentWeekData = weeks.find(week => week.week === currentWeek);
  const currentVideoData = currentWeekData.videos[currentVideoIndex];
  
  const handleVisibility = (value) => {
    setIsVisible(value);
  };
  return (
    <div className="course-1 mt-12">
      <h1 className="font-bold text-lg">HTML Course</h1>
      <div className="relative mt-12 flex flex-col gap-16 lg:gap-32 lg:flex-row me-10">
        <div className="absolute left-0 right-0 flex flex-col sm:flex-row">
          <div className="flex gap-3 flex-grow">
            {weeks.map(week => (
              <a key={week.week} href={`#week${week.week}`} className="text-blue-700"
              onClick={() => { setCurrentWeek(week.week); setCurrentVideoIndex(0); }}>
                {`Week ${week.week}`}
              </a>
            ))}
          </div>
        </div>
        <div id={`week${currentWeek}`} className="relative mt-16 sm:mt-10 mb-4 w-[100%]">
          <video className="w-[100%]" src={currentVideoData.videoSrc} controls>
            {currentVideoData.title}
          </video>
          <div className="flex gap-4 mt-4">
            {currentWeekData.videos.map((video, index) => (
              <button key={index} onClick={() => setCurrentVideoIndex(index)}
              className={`px-4 py-2 border ${currentVideoIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}>
                {video.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-medium">{currentVideoData.title}</h1>
        </div>
        <div className="mb-40">
          <ul className="flex gap-8">
            <li className="text-lg font-medium cursor-pointer download" onClick={() => handleVisibility(1)}>
              Downloads
            </li>
            <li className="text-lg font-medium cursor-pointer question" onClick={() => handleVisibility(2)}>
              Ask Questions
            </li>
          </ul>
          <hr className="border-gray-400 mt-2"/>
          {isVisible === 1 && (
            <div className="flex flex-col mt-1 gap-5 text-blue-900">
              {currentVideoData.downloads.map((download, index) => (
                <a key={index} href="" download className="hover:underline">{download}</a>
              ))}
            </div>
          )}
          {isVisible === 2 && (
            <div className="mt-2">
              <h1>Go to&nbsp;
                <a href={currentWeekData.questionsLink} className="text-blue-900 hover:underline">
                  rooms
                </a> page to ask your questions
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Course1
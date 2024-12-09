import { useState } from "react"

const Rooms = () => {
  const [visibleist, setVisibilist] = useState("all");

  const handleList = (listNumber) => {
    setVisibilist(listNumber);
  }
  return (
    <div className="rooms flex flex-col gap-8 mt-14 md:mt-0">
      <h1 className="pt-10">Rooms</h1>
      <div className="flex flex-row relative">
        <div className="flex flex-col gap-5 absolute left-10 top-0 right-20 lg:right-[30rem]">
          {visibleist === "all" && (
            <div className="flex flex-col gap-8 mt-14 md:mt-0 mb-20">
              <h3>All Rooms</h3>
              <a href="/rooms/room1" className="flex flex-col items-center border-[1.5px] border-[#000047]">
                <p className="pt-7">HTML Room</p>
                <img src="/assets/images/html.png" alt="" className="w-[10rem] h-[10rem]" />
              </a>
              <a href="/rooms/room2" className="flex flex-col items-center border-[1.5px] border-[#000047] gap-10 p-10">
                <p>JS Room</p>
                <img src="/assets/images/js.png" alt="" className="w-[10rem] h-[7rem]" />
              </a>
              <a href="rooms/room3" className="flex flex-col items-center border-[1.5px] border-[#000047] gap-10 p-10">
                <p>CSS Room</p>
                <img src="/assets/images/css.png" alt="" className="w-[5rem] h-[5rem]" />
              </a>
            </div>
          )}
          {visibleist === 1 && (
            <a href="/rooms/room1" className="flex flex-col items-center border-[1.5px] border-[#000047]">
              <p className="pt-7">HTML Room</p>
              <img src="/assets/images/html.png" alt="" className="w-[20rem] h-[20rem]" />
            </a>
          )}
          {visibleist === 2 && (
            <a href="/rooms/room2" className="flex flex-col items-center border-[1.5px] border-[#000047] gap-10 p-10">
              <p>JS Room</p>
              <img src="/assets/images/js.png" alt="" className="w-[20rem] h-[15rem]" />
            </a>
          )}
          {visibleist === 3 && (
            <a href="rooms/room3" className="flex flex-col items-center border-[1.5px] border-[#000047] gap-10 p-10">
              <p>CSS Room</p>
              <img src="/assets/images/css.png" alt="" className="w-[20rem] h-[20rem]" />
            </a>
          )}
        </div>
        <div className="hidden lg:flex flex-col gap-5 w-72 bg-white border-2 border-gray-100 items-center pt-5 pb-7
        absolute right-20 h-96">
          <p className="text-slate-500 text-lg border-b-2 border-gray-400">Browse Topics</p>
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList("all")}>All</p>
            </li>
          </ul>
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(1)}>HTML Room</p>
            </li>
          </ul>
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(2)}>JS Room</p>
            </li>
          </ul>
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(3)}>CSS Room</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rooms
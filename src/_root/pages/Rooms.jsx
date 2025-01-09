import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [visibleist, setVisibilist] = useState("all");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleList = (listNumber) => {
    setVisibilist(listNumber);
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:80/Skill-nova-BackEnd/index.php?action=Allrooms');
            console.log('Full API response:', response);
            setData(response.data);
            console.log('Data fetched:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);

  const viewRoom = (roomID) => {
    navigate(`/rooms/room?answerRoomID=${roomID}`);
  }
  return (
    <div className="rooms flex flex-col gap-8 mt-14 md:mt-0">
      <h1 className="pt-10">Rooms</h1>
      <div className="flex flex-row relative">
        <div className="flex flex-col gap-5 absolute left-10 top-0 right-20 lg:right-[30rem]">
          {/* {data.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))} */}
          {visibleist === "all" && (
            <div className="flex flex-col gap-8 mt-14 md:mt-0 mb-20">
              <h3>All Rooms</h3>
              {data.map((item, index) => (
                <div key={index} className="relative pt-9">
                  <ul>
                    <li className="relative bg-white border-[1.9px] border-gray-300 rounded-lg">
                      <section className="inline-flex items-center gap-7 h-[100%]">
                        <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                            <img src="/assets/images/js.png" alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                        </div>
                        <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                            <h1 className="font-bold">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="mb-10 flex text-white ms-9 me-9 rounded-xl">
                            {/* <a href="/rooms/room1" className="w-[100%] text-center h-8 pt-1">View Room</a> */}
                            <button className="w-[100%] text-center h-10 pt-1" onClick={() => viewRoom(item.roomID)}>ViewRoom</button>
                        </div>
                      </section>
                    </li>
                  </ul>
                </div>
              ))}
              {/* <a href="/rooms/room2" className="flex flex-col items-center border-[1.5px] border-gray-300 bg-white rounded-lg gap-10 p-10">
                <p>JS Room</p>
                <img src="/assets/images/js.png" alt="" className="w-[10rem] h-[7rem]" />
              </a>
              <a href="rooms/room3" className="flex flex-col items-center border-[1.5px] border-gray-300 bg-white rounded-lg gap-10 p-10">
                <p>CSS Room</p>
                <img src="/assets/images/css.png" alt="" className="w-[5rem] h-[5rem]" />
              </a> */}
            </div>
          )}
          {data.map((item, index) => (
            visibleist === item.roomID && (
              <div key={index} className="relative pt-9">
                <ul>
                  <li className="relative bg-white border-[1.9px] border-gray-300 rounded-lg">
                    <section className="inline-flex flex-col gap-7 h-[100%]">
                      <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                          <img src="/assets/images/js.png" alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                      </div>
                      <div className="flex flex-col gap-1 max-w-[100%] ms-9">
                          <h1 className="font-bold">{item.title}</h1>
                          <p>{item.description}</p>
                      </div>
                      <div className="mb-10 flex text-white ms-9 me-9 rounded-xl">
                        {/* <a href="/rooms/room1" className="w-[100%] text-center h-8 pt-1">View Room</a> */}
                        <button className="w-[100%] text-center h-10 pt-1" onClick={() => viewRoom(item.roomID)}>ViewRoom</button>
                      </div>
                    </section>
                  </li>
                </ul>
              </div>
            )
          ))}
          {/* {visibleist === 2 && (
            <a href="/rooms/room2" className="flex flex-col items-center border-[1.5px] border-gray-300 bg-white rounded-lg gap-10 p-10">
              <p>JS Room</p>
              <img src="/assets/images/js.png" alt="" className="w-[20rem] h-[15rem]" />
            </a>
          )}
          {visibleist === 3 && (
            <a href="rooms/room3" className="flex flex-col items-center border-[1.5px] border-gray-300 bg-white rounded-lg gap-10 p-10">
              <p>CSS Room</p>
              <img src="/assets/images/css.png" alt="" className="w-[20rem] h-[15rem]" />
            </a>
          )} */}
        </div>
        <div className="hidden lg:flex flex-col gap-5 w-72 bg-white border-2 border-gray-100 items-center pt-5 pb-7
        absolute right-20 h-96 rounded-lg">
          <p className="text-slate-500 text-lg border-b-2 border-gray-400">Browse Topics</p>
          {/* {data.map((item, index) => (
            
          ))} */}
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList("all")}>All</p>
            </li>
          </ul>
          {data.map((item, index) => (
          <ul key={index} className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(item.roomID)}>{item.title}</p>
            </li>
          </ul>
          ))}
          {/* <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(2)}>JS Room</p>
            </li>
          </ul>
          <ul className="border-b-2 border-gray-400">
            <li>
              <p className="cursor-pointer" onClick={() => handleList(3)}>CSS Room</p>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Rooms
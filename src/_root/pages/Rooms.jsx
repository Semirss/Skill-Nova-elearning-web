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
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);

  const viewRoom = (roomID, roomTitle) => {
    navigate(`/rooms/room?answerRoomID=${roomID}&title=${roomTitle}`);
  }
  return (
    <div className="rooms flex flex-col gap-8 mt-14 md:mt-0">
      <h1 className="pt-10 text-4xl font-extrabold text-center text-blue-600">Rooms</h1>
      <div className="flex flex-row relative">
        <div className="flex flex-col gap-5 absolute left-10 top-0 right-20 lg:right-[30rem]">
          {visibleist === "all" && (
            <div className="flex flex-col gap-8 mt-14 md:mt-0 mb-20">
              <h3 className="text-3xl font-semibold text-blue-500">All Rooms</h3>
              {data.map((item, index) => (
                <div key={index} className="relative pt-9">
                  <ul className="w-full">
                    <li className="relative bg-white border-2 border-gray-300 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow w-full">
                      <section className="flex items-center gap-7">
                        <div className="flex flex-col gap-1">
                          <h1 className="font-bold text-2xl text-gray-800">{item.title}</h1>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <div className="ml-auto">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            onClick={() => viewRoom(item.roomID, item.title)} >
                            View Room
                          </button>
                        </div>
                      </section>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
          {data.map((item, index) => (
            visibleist === item.roomID && (
              <div key={index} className="relative pt-9">
                <ul className="w-full">
                  <li className="relative bg-white border-2 border-gray-300 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow w-full">
                    <section className="flex flex-col gap-7">
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-2xl text-gray-800">{item.title}</h1>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="ml-auto">
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                          onClick={() => viewRoom(item.roomID)}>
                          View Room
                        </button>
                      </div>
                    </section>
                  </li>
                </ul>
              </div>
            )
          ))}
        </div>
        <div className="hidden lg:flex flex-col gap-5 w-72 bg-white border-2 border-gray-100 items-center pt-5 pb-7 absolute right-20 h-max rounded-lg shadow-lg">
          <p className="text-slate-500 text-lg border-b-2 border-gray-400 pb-2">Browse Topics</p>
          <ul className="border-b-2 border-gray-400 text-center">
            <li className="w-full">
              <p className="cursor-pointer  text-black hover:text-blue-500 transition"
                onClick={() => handleList("all")}>
                All
              </p>
            </li>
          </ul>
          {data.map((item, index) => (
            <ul key={index} className="border-b-2 border-gray-400 text-center">
              <li className="w-full">
                <p className="cursor-pointer py-2 text-black hover:text-blue-500 transition"
                  onClick={() => handleList(item.roomID)}>
                  {item.title}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rooms
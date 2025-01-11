import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllRooms = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [courseID, setCourseID] = useState('');
    const [roomTitle, setRoomTitle] = useState('');
    const [roomDescription, setRoomDescription] = useState('');
    const [isVisibleRoom, setIsVisibleRoom] = useState(false);
    const [data, setData] = useState([]);

    const roomVisibility = () => {
        setIsVisibleRoom(!isVisibleRoom);
        const rooms = document.querySelector('.room');
        rooms.style.pointerEvents = "none";
        rooms.style.filter = "blur(3px)";
    }

    const showRooms = () => {
        const showAll = document.querySelector('.show-all');

        setShow(!show)
        showAll.style.display = "none";
    }

    const hideRooms = () => {
        const showAll = document.querySelector('.show-all');
        setShow(!show);

        showAll.style.display = "block";
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
    
      const viewRoom = (roomID) => {
        navigate(`/admin-page/all-rooms/room?roomID=${roomID}`);
    }

    const AddRoom = async (event) => {
        const rooms = document.querySelector('.room');
        event.preventDefault();
        const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";
    
        const requestData = {
            action: 'addRoom',
            courseID,
            roomTitle,
            roomDescription
        };
    
        console.log('Sending request:', requestData);
    
        try {
            const response = await axios.post(`${API_URL}`, requestData);
            console.log('Raw response:', response);
    
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success); 
            console.log('data.message:', data.message);
    
            if (data.success) {
                alert("Added successfully!");
                roomVisibility();
                rooms.style.filter = "none";
                window.location.reload();
            } else {
                alert(`failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    const deleteRoom = async (roomID) => {
        try {
            const response = await axios.post('http://localhost:80/Skill-nova-BackEnd/index.php', {
                action: 'deleteRoom',
                roomID
            });
            console.log('Delete Course Response:', response.data);
            setData(data.filter(item => item.roomID !== roomID));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-100">
          <div className="bg-primary h-14 w-full text-secondary px-12 py-4 shadow-md">
            <h1 className="text-2xl font-bold">Skill Nova</h1>
          </div>
          <div className="mt-10 ms-16 me-10 room flex flex-col gap-10">
            <div className="relative">
              <h1 className="text-3xl font-semibold mb-6">All ROOMS</h1>
              <div className="relative all-room pt-9">
                <ul>
                {data.map((item, index) => (
                  index < 3 && (
                  <li key={index} className="relative w-full bg-white border border-gray-300 rounded-lg shadow-md p-6">
                    <section className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-xl">{item.title}</h1>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => viewRoom(item.roomID)}>View Room</button>
                        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                      </div>
                    </section>
                  </li>
                  )
                ))}
                </ul>
                <p className="show-all pt-3 absolute right-24 cursor-pointer text-blue-500 hover:underline" onClick={showRooms}>Show all</p>
              </div>
              {show && (
                <div className="relative all-room pt-16">
                  <ul>
                  {data.map((item, index) => (
                    index > 2 && (
                    <li key={index} className="relative w-full bg-white border border-gray-300 rounded-lg shadow-md p-6">
                      <section className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-xl">{item.title}</h1>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => viewRoom(item.roomID)}>View Room</button>
                        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                      </div>
                      </section>
                    </li>
                    )
                  ))}
                  </ul>
                  <p className="absolute right-24 pt-3 cursor-pointer text-blue-500 hover:underline" onClick={hideRooms}>Show less</p>
                </div>
              )}
            </div>
            <div className='w-40 h-10 mb-14 pt-2 text-center text-white bg-green-500 rounded-xl hover:bg-green-600'>
              <button onClick={roomVisibility}>Add Room</button>
            </div>
          </div>
          {isVisibleRoom && (
            <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
            xl:right-64 top-32 justify-center items-center h-96 shadow-lg rounded-lg p-6">
              <h1 className="text-2xl font-bold">Add Rooms</h1>
              <form onSubmit={AddRoom} className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex flex-col gap-1">
                  <label htmlFor="id" className="ps-2">Course ID</label>
                  <input type="number" name="id" id="id" className="text-black p-2 rounded-lg"
                  value={courseID} onChange={(e) => setCourseID(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="ps-2">Course Title</label>
                  <input type="text" name="title" id="title" className="text-black p-2 rounded-lg"
                  value={roomTitle} onChange={(e) => setRoomTitle(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="description" className="ps-2">Description</label>
                  <input type="text" name="description" id="description" className="text-black p-2 rounded-lg"
                  value={roomDescription} onChange={(e) => setRoomDescription(e.target.value)}/>
                </div>
                <button type="submit" className="w-20 mt-2 self-center border-[1px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add</button>
              </form>
            </div>
          )}
        </div>
    )
}

export default AllRooms
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
            // setMessage("An error occurred. Please try again.");
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
        <div className="relative">
            <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
                <h1 className="">Skill Nova</h1>
            </div>
            <div className="mt-10 ms-12 me-12 room flex flex-col gap-20">
                <div className="relative">
                    <h1>All ROOMS</h1>
                    <div className="relative all-room pt-9">
                        <ul>
                        {data.map((item, index) => (
                            index < 3 && (
                            <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg">
                                <section className="inline-flex flex-col gap-7 h-[100%]">
                                    {/* <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                                        <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                                    </div> */}
                                    <div className="flex flex-col gap-1 max-w-[100%] ms-9 mt-5">
                                        <h1 className="font-bold">{item.title}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="mb-10 flex gap-3 w-[100%] text-white ms-5 me-5 rounded-xl">
                                        {/* <a href="/rooms/room1" className="w-[100%] text-center h-8 pt-1">View Room</a> */}
                                        <button className="text-center h-10 pt-1" onClick={() => viewRoom(item.roomID)}>View Room</button>
                                        <button className="text-center h-10 pt-1" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                                    </div>
                                    {/* <div className="mb-10 flex text-white ms-9 me-9 rounded-xl">
                                        <button className="w-[100%] text-center h-10 pt-1" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                                    </div> */}
                                </section>
                            </li>
                            )
                        ))}
                        </ul>
                        <p className="show-all pt-3 absolute right-24 cursor-pointer" onClick={showRooms}>Show all</p>
                    </div>
                    {show && (
                        <div className="relative all-room pt-16">
                            <ul>
                            {data.map((item, index) => (
                                index > 2 && (
                                <li key={index} className="relative w-[80%] bg-white border-[1.9px] border-gray-300 rounded-lg">
                                    <section className="inline-flex flex-col gap-7 h-[100%]">
                                    {/* <div className="max-w-[100%] relative mx-0 my-auto flex justify-center">
                                        <img src={item.image} alt="" className="w-[60%] h-[100%] max-w-[60%] max-h-[100%]"/>
                                    </div> */}
                                    <div className="flex flex-col gap-1 max-w-[100%] ms-9 mt-5">
                                        <h1 className="font-bold">{item.title}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="mb-10 flex gap-3 w-[100%] text-white ms-5 me-5 rounded-xl">
                                        {/* <a href="/rooms/room1" className="w-[100%] text-center h-8 pt-1">View Room</a> */}
                                        <button className="text-center h-10 pt-1" onClick={() => viewRoom(item.roomID)}>View Room</button>
                                        <button className="text-center h-10 pt-1" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                                    </div>
                                    {/* <div className="mb-10 flex text-white ms-9 me-9 rounded-xl">
                                        <button className="w-[100%] text-center h-10 pt-1" onClick={() => deleteRoom(item.roomID)}>Delete Room</button>
                                    </div> */}
                                    </section>
                                </li>
                                )
                            ))}
                            </ul>
                            <p className="absolute right-24 pt-3 cursor-pointer" onClick={hideRooms}>Show less</p>
                        </div>
                    )}
                </div>
                <div className='w-40 h-8 mb-14 pt-1 text-center text-white rounded-xl'>
                    <button onClick={roomVisibility}>Add Room</button>
                </div>
            </div>
            {isVisibleRoom && (
                <div className="flex flex-col gap-5 bg-primary text-white fixed left-12 right-12 md:left-[7rem] md:right-20 lg:left-[10rem] lg:right-36 xl:left-[15rem] 
                xl:right-64 top-32 justify-center items-center h-96">
                    <h1>Add Rooms</h1>
                    <form onSubmit={AddRoom} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="id" className="ps-2">Course ID</label>
                            <input type="number" name="id" id="id" className="text-black"
                            value={courseID} onChange={(e) => setCourseID(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="title" className="ps-2">Course Title</label>
                            <input type="text" name="title" id="title" className="text-black"
                            value={roomTitle} onChange={(e) => setRoomTitle(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <label htmlFor="description" className="ps-2">Description</label>
                            <input type="text" name="description" id="description" className="text-black"
                            value={roomDescription} onChange={(e) => setRoomDescription(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-20 mt-2 ms-20 border-[1px]">Add</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default AllRooms
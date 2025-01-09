import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminRoom = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomID = queryParams.get('roomID');
  
    useEffect(() => {
    const fetchData = setInterval(async () => {
        try {
            const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?roomID=${roomID}`);
            setData(response.data);
            console.log('Data fetched:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, 5000);

    return () => clearInterval(fetchData);

    }, [roomID]);
    
    const setAnswer = (questionID) => {
        navigate(`/admin-page/all-rooms/room/answer?questionID=${questionID}`);
    }
    return (
        <div className="relative">
            <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
                <h1 className="">Skill Nova</h1>
            </div>
            <div className="mt-10 ms-20 gap-24">
                {/* <h1>All ROOM</h1> */}
                <div className="relative pt-9">
                    <ul>
                        {data.map((item, index) => (
                            <li key={index} className="relative w-96 bg-white border-[1.9px] border-gray-300 rounded-lg h-52 ps-5 pt-5">
                                <section className="flex flex-col gap-7 w-[100%]">
                                    <div className="flex flex-col gap-1 max-w-[100%]">
                                        <h1 className="font-bold">Question</h1>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className="mb-10 flex text-white rounded-xl ms-0 me-52">
                                        <button className="text-center h-8" onClick={() => setAnswer(item.questionID)}>Set Answer</button>
                                    </div>
                                </section>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminRoom
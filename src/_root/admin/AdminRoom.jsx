import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminRoom = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomID = queryParams.get('roomID');


    useEffect(() => {
    const fetchData = setInterval(async () => {
        try {
            const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?roomID=${roomID}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, 1000);

    return () => clearInterval(fetchData);

    }, [roomID]);
    
    const setAnswer = (questionID) => {
        navigate(`/admin-page/all-rooms/room/answer?questionID=${questionID}`);
    }
    return (
        <div className="relative min-h-screen bg-gray-100">
          <header className="bg-primary h-14 w-full text-secondary px-12 py-4 shadow-md">
            <h1 className="text-2xl font-bold">Skill Nova</h1>
          </header>
          {loading ? <p className="mt-10 px-20 text-2xl">Loading...</p> :
            <main className="mt-10 px-20">
                <div className="grid gap-8">
                {data.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg p-5 shadow-sm">
                    <section className="flex flex-col gap-4">
                        <div>
                        <h2 className="text-xl font-semibold">Question</h2>
                        <p className="text-gray-700">{item.question}</p>
                        </div>
                        <div className="flex justify-end">
                        <button 
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                            onClick={() => setAnswer(item.questionID)}>
                            Set Answer
                        </button>
                        </div>
                    </section>
                    </div>
                ))}
                </div>
            </main>
          }
        </div>
    )
}

export default AdminRoom
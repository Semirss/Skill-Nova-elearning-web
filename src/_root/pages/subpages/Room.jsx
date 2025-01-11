import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Room = () => {
    const [question, setQuestion] = useState('');
    const [questionID, setQuestionID] = useState('');
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomID = queryParams.get('answerRoomID');
    const roomTitle = queryParams.get('title');

    useEffect(() => {
        if (questionID) {
            const fetchDataByID = async () => {
                try {
                    const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?questionID=${questionID}`);
                    setData(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchDataByID();
            const interval = setInterval(fetchDataByID, 3000);
            return () => clearInterval(interval);
        }
    }, [questionID]);

    useEffect(() => {
            const fetchAllData = async () => {
                try {
                    const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?answerRoomID=${roomID}`);
                    setAllData(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchAllData();
            const interval = setInterval(fetchAllData, 3000);
            return () => clearInterval(interval);
    }, [roomID]);

    const handleSubmit = async (event) => {
        const userID = localStorage.getItem('userID');
        event.preventDefault();
        const URL = "http://localhost:80/Skill-nova-BackEnd/index.php";

        try {
            const response = await axios.post(`${URL}`, {
                action: 'AskQuestion',
                userID,
                roomID,
                question
            });

            const data = response.data;

            if (data.success) {
                alert("Success");
                setQuestionID(data.questionID);
            } else {
                alert("Failed");
            }
        } catch {
            alert("An error occurred. Please try again.");
        }
    }
    return (
        <div className="first-room mt-14 md:mt-0">
            <h5 className="pt-10 text-2xl font-semibold text-center text-blue-900">{roomTitle}</h5>
            <div className="mt-8 max-w-4xl">
                {!questionID ? (
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="relative w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
                        <label htmlFor="question" className="block text-lg font-medium text-gray-700 mb-2">Ask Question</label>
                        <textarea name="ask" id="question" rows={5} value={question} onChange={(e) => setQuestion(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </textarea>
                        <button type="submit"
                        className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Ask
                        </button>
                    </form>
                </div>
                ) : (
                <div className="relative mb-36">
                    <h5 className="text-lg font-medium text-gray-700 mb-4">Answer</h5>
                    {data.map((item, index) => (
                    <div key={index} className="p-4 mb-4 bg-gray-100 border border-gray-300 rounded-lg">
                        <p className="text-gray-800">{item.answer ? item.answer : "Loading..."}</p>
                    </div>
                    ))}
                </div>
                )}
                <div className="pt-28 h-screen relative">
                <h5 className="text-lg font-medium text-gray-700 mb-4">Recently asked questions</h5>
                <div className="space-y-4 max-w-4xl mx-auto">
                    {allData.map((item, index) => (
                    item.answer && (
                        <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                        <p className="text-gray-800 font-semibold">{item.question}</p>
                        <p className="text-gray-600 mt-2">{item.answer}</p>
                        </div>
                    )
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Room
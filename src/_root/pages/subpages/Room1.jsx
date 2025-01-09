import axios from "axios";
import { useEffect, useState } from "react";

const Room1 = () => {
    const [question, setQuestion] = useState('');
    const [questionID, setQuestionID] = useState('');
    // const [answer, setAnswer] = useState('');
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([])

    useEffect(() => {
        if (questionID) {
            const fetchDataByID = async () => {
                try {
                    const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?questionID=${questionID}`);
                    setData(response.data);
                    console.log('Full Answer response:', response);
                    const data = response.data;
                    console.log('Received Answer response:', data);
                    console.log('data.success:', data.success);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchDataByID();
            const interval = setInterval(fetchDataByID, 5000);
            return () => clearInterval(interval);
        }
    }, [questionID]);

    useEffect(() => {
            const fetchAllData = async () => {
                try {
                    const response = await axios.get(`http://localhost:80/Skill-nova-BackEnd/index.php?action=fetchAllQuestionsAnswers`);
                    setAllData(response.data);
                    console.log('Full Answer response:', response);
                    const data = response.data;
                    console.log('Received Answer response:', data);
                    console.log('data.success:', data.success);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchAllData();
            const interval = setInterval(fetchAllData, 5000);
            return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (event) => {
        const userID = localStorage.getItem('userID');
        event.preventDefault();
        const URL = "http://localhost:80/Skill-nova-BackEnd/index.php";

        try {
            const response = await axios.post(`${URL}`, {
                action: 'AskQuestion',
                userID,
                question
            });

            console.log('Full response:', response);
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success);

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
        <h5 className="pt-10">HTML Room</h5>
        <div>
            {!questionID ? (
            <div>
                <form onSubmit={handleSubmit} className="relative w-72 xsm:w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <label htmlFor="question" className="absolute top-5 left-7">Ask Question</label>
                    <textarea name="ask" id="question" className="mt-12 ms-7 w-full ps-4 pt-3 bg-[#F8FAFC] border-[1px] border-[#000047]" rows={7}
                    value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                    <button type="submit" className="ms-[20rem] md:ms-[30rem]">Ask</button>
                </form>
            </div>
            ):(
                // <div className="relative">
                //     <h5 className="absolute top-5 left-7">Answer</h5>
                //     data.answer ? (
                //         <p className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 border-[1px] border-primary h-28">
                //             {data.answer}
                //         </p> ):(
                //         <p className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 border-[1px] border-primary h-28">
                //             Loading ...
                //         </p>)
                // </div>
                <div className="relative mb-36">
                    <h5 className="absolute top-5 left-7">Answer</h5>
                    {/* {data.answer ? (
                        <p className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 border-[1px] border-primary h-28">
                            {data.answer}
                        </p>
                    ) : (
                        <p className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 border-[1px] border-primary h-28">
                            Loading...
                        </p>
                    )} */}
                    {data.map((item, index) => (
                        <p key={index} className="absolute left-7 right-24 md:right-40 lg:right-80 xl:right-96 top-12 ps-4 pt-3 border-[1px] border-primary h-28">
                            {item.answer ? item.answer : "Loading..."}
                        </p>
                    ))}
                </div>
                // data.answer ? (<h1>{data.answer}</h1>) : (<p>Loading ....</p>)
            )}
            <div className="pt-28 h-screen relative">
                <h5 className="ps-7">Recently asked questions</h5>
                <div className="absolute left-7 right-24 lg:right-64 xl:right-80 mt-3 bg-[#000047] text-white">
                    {allData.map((item, index) => (
                        item.answer && (
                            <div key={index} className="h-20 border-s-2 border-gray-400 ms-8 mt-5 mb-5">
                                <p className="ps-4 pt-2">{item.question}</p>
                                <p className="ps-2 pt-2">{item.answer}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Room1
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Answer = () => {
    const [answer, setAnswer] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const questionID = queryParams.get('questionID');

    const handleSubmit = async (event) => {
        const userID = localStorage.getItem('userID')
        event.preventDefault();
        const URL = "http://localhost:80/Skill-nova-BackEnd/index.php";

        try {
            const response = await axios.post(`${URL}`, {
                action: 'setAnswer',
                questionID,
                userID,
                answer
            });

            console.log('Full response:', response);
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success);

            if (data.success) {
                alert("success");
            } else {
                alert("Failed");
            }
        } catch {
            alert("An error occurred. Please try again.");
        }
    }
  return (
    <div className="relative">
        <div className="bg-primary h-14 w-screen text-secondary ps-12 pt-4">
            <h1 className="">Skill Nova</h1>
        </div>
        <div className="mt-10 ms-20">
            <h1>Set Answer</h1>
            <div className="relative pt-9">
                <div className="absolute w-72 xsm:w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-1 text-blue-950">
                        <textarea name="answer" id="answer" className="w-full ps-4 pt-3 bg-[#F8FAFC] border-[1px] border-[#000047]" rows={7}
                        value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                        <button type="submit" className="border-[1px] ms-0 me-96">Respond</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answer
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
        <div className="relative min-h-screen">
            <header className="bg-primary h-14 w-full text-secondary px-12 py-4 shadow-md">
                <h1 className="text-2xl font-bold">Skill Nova</h1>
            </header>
            <main className="mt-12 px-20">
                <h1 className="text-4xl font-semibold mb-8 text-center text-primary">Set Answer</h1>
                <div className="relative pt-12 flex justify-center">
                    <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-blue-950">
                            <textarea name="answer" id="answer" rows={7} value={answer} onChange={(e) => setAnswer(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                            placeholder="Type your answer here..."
                            ></textarea>
                            <button type="submit" 
                            className="self-end px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75">
                                Respond
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Answer
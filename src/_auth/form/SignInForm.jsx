import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const API_URL = "http://localhost:80/Skill-nova-BackEnd/index.php";

        try {
            const response = await axios.post(`${API_URL}`, {
                action: 'login',
                userName,
                password
            });

            console.log('Full response:', response);
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success);
            console.log('data.userID:', data.userID);
            
            if (data.success) {
                setMessage("Login successful!");
                // Store session data (username) and (userID)
                localStorage.setItem('userName', data.userName);
                localStorage.setItem('userID', data.userID);
                navigate('/dashboard')
            } else {
                setMessage("Login Failed");
            }
        } catch {
            // console.error("Error submitting form", error);
            setMessage("An error occurred. Please try again.");
        }
    }
    return (
        <div className="auth-form bg-white border-[.2px] border-primary fixed left-12 right-12 xl:left-[24rem] 
        xl:right-96 top-32 flex justify-center items-center h-[30rem] rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center text-blue-950 w-full max-w-sm p-6">
                <h1 className="text-2xl font-bold mb-4">Log In</h1>
                <div className="flex flex-col items-start w-full mb-4">
                    <label htmlFor="uName" className="mb-1">User Name</label>
                    <input type="text" id="uName" value={userName} onChange={(e) => setUserName(e.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="flex flex-col items-start w-full mb-4">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <button type="submit" 
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                    Login
                </button>
                <p className="form-link mt-4">
                    Don&apos;t have an account?&nbsp;
                    <a href="/sign-up" className="text-blue-700 hover:underline">Register here</a>
                </p>
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </form>
        </div>
    )
}

export default SignInForm
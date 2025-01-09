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
        xl:right-96 top-32 justify-center items-center h-[25rem] rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center text-blue-950">
                <h1>Log In</h1>
                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="uName" className="-ms-28">User Name</label>
                  <input type="text"id="uName" value={userName} onChange={(e) => setUserName(e.target.value)} 
                  className="w-[200px] text-black"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="password" className="-ms-32">Password</label>
                  <input type="text"id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-[200px] text-black"/>
                </div>
                <button type="submit" className="border-[1px] w-[80px]">
                    {/* <a href="/dashboard">Login</a> */}
                    Login
                </button>
                <p className="form-link">Don&apos;t have an account?&nbsp;
                    <a href="/sign-up" className="text-blue-700">Register here</a>
                </p>
                {message && <p>{message}</p>}
            </form>
            {/* {message && <p>message</p>} */}
        </div>
    )
}

export default SignInForm
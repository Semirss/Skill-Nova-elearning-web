import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
      const[fullName, setFullName] = useState('');
      const[userName, setUserName] = useState('');
      const[email, setEmail] = useState('');
      const[password, setPassword] = useState('');
      const[message, setMessage] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (event) => {
        event.preventDefault();
        const API_URL = "http://localhost/Skill-nova-BackEnd/index.php";
    
        const requestData = {
            action: 'register',
            fullName,
            userName,
            email,
            password
        };
    
        console.log('Sending request:', requestData);
    
        try {
            const response = await axios.post(`${API_URL}`, requestData);
    
            const data = response.data;
    
            if (data.success) {
                setMessage("Registered successfully!");
                navigate('/sign-in')
            } else {
                setMessage(`SignUp Failed: ${data.message}`);
            }
        } catch {
            setMessage("An error occurred. Please try again.");
        }
    }

    return (
      <div className="auth-form bg-white border-[.2px] border-primary fixed left-12 right-12 xl:left-[26rem] 
      xl:right-[26rem] top-16 justify-center items-center h-[39rem] rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center text-blue-950">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <div className="flex flex-col items-center gap-2 w-full">
            <label htmlFor="fName" className="self-start ml-8">Full Name</label>
            <input type="text" id="fName" name="firstName" value={fullName} onChange={(e) => setFullName(e.target.value)} required
            className="w-full p-2 border rounded-md text-black" />
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <label htmlFor="uName" className="self-start ml-8">User Name</label>
            <input type="text" id="uName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required
            className="w-full p-2 border rounded-md text-black"/>
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <label htmlFor="email" className="self-start ml-8">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            />
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <label htmlFor="password" className="self-start ml-8">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required
            className="w-full p-2 border rounded-md text-black"
            />
          </div>
          <button 
            type="submit" 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          <p className="form-link mt-4">
            Already have an account? 
            <a href="sign-in" className="text-blue-700 ml-1">Login here</a>
          </p>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>
      </div>
    )
}

export default SignUpForm
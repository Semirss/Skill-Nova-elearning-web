
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogIn = () => {
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const API_URL = "http://localhost:80/Skill-nova-BackEnd/index.php";

        try {
            const response = await axios.post(`${API_URL}`, {
                action: 'adminLogin',
                userName,
                password
            });

            const data = response.data;
            
            if (data.success) {
                alert("Login successful!");
                navigate('/admin-page')
            } else {
                alert("Login Failed");
            }
        } catch {
            alert("An error occurred. Please try again.");
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="auth-form bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-center text-blue-950">Log In</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="uName" className="text-sm font-medium text-gray-700">User Name</label>
            <input type="text" id="uName" name="userName" className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
            value={userName} onChange={(e) => setUserName(e.target.value)} required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-primary"
            value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button className="w-full py-2 mt-4 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">
            <a href="/admin-page">Login</a>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogIn
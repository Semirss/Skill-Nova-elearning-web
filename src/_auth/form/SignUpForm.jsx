import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
      const[fullName, setFullName] = useState('');
      const[userName, setUserName] = useState('');
      const[email, setEmail] = useState('');
      const[password, setPassword] = useState('');
      const[message, setMessage] = useState('');
      // const[user, setUser] = useState('');

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
            console.log('Raw response:', response);
    
            const data = response.data;
            console.log('Received response:', data);
            console.log('data.success:', data.success); 
            console.log('data.message:', data.message);
            // console.log('data.message:', data.userID);
    
            if (data.success) {
                setMessage("Registered successfully!");
            } else {
                setMessage(`SignUp Failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage("An error occurred. Please try again.");
        }
    }

    


    return (
        <div className="auth-form bg-white border-[.2px] border-primary fixed left-12 right-12 xl:left-[24rem] 
        xl:right-96 top-20 justify-center items-center h-[34rem] rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center text-blue-950">
                <h1>Register</h1>
                <div className="flex flex-col items-center gap-2">
                  <label  htmlFor="fName" className="-ms-28">Full Name</label>
                  <input type="text" id="fName" name="firstName" value={fullName} onChange={(e) => setFullName(e.target.value)}
                  className="w-[200px] text-black" />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="uName" className="-ms-28">User Name</label>
                  <input type="text"id="uName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}
                  className="w-[200px] text-black"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="email" className="-ms-40">Email</label>
                  <input type="text"id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-[200px] text-black"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="password" className="-ms-32">Password</label>
                  <input type="text"id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-[200px] text-black"/>
                </div>
                <button type="submit" className="border-[1px] w-[80px]">
                    {/* <a href="/dashboard">SignUp</a> */}
                    SignUp
                </button>
                <p className="form-link">Already have an account
                  <a href="sign-in" className="text-blue-700">Login here</a>
                </p>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

export default SignUpForm
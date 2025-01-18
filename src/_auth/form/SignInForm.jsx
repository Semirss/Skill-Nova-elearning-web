import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignInForm.css'; 

const SignInForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
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

      const data = response.data;
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
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="cont">
    <div className="auth-form">
      <form onSubmit={handleSubmit} className="auth-form-content">
        <h1 className="form-title">Log In</h1>
        <div className="form-group">
          <label htmlFor="uName">User Name</label>
          <input 
            type="text" 
            id="uName" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            required 
          />
       
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        <p className="form-link">
          Don&apos;t have an account?&nbsp;
          <a href="/sign-up" className="register-link">Register here</a>
        </p>
        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
    </div>
  );
};

export default SignInForm;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
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

    try {
      const response = await axios.post(`${API_URL}`, requestData);
      const data = response.data;

      if (data.success) {
        setMessage("Registered successfully!");
        navigate('/sign-in');
      } else {
        setMessage(`SignUp Failed: ${data.message}`);
      }
    } catch {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h1 className="form-title">Register</h1>
        <div className="form-group">
          <label htmlFor="fName">Full Name</label>
          <input
            type="text"
            id="fName"
            name="firstName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="uName">User Name</label>
          <input
            type="text"
            id="uName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
        <p className="form-link">
          Already have an account?{" "}
          <a href="/sign-in" className="register-link">Login here</a>
        </p>
        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;

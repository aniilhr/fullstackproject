import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './Registration.css'; // External styling

const Registration = () => {
  let navigate = useNavigate();
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [a, seta] = useState('');

  const store = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/register/", {
        username, email, password
      });
      if (res.status === 200) {
        alert("Registration Successful");
        seta("red");
        navigate('/Login');
      }
    } catch (err) {
      alert(err?.response?.status === 400 ? "User already exists" : "Something went wrong");
    }
  };

  return (
    <div className="register-bg">
      <div className="register-card">
        <form onSubmit={store}>
          <h2 className="register-header">Create an Account</h2>
          <p className="register-subtitle">Start your journey today</p>

          <label>Username</label>
          <input type="text" placeholder="Enter your name" onChange={(e) => setusername(e.target.value)} required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)} required />

          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-redirect">
          Already have an account? <Link to="/Login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;

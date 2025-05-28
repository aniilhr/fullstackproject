import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css'; // External styling

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [a, seta] = useState("");

  const store = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/loginview/", { username, password });
      if (res.status === 200) {
        alert("Login Successful");
        seta("red");
        localStorage.setItem("name", username);
        localStorage.setItem("login", "true");
        navigate('/');
      }
    } catch (err) {
      alert(err?.response?.status === 400 ? "No User Found" : "Something went wrong");
    }
  };

  return (
    // <div className="login-bg">
    //   <div className="login-glass-card">
    //     <form onSubmit={store}>
    //       <h2 className="login-header">Welcome Back 👋</h2>
    //       <p className="login-subtitle">Login to your account</p>

    //       <label htmlFor="username">Username</label>
    //       <input
    //         id="username"
    //         type="text"
    //         placeholder="Enter your name"
    //         onChange={(e) => setusername(e.target.value)}
    //         required
    //       />

    //       <label htmlFor="password">Password</label>
    //       <input
    //         id="password"
    //         type="password"
    //         placeholder="Enter your password"
    //         onChange={(e) => setpassword(e.target.value)}
    //         required
    //       />

    //       <button type="submit" className="login-button">Login</button>
    //     </form>
    //     <br/>
    //     <center>
    //     Don't Have Account?<a href='/registration' className='regi'> Register</a>
    //     </center>
    //   </div>
    // </div>
    <div className="login-bg">
  <div className="login-glass-card" data-aos="fade-up">
    <form onSubmit={store}>
      <h2 className="login-header" data-aos="zoom-in">Welcome Back 👋</h2>
      <p className="login-subtitle" data-aos="fade-right">Login to your account</p>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setusername(e.target.value)}
        required
        data-aos="fade-right"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setpassword(e.target.value)}
        required
        data-aos="fade-left"
      />

      <button type="submit" className="login-button" data-aos="zoom-in">Login</button>
    </form>
    <br />
    <center data-aos="fade-up">
      Don't Have Account?<a href='/registration' className='regi'> Register</a>
    </center>
  </div>
</div>
  );
};


export default Login;

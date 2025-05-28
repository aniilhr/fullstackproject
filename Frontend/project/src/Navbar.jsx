import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [variable, setvariable] = useState(1);
  let navigate = useNavigate();

  const Ll = () => {
    setvariable(0);
    navigate('/Login');
  };

  const Ls = () => {
    navigate('/registration');
  };

  const ch = () => {
    setvariable(1);
    localStorage.setItem('login', 'false');
    navigate('/Login');

  };

  const ver = () => {
    if (localStorage.getItem('login') === 'false') {
      alert('Please log in first!');
      navigate('/Login');
    } else {
      navigate('/assig');
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo"><Link to='/Home'><img src='https://t3.ftcdn.net/jpg/03/75/67/74/360_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg' className='logoiumage'/></Link></h2>
      <div className="navbar-left">
        
        <ul className="nav-links">
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
    
          <li onClick={ver}><Link  >Assignments</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        {localStorage.getItem("login")=="false"? (
          <>
            <button className="btn login-btn" onClick={Ll}>Login</button>
            <button className="btn signup-btn" onClick={Ls}>Sign Up</button>
            
          </>
        ) : (
          
          <button className="btn logout-btn" onClick={ch}>Log Out</button>
          
        )}
        
        

      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [variable, setvariable] = useState(1);
//   let navigate = useNavigate();

//   const Ll = () => {
//     setvariable(0);
//     navigate('/Login');
//   };

//   const Ls = () => {
//     navigate('/registration');
//   };

//   const ch = () => {
//     setvariable(1);
//     localStorage.setItem('login', 'false');
//     navigate('/Login');

//   };

//   const ver = () => {
//     if (localStorage.getItem('login') === 'false') {
//       alert('Please log in first!');
//       navigate('/Login');
//     } else {
//       navigate('/assig');
//     }
//   };

//   return (
//     <nav className="navbar">
//       <h2 className="logo"><Link to='/Home'><img src='https://t3.ftcdn.net/jpg/03/75/67/74/360_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg' className='logoiumage'/></Link></h2>
//       <div className="navbar-left">
        
//         <ul className="nav-links">
          
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
    
//           <li onClick={ver}><Link  >Assignments</Link></li>
//         </ul>
//       </div>
//       <div className="navbar-right">
//         {localStorage.getItem("login")=="false"? (
//           <>
//             <button className="btn login-btn" onClick={Ll}>Login</button>
//             <button className="btn signup-btn" onClick={Ls}>Sign Up</button>
            
//           </>
//         ) : (
          
//           <button className="btn logout-btn" onClick={ch}>Log Out</button>
          
//         )}
        
        

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css';

const Navbar = () => {
  const [variable, setVariable] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Ll = () => {
    setVariable(0);
    navigate('/Login');
  };

  const Ls = () => {
    navigate('/registration');
  };

  const ch = () => {
    setVariable(1);
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
    <nav className="navbar" data-aos="fade-down">
      <div className="navbar-logo">
        <Link to="/Home">
          <img
            src="https://marketplace.canva.com/EAE7NV6FiZQ/1/0/1600w/canva-luxury-letter-a-logo-design-for-business-or-online-shop-qJ4llYpXD6w.jpg"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li onClick={ver}><Link>Assignments</Link></li>
      </ul>
      <div className="auth-buttons">
        {localStorage.getItem("login") === "false" ? (
          <>
            <button className="btn login" onClick={Ll}>Login</button>
            <button className="btn signup" onClick={Ls}>Sign Up</button>
          </>
        ) : (
          <button className="btn logout" onClick={ch}>Log Out</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';
// import FooterSection from './FooterSection';
// import Hello from './Hello';

// const Home = () => {
//     const navigate = useNavigate();

//     const verify = () => {
//         const da = localStorage.getItem("login");
//         if (da !== "true") {
//             alert("Please login first.");
//             navigate('/login')
//         } else {
//             navigate('/buy');
//         }
//     };

//     return (
//         <div className="home-container">
//             <div className="card-grid">

// <br/>
//                 <Hello/>
//                 <br/>

//                 <div className="custom-card">
//                     <img src="card1.png" alt="Full Stack" />
//                     <div className="card-content">
//                         <h3>Full Stack Web Developer</h3>
//                         <p>$127,005 avg salary (US). 16,500 roles available.</p>
//                         <div className="card-meta">
//                             <span>⭐ 4.7</span>
//                             <span>442K Ratings</span>
//                             <span>87.6 Total Hours</span>
//                         </div>
//                         <button onClick={verify}>Buy</button>
//                     </div>
//                 </div>

//                 <div className="custom-card">
//                     <img src="card2.png" alt="Digital Marketer" />
//                     <div className="card-content">
//                         <h3>Digital Marketer</h3>
//                         <p>$61,126 avg salary (US). 36,600 roles available.</p>
//                         <div className="card-meta">
//                             <span>⭐ 4.6</span>
//                             <span>3.3K Ratings</span>
//                             <span>28.4 Total Hours</span>
//                         </div>
//                         <button onClick={verify}>Buy</button>
//                     </div>
//                 </div>

//                 <div className="custom-card">
//                     <img src="card3.png" alt="Data Scientist" />
//                     <div className="card-content">
//                         <h3>Data Scientist</h3>
//                         <p>$126,629 avg salary (US). 20,800 roles available.</p>
//                         <div className="card-meta">
//                             <span>⭐ 4.6</span>
//                             <span>216K Ratings</span>
//                             <span>46.8 Total Hours</span>
//                         </div>
//                         <button onClick={verify}>Buy</button>
//                     </div>
//                 </div>


//                 <div className="custom-card">
//                     <img src="card3.png" alt="Data Scientist" />
//                     <div className="card-content">
//                         <h3>Data Analyst</h3>
//                         <p>$126,629 avg salary (US). 20,800 roles available.</p>
//                         <div className="card-meta">
//                             <span>⭐ 4.6</span>
//                             <span>216K Ratings</span>
//                             <span>46.8 Total Hours</span>
//                         </div>
//                         <button onClick={verify}>Buy</button>
//                     </div>
//                 </div>



//                 <div className="custom-card">
//                     <img src="card3.png" alt="Data Scientist" />
//                     <div className="card-content">
//                         <h3>Cloud Computing</h3>
//                         <p>$126,629 avg salary (US). 20,800 roles available.</p>
//                         <div className="card-meta">
//                             <span>⭐ 3.6</span>
//                             <span>2163K Ratings</span>
//                             <span>46.38 Total Hours</span>
//                         </div>
//                         <button onClick={verify}>Buy</button>
//                     </div>
//                 </div>



                

//             </div>
//             <br/>
            


            
//             <br/>
//             <br/><br/><br/><br/>    
//             <FooterSection/>
//         </div>
//     );
// };

// export default Home;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import FooterSection from './FooterSection';
import Hello from './Hello';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const verify = () => {
        const da = localStorage.getItem("login");
        if (da !== "true") {
            alert("Please login first.");
            navigate('/login');
        } else {
            navigate('/explore');
        }
    };

    return (
        <div className="home-container">
            <div className="card-grid">
                <br/>
                <Hello data-aos="fade-down" />

                <br/>

                <div className="custom-card" data-aos="fade-up" data-aos-delay="50">
                    <img src="card1.png" alt="Full Stack" />
                    <div className="card-content">
                        <h3>Full Stack Web Developer</h3>
                        <p>$127,005 avg salary (US). 16,500 roles available.</p>
                        <div className="card-meta">
                            <span>⭐ 4.7</span>
                            <span>442K Ratings</span>
                            <span>87.6 Total Hours</span>
                        </div>
                        <button onClick={verify}>Explore</button>
                    </div>
                </div>

                <div className="custom-card" data-aos="fade-up" data-aos-delay="100">
                    <img src="card2.png" alt="Digital Marketer" />
                    <div className="card-content">
                        <h3>Digital Marketer</h3>
                        <p>$61,126 avg salary (US). 36,600 roles available.</p>
                        <div className="card-meta">
                            <span>⭐ 4.6</span>
                            <span>3.3K Ratings</span>
                            <span>28.4 Total Hours</span>
                        </div>
                        <button onClick={verify}>Explore</button>
                    </div>
                </div>

                <div className="custom-card" data-aos="fade-up" data-aos-delay="150">
                    <img src="card3.png" alt="Data Scientist" />
                    <div className="card-content">
                        <h3>Data Scientist</h3>
                        <p>$126,629 avg salary (US). 20,800 roles available.</p>
                        <div className="card-meta">
                            <span>⭐ 4.6</span>
                            <span>216K Ratings</span>
                            <span>46.8 Total Hours</span>
                        </div>
                        <button onClick={verify}>Explore</button>
                    </div>
                </div>

                <div className="custom-card" data-aos="fade-up" data-aos-delay="200">
                    <img src="card3.png" alt="Data Scientist" />
                    <div className="card-content">
                        <h3>Data Analyst</h3>
                        <p>$126,629 avg salary (US). 20,800 roles available.</p>
                        <div className="card-meta">
                            <span>⭐ 4.6</span>
                            <span>216K Ratings</span>
                            <span>46.8 Total Hours</span>
                        </div>
                        <button onClick={verify}>Explore</button>
                    </div>
                </div>

                <div className="custom-card" data-aos="fade-up" data-aos-delay="250">
                    <img src="card3.png" alt="Data Scientist" />
                    <div className="card-content">
                        <h3>Cloud Computing</h3>
                        <p>$126,629 avg salary (US). 20,800 roles available.</p>
                        <div className="card-meta">
                            <span>⭐ 3.6</span>
                            <span>2163K Ratings</span>
                            <span>46.38 Total Hours</span>
                        </div>
                        <button onClick={verify}>Explore</button>
                    </div>
                </div>
            </div>

            <br/>
            <br/><br/><br/><br/>    

            <FooterSection/>
        </div>
    );
};

export default Home;

// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className="about-section">
//       <div className="about-container">
//         <div className="about-image">
//           <img src="https://acorn.works/wp-content/uploads/2023/08/team-building-leadership.jpg" alt="Team working together" />
//         </div>
//         <div className="about-content">
//           <h2>About Us</h2>
//           <p>
//             We are passionate educators and developers committed to empowering learners
//             across the globe. Our mission is to make high-quality education accessible and
//             engaging through interactive courses, real-world projects, and expert guidance.
//           </p>
//           <p>
//             Whether you're starting your journey or upskilling your career, we’re here to
//             support you with modern tech stacks, practical tools, and a learner-first
//             approach.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration in ms
      easing: 'ease-in-out',
      once: true,       // animate only once
      mirror: false,    // do not animate while scrolling back
    });
  }, []);

  return (
    <div className="about-section" data-aos="fade-up">
      <div className="about-container">

        <div className="about-image" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1200">
          <img 
            src="https://acorn.works/wp-content/uploads/2023/08/team-building-leadership.jpg" 
            alt="Team working together" 
          />
        </div>

        <div className="about-content" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
          <h2>About Us</h2>
          <p>
            We are passionate educators and developers committed to empowering learners
            across the globe. Our mission is to make high-quality education accessible and
            engaging through interactive courses, real-world projects, and expert guidance.
          </p>
          <p>
            Whether you're starting your journey or upskilling your career, we’re here to
            support you with modern tech stacks, practical tools, and a learner-first
            approach.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;

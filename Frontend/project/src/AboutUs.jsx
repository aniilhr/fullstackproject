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
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-in">
        <h1>About Our Mission</h1>
        <p>Empowering the next generation through innovation, technology, and purpose-driven learning.</p>
      </section>

      {/* Company Overview */}
      <section className="about-overview">
        <div className="overview-text" data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            We’re a forward-thinking team of developers, designers, and educators passionate about transforming digital education.
            Our platform offers cutting-edge content, hands-on experiences, and the guidance learners need to succeed in a fast-evolving tech landscape.
          </p>
        </div>
        <div className="overview-image" data-aos="fade-left">
          <img src="https://d2ms8rpfqc4h24.cloudfront.net/most_trusted_and_experienced_software_development_team_across_25_countries_3e61e557aa.png" alt="Tech Collaboration" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card" data-aos="zoom-in-up">
          <h3>🚀 Our Mission</h3>
          <p>
            To make top-tier technical education accessible and engaging for all, regardless of background.
          </p>
        </div>
        <div className="card" data-aos="zoom-in-up" data-aos-delay="200">
          <h3>🌍 Our Vision</h3>
          <p>
            A global learning ecosystem where passion meets opportunity — and every learner can thrive in tech.
          </p>
        </div>
        <div className="card" data-aos="zoom-in-up" data-aos-delay="400">
          <h3>💡 Our Values</h3>
          <ul>
            <li>Innovation First</li>
            <li>Inclusive Learning</li>
            <li>Community Collaboration</li>
            <li>Real-world Skill Building</li>
          </ul>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="social-cta" data-aos="fade-up">
        <h2>Stay Connected</h2>
        <p>Follow us on social media to get the latest updates, tips, and behind-the-scenes stories.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="http://wa.me/+919347785766"><FaWhatsapp /></a>
          <a href="http://www.linkedin"><FaLinkedinIn /></a>
          <a href="http://www.instagram.com/aniilhr/"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

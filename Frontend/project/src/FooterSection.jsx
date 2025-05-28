import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer-root">
      <div className="footer-top-bar">
        <p>
          Top companies choose <span className="footer-highlight">Udemy Business</span> to build in-demand career skills.
        </p>
        <div className="footer-logos">
          <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Nasdaq" />
          <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Volkswagen" />
          <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="NetApp" />
          <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Eventbrite" />
        </div>
      </div>

      <div className="footer-links-grid">
        <div className="footer-link-block">
          <h4>In-demand Careers</h4>
          <ul>
            <li>Data Scientist</li>
            <li>Full Stack Web Developer</li>
            <li>Cloud Engineer</li>
            <li>Project Manager</li>
            <li>Game Developer</li>
            <li className="footer-seeall">See all Career Accelerators</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Web Development</h4>
          <ul>
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Angular</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>IT Certifications</h4>
          <ul>
            <li>Amazon AWS</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Leadership</h4>
          <ul>
            <li>Leadership</li>
            <li>Management Skills</li>
            <li>Project Management</li>
            <li>Personal Productivity</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Certifications by Skill</h4>
          <ul>
            <li>Cybersecurity Certification</li>
            <li>Project Management Certification</li>
            <li>Cloud Certification</li>
            <li>Data Analytics Certification</li>
            <li>HR Management Certification</li>
            <li className="footer-seeall">See all Certifications</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Data Science</h4>
          <ul>
            <li>Data Science</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>ChatGPT</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Communication</h4>
          <ul>
            <li>Communication Skills</li>
            <li>Presentation Skills</li>
            <li>Public Speaking</li>
            <li>Writing</li>
            <li>PowerPoint</li>
          </ul>
        </div>
        <div className="footer-link-block">
          <h4>Business Analytics & Intelligence</h4>
          <ul>
            <li>Microsoft Excel</li>
            <li>SQL</li>
            <li>Microsoft Power BI</li>
            <li>Data Analysis</li>
            <li>Business Analysis</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="footer-info-section">
          <div>
            <h4>About</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>Investors</li>
            </ul>
          </div>
          <div>
            <h4>Discover Udemy</h4>
            <ul>
              <li>Get the app</li>
              <li>Teach on Udemy</li>
              <li>Plans and Pricing</li>
              <li>Affiliate</li>
              <li>Help and Support</li>
            </ul>
          </div>
          <div>
            <h4>Udemy for Business</h4>
            <ul>
              <li>Udemy Business</li>
            </ul>
          </div>
          <div>
            <h4>Legal & Accessibility</h4>
            <ul>
              <li>Accessibility statement</li>
              <li>Privacy policy</li>
              <li>Sitemap</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-logo-copy">
            <img src="https://t3.ftcdn.net/jpg/03/75/67/74/360_F_375677469_UzQt3JpGywuXxkOlCkG7SJXXbiGsampv.jpg" alt="Udemy" />
            <span>© 2025 mypage, Inc.</span>
          </div>
          <div className="footer-bottom-links">
            <span>Cookie settings</span>
            <span>🌐 English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

// import React from 'react';
// import './CourseCards.css';
// import { jsx } from 'react/jsx-runtime';
// import { href } from 'react-router-dom';


// const courses = [
//   {
//     title: 'Web Development',
//     description: 'Master HTML, CSS, JS, and modern frameworks like React & Vue.',
//     image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23c04472978809.5bfa94230b13e.jpg',
//   },
//   {
//     title: 'Data Science',
//     description: 'Learn Python, data analysis, visualization and machine learning.',
//     image: 'https://admin.wac.co/uploads/Features_Of_Python_1_f4ccd6d9f7.jpg',
//   },
//   {
//     title: 'Mobile App Development',
//     description: 'Create stunning mobile apps with Flutter & React Native.',
//     image: 'https://spec.nith.ac.in/BLOGS/a1%20(5).jpg',
//   },
//   {
//     title: 'Cybersecurity',
//     description: 'Dive into ethical hacking, cryptography and threat prevention.',
//     image: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
//   },
//   {
//     title: 'Cloud Computing',
//     description: 'Understand AWS, Azure, cloud architecture, and deployment.',
//     image: 'https://eldalab.in/wp-content/uploads/2023/08/web-development.jpg',
//   },
// ];

// const Courses1 = () => {
  
//   return (
//     <div className="course-page" >
//       <h1 className="heading">Explore Our Courses</h1>
//       <div className="course-grid"  >
//         {courses.map((course, index) => (
//           <div key={index} className="course-card"  >
            
//             <img src={course.image} alt={course.title}   className="course-image" />
//             <div className="course-content">
              
//               <h2>{course.title}</h2>
//               <p>{course.description}</p>
//               <button><a href='test' className='testt'>Check Your Knowledge</a></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses1;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CourseCards.css';

const courses = [
  {
    title: 'Web Development',
    description: 'Master HTML, CSS, JS, and modern frameworks like React & Vue.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/23c04472978809.5bfa94230b13e.jpg',
  },
  {
    title: 'Data Science',
    description: 'Learn Python, data analysis, visualization and machine learning.',
    image: 'https://admin.wac.co/uploads/Features_Of_Python_1_f4ccd6d9f7.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Create stunning mobile apps with Flutter & React Native.',
    image: 'https://spec.nith.ac.in/BLOGS/a1%20(5).jpg',
  },
  {
    title: 'Cybersecurity',
    description: 'Dive into ethical hacking, cryptography and threat prevention.',
    image: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
  },
  {
    title: 'Cloud Computing',
    description: 'Understand AWS, Azure, cloud architecture, and deployment.',
    image: 'https://eldalab.in/wp-content/uploads/2023/08/web-development.jpg',
  },
];

const Courses1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 100,    // offset (in px) from the original trigger point
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="course-page">
      <h1 className="heading" data-aos="fade-down">Explore Our Courses</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button><a href='test' className='testt'>Check Your Knowledge</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses1;

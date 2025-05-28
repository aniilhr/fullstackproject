import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Explore.css';

const categories = [
  {
    title: 'Web Development',
    description: 'Build modern websites with HTML, CSS, JavaScript, React, and more.',
    image: 'https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Learn about neural networks, deep learning, and real-world AI projects.',
    image: 'https://www.upshottechnologies.in/images/course/full-stack-developer-training-course.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Create beautiful Android & iOS apps using Flutter and React Native.',
    image: 'https://app.simpleshiksha.com/subject/avatar_1703774419891.webp',
  },
  {
    title: 'Cybersecurity',
    description: 'Understand security concepts, ethical hacking, and protection systems.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAknygHHQ56u06cJOMe9C4fJ5ODgVgPIYLw&s',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.',
    image: 'https://s3.ap-south-1.amazonaws.com/nareshit.images/python.jpg',
  },
  {
    title: 'Data Science',
    description: 'Analyze data, build models, and visualize trends using Python.',
    image: 'https://www.vagdevitechnologies.com/wp-content/uploads/2022/11/fullstack.jpg',
  },
];

const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="explore-page">
      <h1 className="explore-title" data-aos="fade-down">Explore Opportunities</h1>
      <div className="explore-grid">
        {categories.map((item, idx) => (
          <div
            className="explore-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img src={item.image} alt={item.title} className="explore-image" />
            <div className="explore-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
             <a href='buy'> <button className="explore-btn" >Enroll</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

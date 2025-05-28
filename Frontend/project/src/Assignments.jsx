// import React, { useState, useEffect } from 'react';
// import Certificate from './Certificate';
// import { useNavigate } from 'react-router-dom';
// import './Assignments.css';


// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["London", "Berlin", "Paris", "Madrid"],
//     answer: "Paris"
//   },
//   {
//     question: "Which language runs in a web browser?",
//     options: ["Java", "C", "Python", "JavaScript"],
//     answer: "JavaScript"
//   },
//   {
//     question: "What does CSS stand for?",
//     options: ["Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
//     answer: "Cascading Style Sheets"
//   },
//   {
//     question: "Who is the founder of Microsoft?",
//     options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
//     answer: "Bill Gates"
//   },
//   {
//     question: "Which HTML tag is used to define an internal style sheet?",
//     options: ["<style>", "<script>", "<css>", "<link>"],
//     answer: "<style>"
//   },
//   {
//     question: "Which company developed the React library?",
//     options: ["Google", "Facebook", "Microsoft", "Apple"],
//     answer: "Facebook"
//   },
//   {
//     question: "What does HTTP stand for?",
//     options: ["Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyperlink Transfer Protocol"],
//     answer: "HyperText Transfer Protocol"
//   },
//   {
//     question: "Which symbol is used for comments in JavaScript?",
//     options: ["<!-- -->", "//", "/* */", "#"],
//     answer: "//"
//   },
//   {
//     question: "What is the correct way to write a JavaScript array?",
//     options: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = {1:"red", 2:"green", 3:"blue"}'],
//     answer: 'var colors = ["red", "green", "blue"]'
//   },
//   {
//     question: "Which method is used to add an element at the end of an array in JavaScript?",
//     options: ["push()", "add()", "append()", "insert()"],
//     answer: "push()"
//   }
// ];

// const Assignments = () => {
//   const navigate = useNavigate();
//   const [current, setCurrent] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(180); // 3 minutes for 10 questions

//   useEffect(() => {
//     if (timeLeft === 0) {
//       setShowScore(true);
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleAnswer = (option) => {
//     if (showScore) return;

//     if (option === questions[current].answer) {
//       setScore(score + 1);
//     }

//     const next = current + 1;
//     if (next < questions.length) {
//       setCurrent(next);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const formatTime = () => {
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds
//       .toString()
//       .padStart(2, '0')}`;
//   };

//   const restartQuiz = () => {
//     setCurrent(0);
//     setScore(0);
//     setShowScore(false);
//     setTimeLeft(180);
//   };

//   useEffect(() => {
//     if (showScore && score > 5) {
//       navigate('/certificate');
//     }
//   }, [showScore, score, navigate]);

//   return (
//     <div className="quiz-container">
//       <div className="timer">Time Left: {formatTime()}</div>

//       {showScore ? (
//         <div className="score-section">
//           <p>Time's up or Quiz Submitted!</p>
//           <p>You scored {score} out of {questions.length}</p>
//           <button className="retry-btn" onClick={restartQuiz}>Retry Quiz</button>
//         </div>
//       ) : (
//         <div className="question-section">
//           <h2>Question {current + 1}</h2>
//           <p>{questions[current].question}</p>
//           <div className="options">
//             {questions[current].options.map((option, idx) => (
//               <button key={idx} onClick={() => handleAnswer(option)}>
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };




// export default Assignments;




 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Assignments.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const questionsData = {
  'Web Development': [ { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], answer: "HyperText Markup Language" },
    { question: "Which tag is used for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<line>"], answer: "<br>" },
    { question: "Which CSS property controls text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
    { question: "Which HTML element contains JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: "<script>" },
    { question: "Which protocol is used to fetch resources on the web?", options: ["FTP", "SMTP", "HTTP", "SSH"], answer: "HTTP" },
    { question: "Which of the following is a frontend library?", options: ["Django", "React", "Flask", "Laravel"], answer: "React" },
    { question: "How to apply a style to all <p> elements in CSS?", options: ["p:{}", "p {}", "#p {}", ".p {}"], answer: "p {}" },
    { question: "Which symbol is used for ID in CSS?", options: ["#", ".", "*", "$"], answer: "#" },
    { question: "Which tag defines a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<hyper>"], answer: "<a>" },
    { question: "Which attribute is used to open link in a new tab?", options: ["target='_blank'", "href='_blank'", "newtab", "window='new'"], answer: "target='_blank'" }
 ],
  'Data Science': [ { question: "What is the full form of CSV?", options: ["Comma Separated Values", "Column Separated Values", "Common Separated Values", "Computer Separated Values"], answer: "Comma Separated Values" },
    { question: "Which Python library is used for data analysis?", options: ["NumPy", "Pandas", "Matplotlib", "TensorFlow"], answer: "Pandas" },
    { question: "Which one is a supervised learning algorithm?", options: ["K-Means", "Decision Tree", "PCA", "DBSCAN"], answer: "Decision Tree" },
    { question: "What is used to visualize data?", options: ["Seaborn", "NumPy", "Pillow", "Scikit"], answer: "Seaborn" },
    { question: "Which library is best for numerical computing?", options: ["NumPy", "Flask", "Matplotlib", "NLTK"], answer: "NumPy" },
    { question: "Which type of data does regression predict?", options: ["Categorical", "Numerical", "Text", "Boolean"], answer: "Numerical" },
    { question: "Which one is NOT a classification algorithm?", options: ["Logistic Regression", "Random Forest", "KNN", "K-Means"], answer: "K-Means" },
    { question: "Which tool is used to write notebooks?", options: ["Jupyter", "PyCharm", "VS Code", "Spyder"], answer: "Jupyter" },
    { question: "What is overfitting?", options: ["Model performs well on training data but poorly on test data", "Model performs well on all data", "Undertrained model", "None"], answer: "Model performs well on training data but poorly on test data" },
    { question: "Which library helps in deep learning?", options: ["TensorFlow", "Matplotlib", "Numpy", "NLTK"], answer: "TensorFlow" }
   ],
  'Mobile App Development': [ { question: "Which language is used for Android app development?", options: ["Java", "Swift", "Kotlin", "Both Java and Kotlin"], answer: "Both Java and Kotlin" },
    { question: "Flutter uses which language?", options: ["Kotlin", "Java", "Dart", "Swift"], answer: "Dart" },
    { question: "React Native is based on which library?", options: ["React", "Angular", "Vue", "Bootstrap"], answer: "React" },
    { question: "What is Android's UI toolkit?", options: ["Material UI", "Jetpack Compose", "UIKit", "Flutter"], answer: "Jetpack Compose" },
    { question: "Which IDE is official for Android development?", options: ["VS Code", "Xcode", "Android Studio", "NetBeans"], answer: "Android Studio" },
    { question: "Which tool converts React Native to native code?", options: ["Bridge", "Babel", "Transpiler", "Compiler"], answer: "Bridge" },
    { question: "What is used to design iOS interfaces?", options: ["Android Studio", "Xcode", "Flutter", "Sketch"], answer: "Xcode" },
    { question: "Which company maintains Flutter?", options: ["Facebook", "Apple", "Microsoft", "Google"], answer: "Google" },
    { question: "iOS apps are written in?", options: ["Kotlin", "Java", "Swift", "Dart"], answer: "Swift" },
    { question: "Expo is related to?", options: ["React Native", "Flutter", "Swift", "Java"], answer: "React Native" }
],
  'Cybersecurity': [ { question: "What does VPN stand for?", options: ["Virtual Private Network", "Visual Private Network", "Virtual Protected Node", "None"], answer: "Virtual Private Network" },
    { question: "What is unauthorized access called?", options: ["Phishing", "Hacking", "Spamming", "None"], answer: "Hacking" },
    { question: "What is a common phishing medium?", options: ["Email", "USB", "SMS", "Post"], answer: "Email" },
    { question: "Which is a strong password?", options: ["123456", "mypassword", "Qw#8dL@92", "password123"], answer: "Qw#8dL@92" },
    { question: "What protects a network?", options: ["Firewall", "Antivirus", "Router", "Switch"], answer: "Firewall" },
    { question: "SSL stands for?", options: ["Secure Socket Layer", "Secure Software Logic", "Socket Security Layer", "None"], answer: "Secure Socket Layer" },
    { question: "Which is a malware type?", options: ["Trojan", "VPN", "Firewall", "SSH"], answer: "Trojan" },
    { question: "2FA stands for?", options: ["Two-Factor Authentication", "Two-Form Access", "Two-Format Authorization", "None"], answer: "Two-Factor Authentication" },
    { question: "Which port is used for HTTPS?", options: ["80", "20", "22", "443"], answer: "443" },
    { question: "What does encryption do?", options: ["Secures data", "Deletes data", "Copies data", "Forwards data"], answer: "Secures data" }
  ],
  'Cloud Computing': [ { question: "Which company provides AWS?", options: ["Google", "Microsoft", "Amazon", "IBM"], answer: "Amazon" },
    { question: "What does SaaS stand for?", options: ["Software as a Service", "System as a Software", "Security as a Service", "Server as a Service"], answer: "Software as a Service" },
    { question: "What does IaaS mean?", options: ["Infrastructure as a Service", "Internet as a Server", "Infrastructure as a Software", "None"], answer: "Infrastructure as a Service" },
    { question: "Which one is a cloud platform?", options: ["AWS", "Python", "Node.js", "HTML"], answer: "AWS" },
    { question: "What is the purpose of load balancer?", options: ["Distribute traffic", "Store data", "Encrypt data", "None"], answer: "Distribute traffic" },
    { question: "Which one is NOT a cloud provider?", options: ["Amazon", "Google", "Microsoft", "Firefox"], answer: "Firefox" },
    { question: "Which AWS service is used for storage?", options: ["EC2", "Lambda", "S3", "DynamoDB"], answer: "S3" },
    { question: "Which cloud model is fully managed?", options: ["SaaS", "IaaS", "PaaS", "None"], answer: "SaaS" },
    { question: "GCP stands for?", options: ["Google Cloud Platform", "Global Compute Provider", "Google Compute Power", "None"], answer: "Google Cloud Platform" },
    { question: "Azure is by which company?", options: ["Microsoft", "Amazon", "Google", "Apple"], answer: "Microsoft" }
  ],
};



function Assignments() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setAnswers({});
    setScore(null);
  };

  const handleAnswer = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    const currentQuestions = questionsData[selectedTopic];
    let correct = 0;
    currentQuestions.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });
    setScore(correct);

    if (correct > 5) {
      navigate('/certificate');
    }
  };

  return (
    <div className="assignment-container">
      <center>
      <h2>Choose Assignment Topic</h2>
      <select value={selectedTopic} onChange={handleTopicChange}>
        <option value="">-- Select Topic --</option>
        {Object.keys(questionsData).map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
</center>
      {selectedTopic && (
        <div className="questions">
          <h3>{selectedTopic} Quiz</h3>
          {questionsData[selectedTopic].map((q, index) => (
            <div key={index} className="question-block">
              <p><strong>Q{index + 1}: {q.question}</strong></p>
              {q.options.map((opt, i) => (
                <label key={i} className="option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleAnswer(index, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
      )}

      {score !== null && (
        <div className="score-display">
          <h3>Your Score: {score}/10</h3>
          {score <= 5 && <p>Try again to score more than 5 to get your certificate!</p>}
        </div>
      )}
    </div>
  );
}

export default Assignments;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Assignments.css';

// const questionsData = {
//   // ... your full questionsData (unchanged)
//   // Keep your current questionsData here
//   'Web Development': [ { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], answer: "HyperText Markup Language" },
//     { question: "Which tag is used for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<line>"], answer: "<br>" },
//     { question: "Which CSS property controls text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: "font-size" },
//     { question: "Which HTML element contains JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: "<script>" },
//     { question: "Which protocol is used to fetch resources on the web?", options: ["FTP", "SMTP", "HTTP", "SSH"], answer: "HTTP" },
//     { question: "Which of the following is a frontend library?", options: ["Django", "React", "Flask", "Laravel"], answer: "React" },
//     { question: "How to apply a style to all <p> elements in CSS?", options: ["p:{}", "p {}", "#p {}", ".p {}"], answer: "p {}" },
//     { question: "Which symbol is used for ID in CSS?", options: ["#", ".", "*", "$"], answer: "#" },
//     { question: "Which tag defines a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<hyper>"], answer: "<a>" },
//     { question: "Which attribute is used to open link in a new tab?", options: ["target='_blank'", "href='_blank'", "newtab", "window='new'"], answer: "target='_blank'" }
//  ],
//   'Data Science': [ { question: "What is the full form of CSV?", options: ["Comma Separated Values", "Column Separated Values", "Common Separated Values", "Computer Separated Values"], answer: "Comma Separated Values" },
//     { question: "Which Python library is used for data analysis?", options: ["NumPy", "Pandas", "Matplotlib", "TensorFlow"], answer: "Pandas" },
//     { question: "Which one is a supervised learning algorithm?", options: ["K-Means", "Decision Tree", "PCA", "DBSCAN"], answer: "Decision Tree" },
//     { question: "What is used to visualize data?", options: ["Seaborn", "NumPy", "Pillow", "Scikit"], answer: "Seaborn" },
//     { question: "Which library is best for numerical computing?", options: ["NumPy", "Flask", "Matplotlib", "NLTK"], answer: "NumPy" },
//     { question: "Which type of data does regression predict?", options: ["Categorical", "Numerical", "Text", "Boolean"], answer: "Numerical" },
//     { question: "Which one is NOT a classification algorithm?", options: ["Logistic Regression", "Random Forest", "KNN", "K-Means"], answer: "K-Means" },
//     { question: "Which tool is used to write notebooks?", options: ["Jupyter", "PyCharm", "VS Code", "Spyder"], answer: "Jupyter" },
//     { question: "What is overfitting?", options: ["Model performs well on training data but poorly on test data", "Model performs well on all data", "Undertrained model", "None"], answer: "Model performs well on training data but poorly on test data" },
//     { question: "Which library helps in deep learning?", options: ["TensorFlow", "Matplotlib", "Numpy", "NLTK"], answer: "TensorFlow" }
//    ],
//   'Mobile App Development': [ { question: "Which language is used for Android app development?", options: ["Java", "Swift", "Kotlin", "Both Java and Kotlin"], answer: "Both Java and Kotlin" },
//     { question: "Flutter uses which language?", options: ["Kotlin", "Java", "Dart", "Swift"], answer: "Dart" },
//     { question: "React Native is based on which library?", options: ["React", "Angular", "Vue", "Bootstrap"], answer: "React" },
//     { question: "What is Android's UI toolkit?", options: ["Material UI", "Jetpack Compose", "UIKit", "Flutter"], answer: "Jetpack Compose" },
//     { question: "Which IDE is official for Android development?", options: ["VS Code", "Xcode", "Android Studio", "NetBeans"], answer: "Android Studio" },
//     { question: "Which tool converts React Native to native code?", options: ["Bridge", "Babel", "Transpiler", "Compiler"], answer: "Bridge" },
//     { question: "What is used to design iOS interfaces?", options: ["Android Studio", "Xcode", "Flutter", "Sketch"], answer: "Xcode" },
//     { question: "Which company maintains Flutter?", options: ["Facebook", "Apple", "Microsoft", "Google"], answer: "Google" },
//     { question: "iOS apps are written in?", options: ["Kotlin", "Java", "Swift", "Dart"], answer: "Swift" },
//     { question: "Expo is related to?", options: ["React Native", "Flutter", "Swift", "Java"], answer: "React Native" }
// ],
//   'Cybersecurity': [ { question: "What does VPN stand for?", options: ["Virtual Private Network", "Visual Private Network", "Virtual Protected Node", "None"], answer: "Virtual Private Network" },
//     { question: "What is unauthorized access called?", options: ["Phishing", "Hacking", "Spamming", "None"], answer: "Hacking" },
//     { question: "What is a common phishing medium?", options: ["Email", "USB", "SMS", "Post"], answer: "Email" },
//     { question: "Which is a strong password?", options: ["123456", "mypassword", "Qw#8dL@92", "password123"], answer: "Qw#8dL@92" },
//     { question: "What protects a network?", options: ["Firewall", "Antivirus", "Router", "Switch"], answer: "Firewall" },
//     { question: "SSL stands for?", options: ["Secure Socket Layer", "Secure Software Logic", "Socket Security Layer", "None"], answer: "Secure Socket Layer" },
//     { question: "Which is a malware type?", options: ["Trojan", "VPN", "Firewall", "SSH"], answer: "Trojan" },
//     { question: "2FA stands for?", options: ["Two-Factor Authentication", "Two-Form Access", "Two-Format Authorization", "None"], answer: "Two-Factor Authentication" },
//     { question: "Which port is used for HTTPS?", options: ["80", "20", "22", "443"], answer: "443" },
//     { question: "What does encryption do?", options: ["Secures data", "Deletes data", "Copies data", "Forwards data"], answer: "Secures data" }
//   ],
//   'Cloud Computing': [ { question: "Which company provides AWS?", options: ["Google", "Microsoft", "Amazon", "IBM"], answer: "Amazon" },
//     { question: "What does SaaS stand for?", options: ["Software as a Service", "System as a Software", "Security as a Service", "Server as a Service"], answer: "Software as a Service" },
//     { question: "What does IaaS mean?", options: ["Infrastructure as a Service", "Internet as a Server", "Infrastructure as a Software", "None"], answer: "Infrastructure as a Service" },
//     { question: "Which one is a cloud platform?", options: ["AWS", "Python", "Node.js", "HTML"], answer: "AWS" },
//     { question: "What is the purpose of load balancer?", options: ["Distribute traffic", "Store data", "Encrypt data", "None"], answer: "Distribute traffic" },
//     { question: "Which one is NOT a cloud provider?", options: ["Amazon", "Google", "Microsoft", "Firefox"], answer: "Firefox" },
//     { question: "Which AWS service is used for storage?", options: ["EC2", "Lambda", "S3", "DynamoDB"], answer: "S3" },
//     { question: "Which cloud model is fully managed?", options: ["SaaS", "IaaS", "PaaS", "None"], answer: "SaaS" },
//     { question: "GCP stands for?", options: ["Google Cloud Platform", "Global Compute Provider", "Google Compute Power", "None"], answer: "Google Cloud Platform" },
//     { question: "Azure is by which company?", options: ["Microsoft", "Amazon", "Google", "Apple"], answer: "Microsoft" }
//   ],
// };

// function Assignments() {
//   const [selectedTopic, setSelectedTopic] = useState('');
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const handleTopicChange = (e) => {
//     setSelectedTopic(e.target.value);
//     setAnswers({});
//     setScore(null);
//   };

//   const handleAnswer = (qIndex, option) => {
//     setAnswers({ ...answers, [qIndex]: option });
//   };

//   const handleSubmit = () => {
//   const currentQuestions = questionsData[selectedTopic];
//   let correct = 0;
//   currentQuestions.forEach((q, index) => {
//     if (answers[index] === q.answer) correct++;
//   });
//   setScore(correct);
//   console.log("Score submitted:", correct); // ✅ Debug line

//   if (correct > 5) {
//     navigate('/certificate');
//   }
// };


//   return (
//     <div className="assignment-container">
//       <center>
//         <h2 data-aos="fade-down">Choose Assignment Topic</h2>
//         <select value={selectedTopic} onChange={handleTopicChange} data-aos="zoom-in">
//           <option value="">-- Select Topic --</option>
//           {Object.keys(questionsData).map(topic => (
//             <option key={topic} value={topic}>{topic}</option>
//           ))}
//         </select>
//       </center>

//       {selectedTopic && (
//   <div className="questions" data-aos="fade-up">
//     <h3 data-aos="fade-left">{selectedTopic} Quiz</h3>
//     {questionsData[selectedTopic].map((q, index) => (
//       <div key={index} className="question-block" data-aos="fade-up">
//         <p><strong>Q{index + 1}: {q.question}</strong></p>
//         {q.options.map((opt, i) => (
//           <label key={i} className="option" data-aos="fade-right" data-aos-delay={i * 100}>
//             <input
//               type="radio"
//               name={`question-${index}`}
//               value={opt}
//               checked={answers[index] === opt}
//               onChange={() => handleAnswer(index, opt)}
//             />
//             {opt}
//           </label>
//         ))}
//       </div>
//     ))}

//     {/* ✅ Move Submit Button inside this block */
//     <button onClick={handleSubmit} className="submit-btn" data-aos="zoom-in">
//       Submit
//     </button>}
    
//   </div>
// )}

          
//       {score !== null && (
//         <div className="score-display" data-aos="fade-in">
//           <h3>Your Score: {score}/10</h3>
//           {score <= 5 && <p>Try again to score more than 5 to get your certificate!</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Assignments;

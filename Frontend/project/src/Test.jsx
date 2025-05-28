import React, { useState } from 'react';


const questionsData = {
  'Web Development': [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None"], answer: "HyperText Markup Language" },
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
  'Data Science': [
    { question: "What is the full form of CSV?", options: ["Comma Separated Values", "Column Separated Values", "Common Separated Values", "Computer Separated Values"], answer: "Comma Separated Values" },
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
  'Mobile App Development': [
    { question: "Which language is used for Android app development?", options: ["Java", "Swift", "Kotlin", "Both Java and Kotlin"], answer: "Both Java and Kotlin" },
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
  'Cybersecurity': [
    { question: "What does VPN stand for?", options: ["Virtual Private Network", "Visual Private Network", "Virtual Protected Node", "None"], answer: "Virtual Private Network" },
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
  'Cloud Computing': [
    { question: "Which company provides AWS?", options: ["Google", "Microsoft", "Amazon", "IBM"], answer: "Amazon" },
    { question: "What does SaaS stand for?", options: ["Software as a Service", "System as a Software", "Security as a Service", "Server as a Service"], answer: "Software as a Service" },
    { question: "What does IaaS mean?", options: ["Infrastructure as a Service", "Internet as a Server", "Infrastructure as a Software", "None"], answer: "Infrastructure as a Service" },
    { question: "Which one is a cloud platform?", options: ["AWS", "Python", "Node.js", "HTML"], answer: "AWS" },
    { question: "What is the purpose of load balancer?", options: ["Distribute traffic", "Store data", "Encrypt data", "None"], answer: "Distribute traffic" },
    { question: "Which one is NOT a cloud provider?", options: ["Amazon", "Google", "Microsoft", "Firefox"], answer: "Firefox" },
    { question: "Which AWS service is used for storage?", options: ["EC2", "Lambda", "S3", "DynamoDB"], answer: "S3" },
    { question: "Which cloud model is fully managed?", options: ["SaaS", "IaaS", "PaaS", "None"], answer: "SaaS" },
    { question: "GCP stands for?", options: ["Google Cloud Platform", "Global Compute Provider", "Google Compute Power", "None"], answer: "Google Cloud Platform" },
    { question: "Azure is by which company?", options: ["Microsoft", "Amazon", "Google", "Apple"], answer: "Microsoft" }
  ]
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleSelect = (e) => {
    setSelectedTopic(e.target.value);
    setAnswers({});
    setScore(null);
  };

  const handleAnswer = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    const correctAnswers = questionsData[selectedTopic].filter((q, i) => q.answer === answers[i]);
    setScore(correctAnswers.length);
  };
  

  return (
    <div className='options'  style={{ padding: "20px", }}>
      <h2>Sample Test</h2>
      <label>Select Topic:</label>
      <select className='realop' onChange={handleSelect} value={selectedTopic}>
        <option value="">--Choose a topic--</option>
        {Object.keys(questionsData).map((topic) => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>

      {selectedTopic && (
        <div className='realop' style={ { marginTop: '20px',  } }>
          {questionsData[selectedTopic].map((q, i) => (
            <div key={i} style={{ marginBottom: '15px',color:'black' }}>
              <strong>{i + 1}. {q.question}</strong><br />
              {q.options.map((opt, j) => (
                <label key={j}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={opt}
                    checked={answers[i] === opt}
                    onChange={() => handleAnswer(i, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          
        </div>
      )}
      <center>
          <a href="certificate2"><button className='btnn1' onClick={handleSubmit} >Submit</button></a>
          </center>

      {score !== null && (
        <h3 style={{ marginTop: '20px' }}>You scored {score} out of 10</h3>
      )}
    </div>
  );
}

export default App;

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Certificate.css';

const Certificate = () => {
  const certificateRef = useRef();

  const handleDownload = async () => {
    const input = certificateRef.current;

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('https://www.eficode.com/hubfs/Team%20spirit.png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('certificate.pdf');
  };

  return (

    <div className="mainbody">
      <center>
      <div className="certificate" ref={certificateRef}>
        <div className="uppercertificate">
          <h1 style={{ color: 'orange', margin: '10px' }}>Certificate of Completion</h1>
          <p style={{ color: 'blue', margin: '10px' }}>This is to certify that</p>
          <h3><u>{localStorage.getItem("name")}</u></h3>
          <p style={{ color: 'blue', margin: '10px' }}>for successfully completed the course</p>
          <h4 style={{ color: 'darkblue', margin: '10px' }}>"Web Development Basics"</h4>
          <p>Awarded on</p>
          <p>May 27, 2025</p>
        </div>
        <div className="lowercertificate">
          <div style={{ textAlign: 'center' }}>
            <h5>Mr. Anil Kumar</h5>
            <p>Managing Director</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h5>Dr. Yashwanth Gowda</h5>
            <p>Director</p>
          </div>
        </div>
        <Link to='/verify'>
        
          <h5 style={{ color: 'blue', textAlign: 'center', margin: '30px' }}>
            Click here to verify certificate
          </h5>
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleDownload}
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Download Certificate
        </button>
      </div>
      </center>
    </div>
  );
};

export default Certificate;

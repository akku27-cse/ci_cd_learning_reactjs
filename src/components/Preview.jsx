import React, { useRef, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import Classic from '../templates/Classic';
import Modern from '../templates/Modern';
import Professional from '../templates/Professional';

const Preview = ({ resumeData, selectedTemplate, darkMode }) => {
  const previewRef = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4',
    });

    // Get the preview element
    const element = previewRef.current;

    // Create a clone to avoid modifying the original
    const clone = element.cloneNode(true);
    
    // Apply print-specific styles
    clone.style.width = '595px'; // A4 width in points
    clone.style.padding = '40px';
    clone.style.boxSizing = 'border-box';
    clone.style.fontSize = '12pt';
    
    // Hide the download button in the PDF
    const downloadBtn = clone.querySelector('.download-btn');
    if (downloadBtn) downloadBtn.style.display = 'none';

    // Generate PDF
    doc.html(clone, {
      callback: function (doc) {
        doc.save('resume.pdf');
      },
      x: 0,
      y: 0,
      width: 595, // A4 width in points
      windowWidth: element.scrollWidth,
    });
  };

  const printResume = () => {
    window.print();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Modern':
        return <Modern resumeData={resumeData} darkMode={darkMode} />;
      case 'Professional':
        return <Professional resumeData={resumeData} darkMode={darkMode} />;
      default:
        return <Classic resumeData={resumeData} darkMode={darkMode} />;
    }
  };

  return (
    <div className="preview">
      <div className="preview-actions">
        <button onClick={downloadPDF} className="download-btn">
          <i className="fas fa-download"></i> Download PDF
        </button>
        <button onClick={printResume} className="print-btn">
          <i className="fas fa-print"></i> Print
        </button>
      </div>
      <div className="resume-preview" ref={previewRef}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
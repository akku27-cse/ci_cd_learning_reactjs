import React from 'react';

const Professional = ({ resumeData, darkMode }) => {
  return (
    <div className={`resume professional ${darkMode ? 'dark' : ''}`}>
      <div className="header-section">
        <h1>{resumeData.personalInfo.name}</h1>
        {resumeData.personalInfo.title && <h2>{resumeData.personalInfo.title}</h2>}
        <div className="contact-info">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.linkedin && (
            <span>
              <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </span>
          )}
        </div>
      </div>

      {resumeData.objective && (
        <section className="summary">
          <h2>Professional Summary</h2>
          <p>{resumeData.objective}</p>
        </section>
      )}

      <div className="main-content">
        <div className="left-section">
          {resumeData.experience.length > 0 && resumeData.experience[0].company && (
            <section className="experience">
              <h2>Professional Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3>{exp.position}</h3>
                    <span className="date">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="company">{exp.company}</div>
                  {exp.description && (
                    <ul className="description">
                      {exp.description.split('\n').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>

        <div className="right-section">
          {resumeData.education.length > 0 && resumeData.education[0].institution && (
            <section className="education">
              <h2>Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="date">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </section>
          )}

          {resumeData.skills.length > 0 && (
            <section className="skills">
              <h2>Technical Skills</h2>
              <div className="skills-list">
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData.certifications.length > 0 && resumeData.certifications[0].name && (
            <section className="certifications">
              <h2>Certifications</h2>
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional;
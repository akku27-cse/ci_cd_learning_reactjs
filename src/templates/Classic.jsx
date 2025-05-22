import React from 'react';

const Classic = ({ resumeData, darkMode }) => {
  return (
    <div className={`resume classic ${darkMode ? 'dark' : ''}`}>
      <header>
        <h1>{resumeData.personalInfo.name}</h1>
        <div className="contact-info">
          {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
          {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
          {resumeData.personalInfo.address && <span>{resumeData.personalInfo.address}</span>}
          {resumeData.personalInfo.linkedin && (
            <span>
              <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </span>
          )}
          {resumeData.personalInfo.github && (
            <span>
              <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          )}
        </div>
      </header>

      {resumeData.objective && (
        <section className="objective">
          <h2>Objective</h2>
          <p>{resumeData.objective}</p>
        </section>
      )}

      {resumeData.education.length > 0 && resumeData.education[0].institution && (
        <section className="education">
          <h2>Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3>{edu.institution}</h3>
                <span className="date">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="degree">
                {edu.degree} {edu.field && `in ${edu.field}`}
              </p>
              {edu.description && <p className="description">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {resumeData.experience.length > 0 && resumeData.experience[0].company && (
        <section className="experience">
          <h2>Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.company}</h3>
                <span className="date">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="position">{exp.position}</p>
              {exp.description && (
                <div className="description">
                  {exp.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resumeData.skills.length > 0 && (
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resumeData.projects.length > 0 && resumeData.projects[0].name && (
        <section className="projects">
          <h2>Projects</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              {project.technologies && (
                <p className="technologies">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              )}
              {project.description && (
                <div className="description">
                  {project.description.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resumeData.certifications.length > 0 && resumeData.certifications[0].name && (
        <section className="certifications">
          <h2>Certifications</h2>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3>{cert.name}</h3>
              <p>
                <strong>Issuer:</strong> {cert.issuer} | <strong>Date:</strong> {cert.date}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Classic;
import React from 'react';

const Modern = ({ resumeData, darkMode }) => {
  return (
    <div className={`resume modern ${darkMode ? 'dark' : ''}`}>
      <div className="resume-header">
        <div className="header-left">
          <h1>{resumeData.personalInfo.name}</h1>
          {resumeData.personalInfo.title && <h2>{resumeData.personalInfo.title}</h2>}
        </div>
        <div className="header-right">
          <div className="contact-info">
            {resumeData.personalInfo.email && <div><i className="icon email"></i>{resumeData.personalInfo.email}</div>}
            {resumeData.personalInfo.phone && <div><i className="icon phone"></i>{resumeData.personalInfo.phone}</div>}
            {resumeData.personalInfo.linkedin && (
              <div>
                <i className="icon linkedin"></i>
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.linkedin}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="resume-columns">
        <div className="left-column">
          {resumeData.objective && (
            <section className="objective">
              <h2>SUMMARY</h2>
              <p>{resumeData.objective}</p>
            </section>
          )}

          {resumeData.experience.length > 0 && resumeData.experience[0].company && (
            <section className="experience">
              <h2>EXPERIENCE</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.position}</h3>
                  <div className="company-date">
                    <span className="company">{exp.company}</span>
                    <span className="date">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
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

        <div className="right-column">
          {resumeData.education.length > 0 && resumeData.education[0].institution && (
            <section className="education">
              <h2>EDUCATION</h2>
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
              <h2>SKILLS</h2>
              <div className="skills-container">
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-name">{skill}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData.projects.length > 0 && resumeData.projects[0].name && (
            <section className="projects">
              <h2>PROJECTS</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h3>{project.name}</h3>
                  {project.technologies && (
                    <p className="technologies">{project.technologies}</p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modern;
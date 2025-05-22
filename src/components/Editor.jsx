import React from 'react';

const Editor = ({
  resumeData,
  handleInputChange,
  addNewItem,
  removeItem,
  currentSkill,
  setCurrentSkill,
  handleSkillAdd,
  handleSkillRemove,
}) => {
  return (
    <div className="editor">
      <h2>Edit Your Resume</h2>
      
      <section>
        <h3>Personal Information</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={resumeData.personalInfo.name}
            onChange={(e) =>
              handleInputChange('personalInfo', 'name', e.target.value)
            }
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) =>
              handleInputChange('personalInfo', 'email', e.target.value)
            }
            placeholder="john@example.com"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={resumeData.personalInfo.phone}
            onChange={(e) =>
              handleInputChange('personalInfo', 'phone', e.target.value)
            }
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={resumeData.personalInfo.address}
            onChange={(e) =>
              handleInputChange('personalInfo', 'address', e.target.value)
            }
            placeholder="City, Country"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input
            type="url"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) =>
              handleInputChange('personalInfo', 'linkedin', e.target.value)
            }
            placeholder="https://linkedin.com/in/username"
          />
        </div>
        <div className="form-group">
          <label>GitHub</label>
          <input
            type="url"
            value={resumeData.personalInfo.github}
            onChange={(e) =>
              handleInputChange('personalInfo', 'github', e.target.value)
            }
            placeholder="https://github.com/username"
          />
        </div>
      </section>

      <section>
        <h3>Objective</h3>
        <textarea
          value={resumeData.objective}
          onChange={(e) => handleInputChange('objective', '', e.target.value)}
          placeholder="Brief summary of your career goals and what you bring to the table"
          rows="4"
        />
      </section>

      <section>
        <div className="section-header">
          <h3>Education</h3>
          <button onClick={() => addNewItem('education')}>+ Add Education</button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="form-group">
              <label>Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleInputChange('education', 'institution', e.target.value, index)
                }
                placeholder="University Name"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleInputChange('education', 'degree', e.target.value, index)
                  }
                  placeholder="Bachelor of Science"
                />
              </div>
              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) =>
                    handleInputChange('education', 'field', e.target.value, index)
                  }
                  placeholder="Computer Science"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) =>
                    handleInputChange('education', 'startDate', e.target.value, index)
                  }
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) =>
                    handleInputChange('education', 'endDate', e.target.value, index)
                  }
                  placeholder="MM/YYYY or Present"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={edu.description}
                onChange={(e) =>
                  handleInputChange('education', 'description', e.target.value, index)
                }
                placeholder="Notable achievements, honors, or relevant coursework"
                rows="3"
              />
            </div>
            {resumeData.education.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeItem('education', edu.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </section>

      <section>
        <div className="section-header">
          <h3>Experience</h3>
          <button onClick={() => addNewItem('experience')}>+ Add Experience</button>
        </div>
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  handleInputChange('experience', 'company', e.target.value, index)
                }
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) =>
                  handleInputChange('experience', 'position', e.target.value, index)
                }
                placeholder="Job Title"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) =>
                    handleInputChange('experience', 'startDate', e.target.value, index)
                  }
                  placeholder="MM/YYYY"
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) =>
                    handleInputChange('experience', 'endDate', e.target.value, index)
                  }
                  placeholder="MM/YYYY or Present"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={exp.description}
                onChange={(e) =>
                  handleInputChange('experience', 'description', e.target.value, index)
                }
                placeholder="Your responsibilities and achievements in this role"
                rows="4"
              />
            </div>
            {resumeData.experience.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeItem('experience', exp.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </section>

      <section>
        <h3>Skills</h3>
        <div className="skills-input">
          <input
            type="text"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSkillAdd()}
            placeholder="Add a skill (e.g., JavaScript)"
          />
          <button onClick={handleSkillAdd}>Add</button>
        </div>
        <div className="skills-list">
          {resumeData.skills.map((skill) => (
            <div key={skill} className="skill-tag">
              {skill}
              <button onClick={() => handleSkillRemove(skill)}>×</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h3>Projects</h3>
          <button onClick={() => addNewItem('projects')}>+ Add Project</button>
        </div>
        {resumeData.projects.map((project, index) => (
          <div key={project.id} className="project-item">
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  handleInputChange('projects', 'name', e.target.value, index)
                }
                placeholder="Project Title"
              />
            </div>
            <div className="form-group">
              <label>Technologies Used</label>
              <input
                type="text"
                value={project.technologies}
                onChange={(e) =>
                  handleInputChange('projects', 'technologies', e.target.value, index)
                }
                placeholder="React, Node.js, MongoDB"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={project.description}
                onChange={(e) =>
                  handleInputChange('projects', 'description', e.target.value, index)
                }
                placeholder="Brief description of the project and your contributions"
                rows="3"
              />
            </div>
            {resumeData.projects.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeItem('projects', project.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </section>

      <section>
        <div className="section-header">
          <h3>Certifications</h3>
          <button onClick={() => addNewItem('certifications')}>+ Add Certification</button>
        </div>
        {resumeData.certifications.map((cert, index) => (
          <div key={cert.id} className="certification-item">
            <div className="form-group">
              <label>Certification Name</label>
              <input
                type="text"
                value={cert.name}
                onChange={(e) =>
                  handleInputChange('certifications', 'name', e.target.value, index)
                }
                placeholder="AWS Certified Developer"
              />
            </div>
            <div className="form-group">
              <label>Issuer</label>
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) =>
                  handleInputChange('certifications', 'issuer', e.target.value, index)
                }
                placeholder="Amazon Web Services"
              />
            </div>
            <div className="form-group">
              <label>Date Earned</label>
              <input
                type="text"
                value={cert.date}
                onChange={(e) =>
                  handleInputChange('certifications', 'date', e.target.value, index)
                }
                placeholder="MM/YYYY"
              />
            </div>
            {resumeData.certifications.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeItem('certifications', cert.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Editor;
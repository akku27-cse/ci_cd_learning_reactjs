import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: '',
    },
    objective: '',
    education: [
      {
        id: Date.now(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    experience: [
      {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ],
    skills: [],
    projects: [
      {
        id: Date.now(),
        name: '',
        description: '',
        technologies: '',
      },
    ],
    certifications: [
      {
        id: Date.now(),
        name: '',
        issuer: '',
        date: '',
      },
    ],
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('Classic');
  const [darkMode, setDarkMode] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }

    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('darkMode', darkMode);
  }, [resumeData, darkMode]);

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      const updatedArray = [...resumeData[section]];
      updatedArray[index] = { ...updatedArray[index], [field]: value };
      setResumeData({ ...resumeData, [section]: updatedArray });
    } else {
      setResumeData({
        ...resumeData,
        [section]: { ...resumeData[section], [field]: value },
      });
    }
  };

  const addNewItem = (section) => {
    const defaultItem = {
      education: {
        id: Date.now(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      experience: {
        id: Date.now(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      projects: {
        id: Date.now(),
        name: '',
        description: '',
        technologies: '',
      },
      certifications: {
        id: Date.now(),
        name: '',
        issuer: '',
        date: '',
      },
    };

    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], defaultItem[section]],
    });
  };

  const removeItem = (section, id) => {
    setResumeData({
      ...resumeData,
      [section]: resumeData[section].filter((item) => item.id !== id),
    });
  };

  const handleSkillAdd = () => {
    if (currentSkill.trim() && !resumeData.skills.includes(currentSkill.trim())) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, currentSkill.trim()],
      });
      setCurrentSkill('');
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="container">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <div className="builder-container">
          <Editor
            resumeData={resumeData}
            handleInputChange={handleInputChange}
            addNewItem={addNewItem}
            removeItem={removeItem}
            currentSkill={currentSkill}
            setCurrentSkill={setCurrentSkill}
            handleSkillAdd={handleSkillAdd}
            handleSkillRemove={handleSkillRemove}
          />
          <Preview
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
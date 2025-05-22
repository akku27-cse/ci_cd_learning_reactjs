import React from 'react';

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="template-selector">
      <h3>Select a Template</h3>
      <div className="template-options">
        <button
          className={selectedTemplate === 'Classic' ? 'active' : ''}
          onClick={() => setSelectedTemplate('Classic')}
        >
          Classic
        </button>
        <button
          className={selectedTemplate === 'Modern' ? 'active' : ''}
          onClick={() => setSelectedTemplate('Modern')}
        >
          Modern
        </button>
        <button
          className={selectedTemplate === 'Professional' ? 'active' : ''}
          onClick={() => setSelectedTemplate('Professional')}
        >
          Professional
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;
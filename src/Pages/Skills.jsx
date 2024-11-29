// Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">My Skills</h1>

      <div className="skill">
        <h3>HTML</h3>
        <div className="progress-bar">
          <div className="progress html"></div>
        </div>
      </div>

      <div className="skill">
        <h3>CSS</h3>
        <div className="progress-bar">
          <div className="progress css"></div>
        </div>
      </div>

      <div className="skill">
        <h3>JavaScript</h3>
        <div className="progress-bar">
          <div className="progress javascript"></div>
        </div>
      </div>

      <div className="skill">
        <h3>React</h3>
        <div className="progress-bar">
          <div className="progress react"></div>
        </div>
      </div>

      <div className="skill">
        <h3>Node.js</h3>
        <div className="progress-bar">
          <div className="progress node"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

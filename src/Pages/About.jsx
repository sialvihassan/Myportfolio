import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <section className="introduction">
          <h2>Hi, I'm Hassan Sialvi!</h2>
          <p>
            I’m a passionate web developer with over 3 years of experience in the industry. My expertise lies in
            building dynamic, user-friendly web applications. I enjoy tackling challenging projects and
            continually improving my skills to deliver high-quality results. Let's create something amazing together!
          </p>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
          <div className="skill-bar">
            <label>HTML & CSS</label>
            <div className="progress-bar"><span className="html-skill"></span></div>
          </div>
          <div className="skill-bar">
            <label>JavaScript</label>
            <div className="progress-bar"><span className="javascript-skill"></span></div>
          </div>
          <div className="skill-bar">
            <label>React</label>
            <div className="progress-bar"><span className="react-skill"></span></div>
          </div>
          <div className="skill-bar">
            <label>Node.js</label>
            <div className="progress-bar"><span className="nodejs-skill"></span></div>
          </div>
        </section>

        <section className="fun-facts">
          <h2>Fun Facts</h2>
          <ul>
            <li>🖥️ Developed 50+ websites</li>
            <li>🌏 Fluent in 3 languages</li>
            <li>📚 Lifelong learner with a passion for tech</li>
            <li>🎸 Guitar enthusiast and part-time musician</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

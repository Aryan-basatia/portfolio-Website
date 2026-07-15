import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-text">
          <p>
            Hi! I'm Aryan Basatia, a passionate Frontend Developer with a strong
            foundation in React and modern JavaScript. I specialize in building
            responsive, user-friendly web applications that provide great user
            experiences.
          </p>
          <p>
            Currently, I'm expanding my skills into Backend Development with
            Java, learning Spring Boot, REST APIs, and databases to become a
            full-stack developer. I'm dedicated to writing clean, maintainable
            code and continuously improving my craft.
          </p>
          <p>
            I've worked on several projects including Task Tracker, Student
            Directory, and Travel List applications. My goal is to create
            impactful solutions that solve real-world problems.
          </p>

          <div className="skills">
            <h3>Key Skills:</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
              <li>Responsive Design</li>
              <li>Git & Version Control</li>
              <li>Java (Learning)</li>
              <li>Spring Boot (Learning)</li>
              <li>Databases (Learning)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

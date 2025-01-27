import React, { useState } from "react";
import "./App.css"; 

function App() {

  const [activeSection, setActiveSection] = useState("about");

  const showSection = (section) => {
    console.log("showSection", section);
    setActiveSection(section);
  };

  return (
    <div className="App">
      <nav>
        <a href="#about" onClick={() => showSection("about")}>About</a>
        <a href="#skills" onClick={() => showSection("skills")}>Skills</a>
        <a href="#experience" onClick={() => showSection("experience")}>Experience</a>
        <a href="#projects" onClick={() => showSection("projects")}>Projects</a>
        <a href="#contact" onClick={() => showSection("contact")}>Contact</a>
      </nav>

      {/* About Section */}
      {activeSection === "about" && (
        <div id="about">
          <div className="head">
            <h1>Hello, I'm Mariya</h1>
          </div>
          <div className="intro">
            Experienced Software Engineer passionate about delivering user-centered solutions by blending creativity and technology. Proficient in full-stack development, cloud platforms, and software engineering methodologies, with a commitment to innovation and continuous growth.
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <div id="skills">
          <div className="head">
            <h1>Skills</h1>
          </div>
          <div className="grid-container">
            <div className="skill-box">JavaScript, TypeScript, Python, Java, C#, SQL, Go</div>
            <div className="skill-box">Angular, React, Node.js</div>
            <div className="skill-box">MongoDB, Neo4j, Heroku</div>
            <div className="skill-box">Agile Methodologies: Scrum, Sprint Planning</div>
            <div className="skill-box">Cloud Platforms: Heroku</div>
            <div className="skill-box">Tools: GitHub, Visual Studio Code, Xcode, ServiceNow, Jira</div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      {activeSection === "experience" && (
        <div id="experience">
          
          <div className="head">
            <h1>Experience</h1>
          </div>
          <div className="experience-section">
            <div className="experience-card">
              <h2>Capgemini Technology Services India Limited, Bangalore</h2>
              <p><strong>Professional II-Software Engineer Lead</strong> (Aug 2022 – Dec 2023)</p>
              <div className="experience-details">
                <p>Developed, coded, and tested full-stack applications, focusing on e-commerce website stability and performance using React and Node.js.</p>
                <p>Collaborated with cross-functional teams in an Agile environment to implement design and architectural solutions.</p>
              </div>
            </div>

            <div className="experience-card">
              <h2>Tata Consultancy Services, Kochi, Kerala</h2>
              <p><strong>Software Developer - Innovation</strong> (Jan 2020 - Aug 2022)</p>
              <div className="experience-details">
                <p>Successfully developed and deployed multiple web applications enhancing data analysis and operational efficiency for various teams.</p>
                <p>Designed a web-based application using Angular and Mapbox GL JS to visualize water quality data for specific regions.</p>
              </div>
            </div>

            <div className="experience-card">
              <h2>Ruby Seven Studios, Kochi, India</h2>
              <p><strong>Associate Game Programmer</strong> (Jun 2018 - Jan 2020)</p>
              <div className="experience-details">
                <p>Developed and deployed features for gaming applications, maintaining code quality and contributing to a collaborative Agile team.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <div id="projects">
          <div className="head">
            <h1>Projects</h1>
          </div>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1: Water Quality Data Visualization</h3>
              <p>Designed a solution to analyze and display water quality data using Angular and Mapbox.</p>
            </div>
            <div className="project-card">
              <h3>Project 2: E-Commerce Web Application</h3>
              <p>Developed a scalable e-commerce platform using React and Node.js.</p>
            </div>
            <div className="project-card">
              <h3>Project 3: Employee Onboarding System</h3>
              <p>Streamlined onboarding by creating a user-friendly web application.</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <div id="contact">
          <div className="head">
            <h1>Contact</h1>
          </div>
            <p>Phone: 437-567-8901</p>
            <p>Email: <a href="mailto:mariya_francis@outlook.com">mariya_francis@outlook.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mariyafrancis/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mariya</a></p> 
        </div>
      )}
    </div>
  );
}

export default App;

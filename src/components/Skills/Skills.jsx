import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header animate-on-scroll">
        <span className="section-label">What I Do</span>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I work with daily
        </p>
      </div>

      <div className="skills__grid">
        <div
          className="skills__card animate-on-scroll"
          style={{ "--delay": "0.1s" }}
        >
          <div className="card-glow"></div>
          <div className="skill-icon">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <h3 className="skills__card-title">Front-End</h3>
          <div className="skill-divider"></div>
          <ul className="skill-list">
            <li>
              <span className="skill-dot"></span>HTML5 & CSS3
            </li>
            <li>
              <span className="skill-dot"></span>JavaScript (ES6+)
            </li>
            <li>
              <span className="skill-dot"></span>React.js
            </li>
            <li>
              <span className="skill-dot"></span>TypeScript
            </li>
            <li>
              <span className="skill-dot"></span>REST APIs
            </li>
            <li>
              <span className="skill-dot"></span>Responsive Design
            </li>
          </ul>
        </div>

        <div
          className="skills__card animate-on-scroll"
          style={{ "--delay": "0.2s" }}
        >
          <div className="card-glow"></div>
          <div className="skill-icon">
            <i className="fa-solid fa-server"></i>
          </div>
          <h3 className="skills__card-title">Back-End</h3>
          <div className="skill-divider"></div>
          <ul className="skill-list">
            <li>
              <span className="skill-dot"></span>Node.js
            </li>
            <li>
              <span className="skill-dot"></span>Express.js
            </li>
            <li>
              <span className="skill-dot"></span>Python
            </li>
            <li>
              <span className="skill-dot"></span>Cloud Deployment
            </li>
            <li>
              <span className="skill-dot"></span>API Development
            </li>
          </ul>
        </div>

        <div
          className="skills__card animate-on-scroll"
          style={{ "--delay": "0.3s" }}
        >
          <div className="card-glow"></div>
          <div className="skill-icon">
            <i className="fa-solid fa-database"></i>
          </div>
          <h3 className="skills__card-title">Database</h3>
          <div className="skill-divider"></div>
          <ul className="skill-list">
            <li>
              <span className="skill-dot"></span>PostgreSQL
            </li>
            <li>
              <span className="skill-dot"></span>SQL
            </li>
            <li>
              <span className="skill-dot"></span>Database Design
            </li>
            <li>
              <span className="skill-dot"></span>Query Optimization
            </li>
          </ul>
        </div>

        <div
          className="skills__card animate-on-scroll"
          style={{ "--delay": "0.4s" }}
        >
          <div className="card-glow"></div>
          <div className="skill-icon">
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3 className="skills__card-title">Design & Tools</h3>
          <div className="skill-divider"></div>
          <ul className="skill-list">
            <li>
              <span className="skill-dot"></span>Git & GitHub
            </li>
            <li>
              <span className="skill-dot"></span>Figma
            </li>
            <li>
              <span className="skill-dot"></span>Canva
            </li>
            <li>
              <span className="skill-dot"></span>Vite
            </li>
            <li>
              <span className="skill-dot"></span>NPM
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

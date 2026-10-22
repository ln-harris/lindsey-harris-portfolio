import { useEffect, useState } from "react";
import "./Hero.css";
import image0 from "../../images/LindseyHarris_Avatar.png";

export default function Hero() {
  const words = [
    "Full-Stack Developer",
    "Interactive Web Apps",
    "AI-Enhanced Workflow",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setVisible(false);
      timeout = setTimeout(() => {
        setWordIndex((index) => (index + 1) % 3);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <section id="home" className="hero">
      <div className="hero__content animate-on-scroll">
        <h1 className="hero__title">
          <span className="text-gradient">Lindsey</span>
          <br />
          Harris
        </h1>
        <p className="hero__rotating-text">
          <span className="rotating-word" style={{ opacity: visible ? 1 : 0 }}>
            {words[wordIndex]}
          </span>
        </p>
        <p className="hero__subtitle">
          Focused on creating user-friendly apps with a touch of modern design.
          <br />
        </p>
        <div className="hero__tags">
          <span className="hero__tag">
            <i className="fas fa-map-marker-alt"></i>
            Arizona, USA
          </span>
          <span className="hero__tag">
            <i className="fas fa-check-circle"></i>
            Real-Client Experience
          </span>
          <span className="hero__tag">
            <i className="fa-solid fa-user-graduate"></i>
            B.S. Business Management
          </span>
          <span className="hero__tag">
            <i className="fas fa-code"></i>
            Full Stack Certified
          </span>
        </div>
        <div className="hero__cta">
          <a href="YOUR_RESUME_LINK_HERE" className="btn btn-primary" download>
            <i className="fa-solid fa-download"></i>
            <span>Resume</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Let's Connect</span>
            <i className="fas fa-paper-plane"></i>
          </a>
        </div>
        <div className="hero__social">
          <a
            href="https://github.com/ln-harris"
            target="_blank"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lindseyharr/"
            target="_blank"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <a href="#skills" className="scroll-down">
          <span className="scroll-down__text">Scroll Down</span>
          <i className="fas fa-arrow-down"></i>
        </a>
      </div>

      <div className="hero__image animate-on-scroll">
        <div className="image-container">
          <div className="image-glow"></div>
          <img className="profile__image" src={image0} alt="Lindsey Harris" />
          <div className="hero__badge hero__badge--floating">
            <span className="badge-dot"></span>
            Available for work
          </div>
          <div className="floating-elements">
            <div className="float-icon float-1">
              <i className="fab fa-react"></i>
            </div>
            <div className="float-icon float-2">
              <i className="fab fa-js"></i>
            </div>
            <div className="float-icon float-3">
              <i className="fab fa-node"></i>
            </div>
            <div className="float-icon float-4">
              <i className="fa-brands fa-html5"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* Storage may be unavailable. */
    }
  }, [theme]);
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="navbar">
      <a href="#home" className="logo">
        <span className="logo-text">Software Developer</span>
      </a>
      <button
        className={`nav-toggle${menuOpen ? " active" : ""}`}
        id="navToggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul
        className={`nav__links${menuOpen ? " active" : ""}`}
        id="navLinks"
        onClick={() => setMenuOpen(false)}
      >
        <li>
          <a className="nav__link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav__link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav__link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav__actions">
        <span className="theme-toggle-label">
          Try Light Mode <i className="fas fa-arrow-right"></i>
        </span>
        <button
          className="theme-toggle"
          id="themeToggle"
          aria-label="Toggle color theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i>
        </button>
      </div>
    </nav>
  );
}

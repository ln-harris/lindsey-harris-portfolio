import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2026 Lindsey Harris</p>
        <div className="footer__links">
          <a href="#home">
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

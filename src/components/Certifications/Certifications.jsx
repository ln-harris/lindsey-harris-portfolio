import "./Certifications.css";
import frontEndCertificate from "../../images/front-end-engineer-certificate.png";
import fullStackCertificate from "../../images/fullstack.png";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="section-header animate-on-scroll">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Verified skills completed at{" "}
          <a
            href="https://www.tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="certifications__school-link"
          >
            TripleTen
          </a>
        </p>
      </div>

      <div className="certifications__grid">
        {/* Full-Stack Certificate */}
        <div
          className="cert-card animate-on-scroll"
          style={{ "--delay": "0.1s" }}
        >
          <div className="cert-image">
            <img
              src={fullStackCertificate}
              alt="Full Stack Developer Certificate"
            />
          </div>
          <div className="cert-content">
            <h3 className="cert-title">Full-Stack Developer</h3>
            <p className="cert-issuer">
              TripleTen Software Engineering Program
            </p>
            <a
              href="./assets/certs/full-stack-developer-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              <i className="fas fa-file-pdf"></i>
              View Certificate
            </a>
          </div>
        </div>

        {/* Front-End Certificate */}
        <div
          className="cert-card animate-on-scroll"
          style={{ "--delay": "0.2s" }}
        >
          <div className="cert-image">
            <img
              src={frontEndCertificate}
              alt="Front-End Engineer Certificate"
            />
          </div>
          <div className="cert-content">
            <h3 className="cert-title">Front-End Engineer</h3>
            <p className="cert-issuer">
              TripleTen Software Engineering Program
            </p>
            <a
              href="./assets/certs/front-end-engineer-certificate.pdf"
              target="_blank"
              className="cert-link"
            >
              <i className="fas fa-file-pdf"></i>
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

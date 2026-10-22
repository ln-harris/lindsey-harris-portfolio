import "./Certifications.css";
import image0 from "../../images/frontend.png";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="section-header animate-on-scroll">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Verified skills and completed programs
        </p>
      </div>

      <div className="certifications__grid">
        {/* Certificate 1
          <div className="cert-card animate-on-scroll" style={{ "--delay": "0.1s" }}>
            <div className="cert-image">
              <img
                src="./images/cert-fullstack.jpg"
                alt="Full Stack Developer Certificate"
              />
              <div className="cert-overlay">
                <i className="fas fa-computer"></i>
              </div>
            </div>
            <div className="cert-content">
              <h3 className="cert-title">Full-Stack Developer</h3>
              <p className="cert-issuer">TripleTen Bootcamp</p>
              <a
                href="./certificates/fullstack.pdf"
                target="_blank"
                className="cert-link"
              >
                <i className="fas fa-file-pdf"></i>
                View Certificate
              </a>
            </div>
          </div> */}

        {/* Certificate 2 */}
        <div
          className="cert-card animate-on-scroll"
          style={{ "--delay": "0.2s" }}
        >
          <div className="cert-image">
            <img src={image0} alt="Front-End Engineer Certificate" />
            <div className="cert-overlay">
              <i className="fab fa-react"></i>
            </div>
          </div>
          <div className="cert-content">
            <h3 className="cert-title">Front-end Engineer</h3>
            <p className="cert-issuer">
              TripleTen Software Engineering Program
            </p>
            <a
              href="./assets/certs/frontend.pdf"
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

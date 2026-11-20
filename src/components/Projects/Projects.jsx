import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import "./Projects.css";
import wtwr1 from "../../images/wtwr-desktop.png";
import wtwr2 from "../../images/wtwr-addmodal.png";
import wtwr3 from "../../images/wtwr-prevmodal.png";
import spots1 from "../../images/spots_desktop.png";
import spots2 from "../../images/spots-editmodal.png";
import spots3 from "../../images/spots-previewmodal.png";
import spots4 from "../../images/spots-demo_mobile_view.png";

import news1 from "../../images/news-home-page.png";
import news2 from "../../images/news-search-results.png";
import news3 from "../../images/news-saved-news.png";
import news4 from "../../images/news-mobile-home-page.png";
import news5 from "../../images/news-mobile-saved.png";

import hhm1 from "../../images/hhm-home.png";
import hhm2 from "../../images/hhm-ministry-impact.png";
import hhm3 from "../../images/hhm-community-gallery.png";
import hhm4 from "../../images/hhm-explore-menu.png";
import hhm5 from "../../images/hhm-calendar.png";
import hhm6 from "../../images/hhm-giving.png";

const heavenlyHopeSlides = [
  { src: hhm1, label: "Homepage" },
  { src: hhm2, label: "Ministry impact and weekly schedule" },
  { src: hhm3, label: "Life at Heavenly Hope photo gallery" },
  { src: hhm4, label: "Support Our Mission page with the Explore menu open" },
  { src: hhm5, label: "Community calendar" },
  { src: hhm6, label: "Charitable giving form" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header animate-on-scroll">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications showcasing my skills
        </p>
      </div>

      <div className="projects__grid">
        <div
          className="project__card animate-on-scroll"
          style={{ "--delay": "0.1s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              <img
                className="project__image is-active"
                src={news1}
                alt="News Explorer home page"
              />
              <img
                className="project__image"
                src={news2}
                alt="News Explorer search results"
              />
              <img
                className="project__image"
                src={news3}
                alt="News Explorer saved articles"
              />
              <img
                className="project__image project__image--mobile"
                src={news4}
                alt="News Explorer mobile home page"
              />
              <img
                className="project__image project__image--mobile"
                src={news5}
                alt="News Explorer mobile saved articles"
              />
            </div>
            <button
              className="project__carousel-btn project__carousel-btn--prev"
              type="button"
              aria-label="Previous project image"
              data-carousel-prev
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="project__carousel-btn project__carousel-btn--next"
              type="button"
              aria-label="Next project image"
              data-carousel-next
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="project__carousel-dots" aria-label="Project images">
              <button
                className="project__carousel-dot is-active"
                type="button"
                aria-label="Show project image 1"
                data-carousel-dot="0"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 2"
                data-carousel-dot="1"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 3"
                data-carousel-dot="2"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show News Explorer mobile home page"
                data-carousel-dot="3"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show News Explorer mobile saved articles"
                data-carousel-dot="4"
              ></button>
            </div>
          </ProjectCarousel>
          <div className="project__content">
            <h3 className="project__title">News Explorer</h3>
            <p className="project__description">
              A responsive news app that lets users search for articles by
              keyword, read stories from original sources, and save favorites to
              a personal collection. Includes sign-in and registration forms
              with simulated authentication.
            </p>
            <div className="project__tech">
              <span className="tech-tag react">React</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag news-api">NewsAPI</span>
              <span className="tech-tag api">REST API</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag html">HTML5</span>
              <span className="tech-tag css">CSS3</span>
              <span className="tech-tag">BEM</span>
              <span className="tech-tag">Responsive Design</span>
            </div>
            <div className="project__links">
              <a
                href="https://ln-harris.github.io/news-explorer/"
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                <i className="fas fa-rocket"></i>
                Try Demo
              </a>
              <a
                href="https://github.com/ln-harris/news-explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="project__link"
              >
                <i className="fab fa-github"></i>
                Code
              </a>
            </div>
          </div>
        </div>

        <div
          className="project__card animate-on-scroll"
          style={{ "--delay": "0.2s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              {heavenlyHopeSlides.map(({ src, label }) => (
                <img
                  key={src}
                  className="project__image project__image--contain"
                  src={src}
                  alt={label}
                />
              ))}
            </div>
            <button
              className="project__carousel-btn project__carousel-btn--prev"
              type="button"
              aria-label="Previous project image"
              data-carousel-prev
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="project__carousel-btn project__carousel-btn--next"
              type="button"
              aria-label="Next project image"
              data-carousel-next
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="project__carousel-dots" aria-label="Project images">
              {heavenlyHopeSlides.map(({ src, label }, index) => (
                <button
                  key={src}
                  className="project__carousel-dot"
                  type="button"
                  aria-label={`Show screenshot: ${label}`}
                  data-carousel-dot={index}
                />
              ))}
            </div>
          </ProjectCarousel>
          <div className="project__content">
            <h3 className="project__title">Heavenly Hope Ministries</h3>
            <p className="project__description">
              I partnered with another software engineer to build a website for
              Heavenly Hope Ministries as a client project. The website and
              source code are temporarily unavailable while we fix the remaining
              bugs and prepare the site for launch.
            </p>
            <div className="project__tech">
              <span className="tech-tag react">React</span>
              <span className="tech-tag typescript">TypeScript</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag html">HTML5</span>
              <span className="tech-tag css">CSS3</span>
              <span className="tech-tag">React Router</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag cloudflare">Cloudflare Pages</span>
            </div>
            <div className="project__links project__links--client">
              <span className="tech-tag">In progress</span>
              <span className="project__client-badge">
                <i className="fas fa-star" aria-hidden="true"></i>
                Client Project
              </span>
            </div>
          </div>
        </div>

        <div
          className="project__card animate-on-scroll"
          style={{ "--delay": "0.3s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              <img
                className="project__image is-active"
                src={wtwr1}
                alt="WTWR desktop view"
              />
              <img
                className="project__image"
                src={wtwr2}
                alt="WTWR add clothing modal"
              />
              <img
                className="project__image"
                src={wtwr3}
                alt="WTWR clothing preview modal"
              />
            </div>
            <button
              className="project__carousel-btn project__carousel-btn--prev"
              type="button"
              aria-label="Previous project image"
              data-carousel-prev
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="project__carousel-btn project__carousel-btn--next"
              type="button"
              aria-label="Next project image"
              data-carousel-next
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="project__carousel-dots" aria-label="Project images">
              <button
                className="project__carousel-dot is-active"
                type="button"
                aria-label="Show project image 1"
                data-carousel-dot="0"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 2"
                data-carousel-dot="1"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 3"
                data-carousel-dot="2"
              ></button>
            </div>
          </ProjectCarousel>
          <div className="project__content">
            <h3 className="project__title">WTWR</h3>
            <p className="project__description">
              WTWR, short for "What to Wear," is a weather-based clothing app
              that shows the current temperature for a user's location and
              suggests clothing based on hot, warm, or cold conditions through a
              clean React interface.
            </p>
            <div className="project__tech">
              <span className="tech-tag react">React</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag news-api">OpenWeather API</span>
              <span className="tech-tag node">Node.js</span>
              <span className="tech-tag node">Express.js</span>
              <span className="tech-tag api">REST API</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Mongoose</span>
              <span className="tech-tag">JWT</span>
              <span className="tech-tag">Certbot</span>
              <span className="tech-tag tech-tag--silver">Google Cloud</span>
              <span className="tech-tag">NGINX</span>
              <span className="tech-tag">PM2</span>
              <span className="tech-tag">Postman</span>
              <span className="tech-tag">ESLint</span>
            </div>
            <div className="project__links">
              <a
                href="https://github.com/ln-harris/se_project_react"
                target="_blank"
                className="project__link"
              >
                <i className="fab fa-github"></i>
                Code
              </a>
            </div>
          </div>
        </div>

        <div
          className="project__card animate-on-scroll"
          style={{ "--delay": "0.4s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              <img
                className="project__image is-active"
                src={spots1}
                alt="Spots desktop view"
              />
              <img
                className="project__image"
                src={spots2}
                alt="Spots edit profile modal"
              />
              <img
                className="project__image"
                src={spots3}
                alt="Spots preview modal"
              />
              <img
                className="project__image project__image--mobile"
                src={spots4}
                alt="Spots mobile view"
              />
            </div>
            <button
              className="project__carousel-btn project__carousel-btn--prev"
              type="button"
              aria-label="Previous project image"
              data-carousel-prev
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="project__carousel-btn project__carousel-btn--next"
              type="button"
              aria-label="Next project image"
              data-carousel-next
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="project__carousel-dots" aria-label="Project images">
              <button
                className="project__carousel-dot is-active"
                type="button"
                aria-label="Show project image 1"
                data-carousel-dot="0"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 2"
                data-carousel-dot="1"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show project image 3"
                data-carousel-dot="2"
              ></button>
              <button
                className="project__carousel-dot"
                type="button"
                aria-label="Show Spots mobile view"
                data-carousel-dot="3"
              ></button>
            </div>
          </ProjectCarousel>
          <div className="project__content">
            <h3 className="project__title">Spots</h3>
            <p className="project__description">
              A social media app with a clean, responsive interface for
              exploring, uploading, and interacting with images.
            </p>
            <div className="project__tech">
              <span className="tech-tag html">HTML5</span>
              <span className="tech-tag css">CSS3</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag api">REST API</span>
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">npm</span>
              <span className="tech-tag">Flexbox</span>
              <span className="tech-tag">Media Queries</span>
              <span className="tech-tag">Git &amp; GitHub</span>
            </div>
            <div className="project__links">
              <a
                href="https://ln-harris.github.io/se_project_spots/"
                target="_blank"
                className="project__link"
              >
                <i className="fas fa-rocket"></i>
                Try Demo
              </a>
              <a
                href="https://github.com/ln-harris/se_project_spots"
                target="_blank"
                className="project__link"
              >
                <i className="fab fa-github"></i>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

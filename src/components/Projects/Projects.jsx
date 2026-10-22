import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import "./Projects.css";
import image0 from "../../images/wtwr-desktop.png";
import image1 from "../../images/wtwr-addmodal.png";
import image2 from "../../images/wtwr-prevmodal.png";
import image3 from "../../images/spots_desktop.png";
import image4 from "../../images/spots-editmodal.png";
import image5 from "../../images/spots-previewmodal.png";
import image6 from "../../images/tp-main.png";
import image7 from "../../images/tp-recipe.png";
import image8 from "../../images/tp-book.png";
import image9 from "../../images/tp-menu.png";

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
                src={image0}
                alt="WTWR desktop view"
              />
              <img
                className="project__image"
                src={image1}
                alt="WTWR add clothing modal"
              />
              <img
                className="project__image"
                src={image2}
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
              WTWR, short htmlFor "What to Wear," is a weather-based clothing
              app that shows the current temperature htmlFor a user's location
              and suggests clothing based on hot, warm, or cold conditions
              through a clean React interface.
            </p>
            <div className="project__tech">
              <span className="tech-tag react">React</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag css">CSS</span>
              <span className="tech-tag">OpenWeather API</span>
              <span className="tech-tag">GitHub Pages</span>
            </div>
            <div className="project__links">
              <span className="project__link disabled">
                <i className="fas fa-rocket"></i>
                Try Demo
              </span>
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
          style={{ "--delay": "0.2s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              <img
                className="project__image is-active"
                src={image3}
                alt="Spots desktop view"
              />
              <img
                className="project__image"
                src={image4}
                alt="Spots edit profile modal"
              />
              <img
                className="project__image"
                src={image5}
                alt="Spots preview modal"
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
            <h3 className="project__title">Spots</h3>
            <p className="project__description">
              A social media image sharing app with a clean, responsive
              interface that lets users explore, upload, and interact with
              visual content.
            </p>
            <div className="project__tech">
              <span className="tech-tag html">HTML5</span>
              <span className="tech-tag css">CSS3</span>
              <span className="tech-tag js">JavaScript</span>
              <span className="tech-tag api">REST API</span>
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

        <div
          className="project__card animate-on-scroll"
          style={{ "--delay": "0.3s" }}
        >
          <ProjectCarousel>
            <div className="project__carousel-track">
              <img
                className="project__image is-active"
                src={image6}
                alt="Triple Peaks main section"
              />
              <img
                className="project__image"
                src={image7}
                alt="Triple Peaks recipe section"
              />
              <img
                className="project__image"
                src={image8}
                alt="Triple Peaks booking section"
              />
              <img
                className="project__image"
                src={image9}
                alt="Triple Peaks menu section"
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
                aria-label="Show project image 4"
                data-carousel-dot="3"
              ></button>
            </div>
          </ProjectCarousel>
          <div className="project__content">
            <h3 className="project__title">Triple Peaks Coffee Shop</h3>
            <p className="project__description">
              Triple Peaks Coffee Shop is a responsive landing page project
              created htmlFor the TripleTen Software Engineering program using
              HTML and CSS, based on a provided design brief with custom form
              elements and interactive visual details.
            </p>
            <div className="project__tech">
              <span className="tech-tag html">HTML5</span>
              <span className="tech-tag css">CSS</span>
              <span className="tech-tag">Flexbox</span>
              <span className="tech-tag">BEM</span>
              <span className="tech-tag">Forms</span>
              <span className="tech-tag">CSS Animation</span>
            </div>
            <div className="project__links">
              <span className="project__link disabled">
                <i className="fas fa-rocket"></i>
                View Live
              </span>
              <a
                href="https://github.com/ln-harris/se_project_coffeeshop"
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

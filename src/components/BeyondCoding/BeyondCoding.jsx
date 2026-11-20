import "./BeyondCoding.css";
import image0 from "../../images/gaming_pc.png";
import image1 from "../../images/sunset_hike_friends.jpeg";
import image2 from "../../images/dogs.png";

export default function BeyondCoding() {
  return (
    <section className="about">
      <div className="section-header animate-on-scroll">
        <span className="section-label">Personal</span>
        <h2 className="section-title">Beyond Coding</h2>
        <p className="section-subtitle">
          What drives me outside of development
        </p>
      </div>

      <div className="about__grid">
        <div
          className="about__card animate-on-scroll"
          style={{ "--delay": "0.4s" }}
        >
          <div className="about__image">
            <img src={image0} alt="Gaming PC build" />
          </div>
          <div className="about__content">
            <h3>PC Building & Gaming</h3>
            <p>
              I built this gaming PC myself. My love of game development inspired
              my interest in tech. I've been the family's go-to IT person since
              childhood. I'm always fixing tech issues or showing my family
              how to use apps.
            </p>
          </div>
        </div>

        <div
          className="about__card animate-on-scroll"
          style={{ "--delay": "0.2s" }}
        >
          <div className="about__image">
            <img src={image1} alt="Sunset hike with friends" />
          </div>
          <div className="about__content">
            <h3>Group Sunset Hikes</h3>
            <p>
              I thrive with people who value growth, movement, and shared
              experiences. Collaboration fuels my best work. Outside of coding,
              I'm typically enjoying the fresh air on a hike with friends.
            </p>
          </div>
        </div>

        <div
          className="about__card animate-on-scroll"
          style={{ "--delay": "0.1s" }}
        >
          <div className="about__image">
            <img src={image2} alt="Two dogs sitting" />
          </div>
          <div className="about__content">
            <h3>Dog Training</h3>
            <p>
              Training my two Labs has taught me patience, consistency, and the
              value of making a little progress each day. I apply those lessons
              to coding every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

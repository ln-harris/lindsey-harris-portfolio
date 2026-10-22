import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-me">
      <div className="section-header animate-on-scroll">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-me__container animate-on-scroll">
        <div className="about-me__content">
          <div className="about-me__text">
            <p className="intro-paragraph">
              Hello — I'm <span className="highlight">Lindsey</span>. Problem
              solving and curiosity drive everything I do.
            </p>

            <p>
              I graduated in 2020 with a Bachelors of Science in Business
              Management at CCSU, during the start of the pandemic. Instead of
              waiting htmlFor opportunity, I built my own. I taught myself
              technical analysis, learned to interpret complex data, and shared
              my process on YouTube. After offering data analysis education and
              growing a channel
              <span className="highlight">200% growth in three months</span>, I
              was offered a performance-based contract through the
              <span className="highlight">YouTube Partner Program</span>
              and became the lead podcast host.
            </p>

            <p>
              I'm continuing to grow my career in tech, bringing a mix of
              analytical thinking, client experience, and hands-on software
              development. I had always coded htmlFor fun, but eventually
              realized the
              <span className="highlight">daily problem solving</span> I enjoy
              as an analyst was similar thinking to a developer. It's not just
              about fixing a problem but
              <span className="highlight">
                planning ahead to prevent future problems
              </span>
              . This applies perfectly to both data-driven decision making and
              software development.
            </p>

            <p>
              I committed fully and completed
              <span className="highlight">TripleTen's Full-Stack program</span>,
              spending <span className="highlight">1,800+ hours</span> coding
              and building real applications. I’m ready to contribute to a team,
              continue learning, and solve real-world problems through software.
            </p>

            <p className="closing-paragraph">
              <span className="closing-icon">
                <i className="fa-solid fa-book"></i>
              </span>
              <span className="closing-text">
                Always learning, always building
              </span>
            </p>
          </div>
        </div>

        <div className="about-me__visual animate-on-scroll">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="code-title">journey.js</span>
            </div>

            <div className="code-content">
              <pre>
                <code>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">journey</span> = {"{"}
                  <span className="code-property">passion</span>:{" "}
                  <span className="code-string">'problem-solving'</span>,
                  <span className="code-property">commitment</span>:{" "}
                  <span className="code-string">'1800+ hours'</span>,
                  <span className="code-property">focus</span>:{" "}
                  <span className="code-string">'clean, practical code'</span>,
                  <span className="code-function">buildFuture</span>:{" "}
                  <span className="code-keyword">function</span>() {"{"}
                  <span className="code-keyword">return</span>{" "}
                  <span className="code-string">'one solution at a time'</span>;
                  {"}"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

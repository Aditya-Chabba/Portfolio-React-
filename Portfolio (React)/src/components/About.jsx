// src/components/About.jsx
import { FaAward, FaUserFriends } from 'react-icons/fa';
import aboutImg from '../assets/about.jpg'; // save the black‑stroke PNG/JPG in /assets

export default function About() {
  return (
    <section id="about" className="aboutSection">
      <div className="container">
        <h5 className="subtitle">Get To Know More</h5>
        <h2 className="title">About Me</h2>

        <div className="aboutGrid">
          {/* left illustration */}
          <div className="aboutImgWrap">
            <img src={aboutImg} alt="A little bit about me" />
          </div>

          {/* cards */}
          <div className="aboutCards">
            <article className="aboutCard">
              <FaAward className="icon" />
              <h3>Experience</h3>
              <p>Kalvium (July 2025 | Current)</p>
              <p>Academic Mentor</p>
              <p>Masai (Training)</p>
              <p>Software Development (Web Engineer)</p>
            </article>

            <article className="aboutCard">
              <FaUserFriends className="icon" />
              <h3>Education</h3>
              <p>B.E. in Computer Science<br />Chitkara University (8.54)</p>
              <p>Pre‑University<br />D.A.V Sr. Sec. Public School</p>
            </article>
          </div>

          {/* summary */}
          <div className="aboutSummary">
            <p>
              Proactive and detail‑oriented Computer Science and Engineering graduate with a strong
              foundation in data analytics and web development. Adept at transforming complex datasets
              into actionable insights through hands‑on experience with Python, SQL, and data
              visualization tools like Tableau and Matplotlib. Demonstrated ability to solve real‑world
              problems through academic projects involving predictive modeling and statistical analysis.
              Passionate about leveraging data to drive intelligent decision‑making and eager to
              contribute to a forward‑thinking organization through an internship that fosters learning,
              innovation, and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

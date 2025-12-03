import profile from '../assets/Profile.png';
import cv from '../assets/AdityaChabbaCv.pdf';     // <- NEW
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src={profile} alt="Aditya" loading="lazy" className="hero-img" />
        </div>

        <div className="hero-right">
          <p className="intro-text">Hello, I'm</p>
          <h1 className="name">Aditya Chabba</h1>

          <p className="role">
            Data Analyst<br />Frontend Web Engineer 
          </p>

          <div className="hero-buttons">
            <a href={cv} className="btn outline" download>
              Download CV
            </a>
            <a href="#contact" className="btn solid">
              Contact Info
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/adityachabba"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Aditya-Chabba"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

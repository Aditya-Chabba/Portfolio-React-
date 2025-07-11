import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';
import { getStoredTheme } from './utils';

export default function App() {
  const [dark, setDark] = useState(getStoredTheme());

  // add / remove .dark on <body> so CSS variables swap colours
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('dark', JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} toggle={() => setDark(!dark)} />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />

      {/* back‑to‑top */}
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="backTop"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

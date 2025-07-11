import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' }
];

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Aditya Chabba</h1>

        <nav className={open ? 'nav open' : 'nav'}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="actions">
          {/* theme toggle */}
          <button onClick={toggle} className="themeBtn" aria-label="theme">
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* mobile menu */}
          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}

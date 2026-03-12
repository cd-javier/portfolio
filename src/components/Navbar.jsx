import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styles from './Navbar.module.css';
import logo from '../assets/img/logo.svg';

function NavBarLink({ link, handleClick }) {
  return (
    <li>
      <NavHashLink
        to={'/' + link.src}
        smooth
        onClick={handleClick}
        className="link"
      >
        {link.name}
      </NavHashLink>
    </li>
  );
}

const links = [
  { name: 'Design Case Studies', src: '#design-case-studies' },
  { name: 'Dev Projects', src: '#dev-projects' },
  { name: 'About', src: '#about' },
  { name: 'Get in touch', src: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <NavLink to="/" className={styles.navLogo}>
          <img src={logo} alt="" fetchPriority="high" />
          <div className={styles.navLogoText}>Javier Quiroga</div>
        </NavLink>

        <nav>
          <div
            className={styles.navToggle}
            role="button"
            tabIndex="0"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            {links.map((link, index) => (
              <NavBarLink
                handleClick={() => setIsOpen(false)}
                link={link}
                key={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

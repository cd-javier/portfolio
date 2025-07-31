import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import logo from '../assets/img/logo.svg';

function NavBarLink({ link, isHomePage }) {
  return (
    <li>
      {isHomePage ? (
        <a href={link.src} className="link">
          {link.name}
        </a>
      ) : (
        <HashLink to={'/' + link.src} smooth className="link">
          {link.name}
        </HashLink>
      )}
    </li>
  );
}

const links = [
  { name: 'Design Case Studies', src: '#design-case-studies' },
  { name: 'Dev Projects', src: '#dev-projects' },
  { name: 'About', src: '#about' },
  { name: 'Get in touch', src: '#contact' },
];

export default function Navbar({ isHomePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        {isHomePage ? (
          <a className="nav-logo" href="#">
            <img src={logo} alt="" fetchPriority="high" />
            <div className="nav-logo-text">Javier Quiroga</div>
          </a>
        ) : (
          <a className="nav-logo" href={'/'}>
            <img src={logo} alt="" fetchPriority="high" />
            <div className="nav-logo-text">Javier Quiroga</div>
          </a>
        )}
        <nav>
          <div
            className="nav-toggle"
            role="button"
            tab-index="0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http:   //www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>menu</title>
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            {links.map((link, index) => {
              return (
                <NavBarLink link={link} isHomePage={isHomePage} key={index} />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

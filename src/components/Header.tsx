import { useState } from "react";
import "../formats/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='header'>
        <button
          type='button'
          className='nav__toggle'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls='site-nav'
          aria-label={isOpen ? "Hide navigation" : "Show navigation"}
        >
          {isOpen ? "§" : "☰"}
        </button>

        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About Me
              </a>
            </li>
            <li className='nav__item'>
              <a href='#projects' className='nav__link'>
                Projects
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

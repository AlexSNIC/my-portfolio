import React, { useState } from "react";
import { Link } from "react-router-dom";
function Nav() {
  const [ isOpen, setIsOpen ] = useState(true);

  
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <button
            onClick={() => setIsOpen((prevVal) => !prevVal)}
            className={(isOpen? "a-rotate" : "a-rotate-reverse") + " no-button nav__close-button"}
          >
            <i className="bi bi-chevron-double-left"></i>
          </button>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="/">
            <i className="bi bi-house"></i>
            <span className={(isOpen ? "" : "nav__list-text--closed") + " nav__list-text"}> Home</span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="/skills">
            <i className="bi bi-arrow-up-circle"></i>
            <span className={(isOpen ? "" : "nav__list-text--closed") + " nav__list-text"}> My Skills</span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="portfolio">
            <i className="bi bi-folder"></i>
            <span className={(isOpen ? "" : "nav__list-text--closed") + " nav__list-text"}> Portfolio</span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="about">
            <i className="bi bi-person"></i>
            <span className={(isOpen ? "" : "nav__list-text--closed") + " nav__list-text"}> About Me</span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="contacts">
            <i className="bi bi-telephone"></i>
            <span className={(isOpen ? "" : "nav__list-text--closed") + " nav__list-text"}> Contacts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

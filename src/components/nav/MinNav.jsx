import React from 'react'
import { Link } from 'react-router-dom'
function MinNav({isOpen}) {


  if(!isOpen)
    return <></>
  return (
    <nav className="nav--min">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__list-link" to="/">
            <i className="bi bi-house"></i>
            <span className="nav__list-text">Home</span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="/skills">
            <i className="bi bi-arrow-up-circle"></i>
            <span className="nav__list-text">
              My Skills
            </span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="portfolio">
            <i className="bi bi-folder"></i>
            <span className="nav__list-text">
              Portfolio
            </span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="about">
            <i className="bi bi-person"></i>
            <span className="nav__list-text">
              About Me
            </span>
          </Link>
        </li>

        <li className="nav__list-item">
          <Link className="nav__list-link" to="contacts">
            <i className="bi bi-telephone"></i>
            <span className="nav__list-text">
              Contacts
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MinNav
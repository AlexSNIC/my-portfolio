import React, { useEffect, useState } from 'react'
import MinNav from '../layout/MinNav';
import { useLocation } from 'react-router-dom';

function Header() {
  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const location = useLocation();
  const [page, setPage] = useState("Home");
  function toggleNav(){
    setIsNavOpen(prevIsNavOpen => !prevIsNavOpen);
  }
  useEffect(() => {
    let start = location.pathname.split("/")[1];
    switch(start) {
      case "":
        setPage("Home");
        break;
      case "skills":
        setPage("My Skills");
        break;
      case "portfolio":
        setPage("Portfolio");
        break;
      case "about":
        setPage("About Me");
        break;
      case "contacts":
        setPage("Contacts");
        break;
      case "events":
        setPage("Events");
        break;
      default:
        setPage("\u00A0");
    }
  }, [location.pathname]);
  return (
    <header className='header'>
      <h2>{page}</h2>
      <i className='bi bi-list header__list' onClick={toggleNav}></i>
      <MinNav setIsOpen={setIsNavOpen} isOpen={isNavOpen}/>
    </header>
  )
}

export default Header
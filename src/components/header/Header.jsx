import React, { useState } from 'react'
import MinNav from '../nav/MinNav';

function Header() {
  const [ isNavOpen, setIsNavOpen ] = useState(false);
  function toggleNav(){
    setIsNavOpen(prevIsNavOpen => !prevIsNavOpen);
  }
  return (
    <header className='header'>
      <h2>Home</h2>
      <i className='bi bi-list header__list' onClick={toggleNav}></i>
      <MinNav setIsOpen={setIsNavOpen} isOpen={isNavOpen}/>
    </header>
  )
}

export default Header
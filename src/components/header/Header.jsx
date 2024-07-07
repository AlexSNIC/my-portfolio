import React, { useState } from 'react'
import MinNav from '../nav/MinNav';

function Header() {
  const [ isNavOpen, setIsNavOpen ] = useState(false);
  return (
    <header className='header'>
      <h2>Home</h2>
      <i className='bi bi-list header__list'></i>
      <MinNav />
    </header>
  )
}

export default Header
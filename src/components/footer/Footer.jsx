import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className="footer__copyright">
        &copy; {year} Solomon Alexandru - Nicolae. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
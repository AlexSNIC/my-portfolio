import React from 'react'
import { Link } from 'react-router-dom';
function PageLink({ children, ...props }){
  return (
    <Link {...props} className={`u-underline u-no-wrap ${props.className || ''}`}>
      {children}
    </Link>
  );
}

export default PageLink
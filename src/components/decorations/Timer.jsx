import React, { useEffect, useState } from 'react'

function Timer({time, children, className, ...props}) {
  const [ display, setDisplay ] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay(true);
    }, time);

    return () => clearTimeout(timeout);
  }, [display]);
  return (
    <>
      {!display && <div {...props} className={'u-invisible ' + className}>{children}</div>}
      {display && <div className={className} {...props}>{children}</div>}
    </>
  )
}

export default Timer
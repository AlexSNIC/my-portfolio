import React from 'react'

function DecoratedImg(props) {
  return (
    <div className='image--decorated'>
      <img {...props}/>
    </div>
  )
}

export default DecoratedImg
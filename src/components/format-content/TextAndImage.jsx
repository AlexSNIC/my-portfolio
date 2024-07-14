import React from 'react'

function TextAndImage({text, image}) {
  return (
        <div className="event__text-and-image">
          <p className="event__description">{text}</p>
          <img src={image} alt="main image" className='image event__image' />
        </div>
  )
}

export default TextAndImage
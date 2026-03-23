import React from 'react'

function TextAndImage({text, image, alt = "image"}) {
  return (
        <div className="format__box format__text-and-image">
          <p className="format__text">{text}</p>
          <img src={image} alt={alt} className='format__image' />
        </div>
  )
}

export default TextAndImage
import React from 'react'

function ImageAndText({text, image, alt = "image"}) {
  return (
        <div className="format__box format__image-and-text">
          <img src={image} alt={alt} className='format__image' />
          <p className="format__text">{text}</p>
        </div>
  )
}

export default ImageAndText
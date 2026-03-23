import React from 'react'

function ImageTextImage({ text, image1, image2, alt = "image" }) {
  return (
    <div className="format__box format__image-text-image">
      <img src={image1} alt={alt} className='format__image' />
      <p className="format__text">{text}</p>
      <img src={image2} alt={alt} className='format__image' />
    </div>
  )
}

export default ImageTextImage
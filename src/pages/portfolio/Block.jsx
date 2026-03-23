import React from 'react'
import { Link } from 'react-router-dom'

function Block({img, name, finished, updated, src = false, link = false, projectId}) {
  return (
    <div className="portfolio__block">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Finished: {finished}</p>
      <p>Last Updated: {updated}</p>
      <div className="portfolio__buttons">
        {link && (
          <a href={link} target="_blank">
            <button className='button portfolio__link'>View Project</button>
          </a>
        )}
        {src && (
          <a href={src} target="_blank">
            <button className='button portfolio__link'>Source Code</button>
          </a>
        )}
        <Link to={`/portfolio/${projectId}`}>
          <button className='button no-button'>Learn More</button>
        </Link>
      </div>
    </div>
  )
}

export default Block
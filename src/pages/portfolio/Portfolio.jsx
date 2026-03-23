import React from 'react'
import Block from './Block'

import data from './projects_data.js'

function Portfolio() {
  return (
    <section className="portfolio">
 
      {Object.values(data).sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)).map((project) => (
        <Block
          key={project.id}
          projectId={project.id}
          img={project.img}
          name={project.title}
          finished={project.finished}
          updated={project.lastUpdated}
          link={project.link}
          src={project.src}
        />
      ))}
    </section>
  )
}

export default Portfolio
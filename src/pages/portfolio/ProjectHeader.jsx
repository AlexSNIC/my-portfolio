import React from 'react'

function ProjectHeader({ title, finished, lastUpdated }) {
  return (
    <>
      <h2 className="u-accent-red project__title">{title}</h2>
      <p className="u-subdued project__date">Finished: {finished}</p>
      <p className="u-subdued project__date">Last Updated: {lastUpdated}</p>
    </>
  )
}

export default ProjectHeader
import React from 'react'
import Progress from '../../components/decorations/Progress'


function SkillCard({title, rank, postRank, xp, src}) {
  return (
    <div className='card'>
      <div className='u-flex u-justify-between'>
        <div>
          <h2 className='card__title'>{title}</h2>
          <h2 className='card__subtitle'>{rank}</h2>
        </div>
        <img className='card__image' width={100} height={100} src={src} alt="" />
      </div>
      <br />
      <Progress 
        from={rank}
        to={postRank}
        value={xp}
      />
    </div>
  )
}

export default SkillCard
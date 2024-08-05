import React from 'react'
import Progress from '../../components/decorations/Progress'

function SkillCard() {
  return (
    <div className='card'>
      <div className='u-flex u-justify-between'>
        <div>
          <h2 className='card__title'>JavaScript</h2>
          <h2 className='card__subtitle'>Beginner</h2>
        </div>
        <img width={100} height={100} src="" alt="" />
      </div>
      <br />
      <Progress 
        from="Beginner"
        to="Intermediate"
        value={40}
      />
    </div>
  )
}

export default SkillCard
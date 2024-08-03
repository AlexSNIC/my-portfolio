import React from 'react'

function Progress({from, to, value}) {
  return (
    <div className="progress">
      {from && <div className="progress__from">{from}</div>}
      <progress className='progress__progress' value={value} max={100} >Progress</progress>
      <div className="progress__to">{to}</div>
    </div>
  )
}

export default Progress
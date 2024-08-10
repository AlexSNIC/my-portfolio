import React, { useEffect, useState } from 'react'

function Progress({from, to, value}){
  const [ currentValue, setCurrentValue ] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const intervalTime = 10;
    const totalSteps = duration / intervalTime;
    const startTime = Date.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      const currentTime = Date.now() - startTime;
      const progress = Math.min(currentTime / duration, 1); 
      const easedProgress = easeOut(progress);
      const newValue = easedProgress * value;

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      // Cleanup function
    };
  }, [value]);
  return (
    <div className="progress">
      {from && <div className="progress__from">{from}</div>}
      <progress className='progress__progress' value={currentValue} max={100} >Progress</progress>
      <div className="progress__to">{to}</div>
    </div>
  )
}

export default Progress
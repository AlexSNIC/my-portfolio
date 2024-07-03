import React, { useEffect, useState, forwardRef } from 'react'

const Type = forwardRef(function({text, ...props}, ref) {
  const [ currentLetters, setCurrentLetters ] = useState(0);

  function advanceText(){
    setCurrentLetters(prevCurrentLetters => prevCurrentLetters+1);
  }
  useEffect(() => {
    setTimeout(advanceText, 100);
  }, [currentLetters]);

  const currentText = (
    text.slice(0, currentLetters) + ((currentLetters%10 < 5 && currentLetters > text.length)? "" : "|")
  );
  return (
    <div {...props} ref={ref} className='type'>
      {currentText}
    </div>
  )
});

export default Type
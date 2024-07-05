import { useEffect, useState, forwardRef } from 'react'

const Type = forwardRef(function Type({text, speed = 110, ...props}, ref) {
  const [ currentLetters, setCurrentLetters ] = useState(0);
  if(text == null) text = "asd";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetters(prevCurrentLetters => prevCurrentLetters+1);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  const currentText = (
    text.slice(0, currentLetters) + ((currentLetters >= text.length)? "" : "|")
  );
  return (
    <div {...props} ref={ref} className='type'>
      {currentText}
    </div>
  )
});

export default Type
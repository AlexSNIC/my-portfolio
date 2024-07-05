import React from 'react'

function Button({type, className, children, ...props}) {
  let buttonClass = "button ";
  switch(type){
    case "fill": {
      buttonClass += "button--fill";
    } break;
    case "no-button": {
      buttonClass = "no-button";
    } break;
    default: {
      buttonClass += "button--" + type;
      console.warn(`Button class ${type} not found`);
    } 
  }
  
  return (
    <button {...props} className={className + " " + buttonClass}>{children}</button>
  )
}

export default Button
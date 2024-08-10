import React from 'react'
import SkillSticker from './SkillSticker'

import imgPostCSS from "../../assets/icons/postCSS.png";
import imgTailwind from "../../assets/icons/tailwind.png";
import imgJQuery from "../../assets/icons/jquery.svg";
import imgRedux from "../../assets/icons/redux.svg";
import imgFigma from "../../assets/icons/figma.svg";

function SkillWishlist() {
  return (
    <div className='skills__stickers'>
      <SkillSticker src={imgPostCSS} alt="PostCSS" />
      <SkillSticker src={imgTailwind} alt="Tailwind" />
      <SkillSticker src={imgJQuery} alt="JQuery" />
      <SkillSticker src={imgRedux} alt="Redux" />
      <SkillSticker src={imgFigma} alt="Figma" />
    </div>
  )
}

export default SkillWishlist
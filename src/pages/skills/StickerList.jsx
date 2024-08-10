import React from 'react'
import SkillSticker from './SkillSticker'

import imgHTML from "../../assets/icons/html5.png";
import imgStyles from "../../assets/icons/styles.png";
import imgSass from "../../assets/icons/sass.svg";
import imgPostCSS from "../../assets/icons/postCSS.png";
import imgTailwind from "../../assets/icons/tailwind.png";
import imgJS from "../../assets/icons/js.png";
import imgTS from "../../assets/icons/typescript.png";
import imgNodeJS from "../../assets/icons/nodejs.svg";
import imgJQuery from "../../assets/icons/jquery.svg";
import imgReact from "../../assets/icons/react.png";
import imgRedux from "../../assets/icons/redux.svg";
import imgFirebase from "../../assets/icons/firebase.png";
import imgVite from "../../assets/icons/vite.svg";
import imgCpp from "../../assets/icons/cpp.png";
import imgIllustrator from "../../assets/icons/illustrator.svg";
import imgFigma from "../../assets/icons/figma.svg";

function StickerList() {
  return (
    <div className='skills__stickers'>
      <SkillSticker src={imgHTML} alt="HTML5" />
      <SkillSticker src={imgStyles} alt="CSS3" />
      <SkillSticker src={imgSass} alt="Sass" />
      <SkillSticker src={imgJS} alt="JS" />
      <SkillSticker src={imgTS} alt="TS" />
      <SkillSticker src={imgNodeJS} alt="NodeJS" />
      <SkillSticker src={imgReact} alt="React" />
      <SkillSticker src={imgFirebase} alt="Firebase" />
      <SkillSticker src={imgVite} alt="Vite" />
      <SkillSticker src={imgCpp} alt="C++" />
      <SkillSticker src={imgIllustrator} alt="Adobe Illustrator" />

    </div>
  )
}

export default StickerList

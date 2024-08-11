import React from 'react'
import SkillSticker from './SkillSticker'

import imgPostCSS from "../../assets/icons/postCSS.png";
import imgTailwind from "../../assets/icons/tailwind.png";
import imgJQuery from "../../assets/icons/jquery.svg";
import imgRedux from "../../assets/icons/redux.svg";
import imgFigma from "../../assets/icons/figma.svg";
import imgExpress from "../../assets/icons/express.png";
import imgElectron from "../../assets/icons/electron.png";
import imgRegEx from "../../assets/icons/regex.png";
import imgReactNative from "../../assets/icons/react-native.png";
import imgGit from "../../assets/icons/git.png";
import imgWebAssembly from "../../assets/icons/wa.png";
import imgPHP from "../../assets/icons/php.png";
import imgWordPress from "../../assets/icons/wp.png";
import imgMySql from "../../assets/icons/mysql.png";

function SkillWishlist() {
  return (
    <div className='skills__stickers'>
      <SkillSticker src={imgPostCSS} alt="PostCSS" />
      <SkillSticker src={imgTailwind} alt="Tailwind" />
      <SkillSticker src={imgJQuery} alt="JQuery" />
      <SkillSticker src={imgRedux} alt="Redux" />
      <SkillSticker src={imgFigma} alt="Figma" />
      <SkillSticker src={imgExpress} alt="ExpressJS" />
      <SkillSticker src={imgElectron} alt="Electron" />
      <SkillSticker src={imgRegEx} alt="RegEx" />
      <SkillSticker src={imgReactNative} alt="React Native" />
      <SkillSticker src={imgGit} alt="Git" />
      <SkillSticker src={imgWebAssembly} alt="Web Assembly" />
      <SkillSticker src={imgPHP} alt="PHP" />
      <SkillSticker src={imgWordPress} alt="WordPress" />
      <SkillSticker src={imgMySql} alt="MySql" />
    </div>
  )
}

export default SkillWishlist
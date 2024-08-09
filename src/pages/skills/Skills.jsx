import React from 'react'
import SkillCard from './SkillCard'

import imgJS from "../../assets/js.png";
import imgStyles from "../../assets/styles.png"
import imgUX_UI from "../../assets/ux.png"
import imgReact from "../../assets/react.png"
import imgCpp from "../../assets/cpp.png"
import imgFirebase from "../../assets/firebase.png"

function Skills() {
  return (
  <div className="skills">
    <div className='skills__wrapper'>
      <SkillCard
        title="JS & TS"
        rank="Mid-level"
        postRank="Senior"
        xp={36}
        src={imgJS}
        list={[
          "250+ hours",
          "*JQuery",
          ]}
        ></SkillCard>
      <SkillCard
        title="Styles"
        rank="Mid-level"
        postRank="Senior"
        xp={5}
        src={imgStyles}
        list={[
          "160+ hours",
          "CSS & SASS",
          "*PostCSS",
          "*Tailwind",
        ]}
      ></SkillCard>
      <SkillCard
        title="UX / UI"
        rank="Junior"
        postRank="Mid-level"
        xp={30}
        src={imgUX_UI}
        list={[
          "*Figma"
        ]}
      ></SkillCard>
      <SkillCard
        title="React"
        rank="Junior"
        postRank="Mid-level"
        xp={30}
        src={imgReact}
        list={[
          "50+ hours",
          "JSX & *TSX"
        ]}
      ></SkillCard>
      <SkillCard
        title="Firebase"
        rank="Trainee"
        postRank="Junior"
        xp={50}
        src={imgFirebase}
        list={[
          "Firestore",
          "Realtime Database",
          "Authentication"
        ]}
      ></SkillCard>
      <SkillCard
        title="C++"
        rank="Junior"
        postRank="Mid-level"
        xp={60}
        src={imgCpp}
        list={[
          "150+ hours",
          "Algorithms & Data Structures"
        ]}
      ></SkillCard>
    </div>
  </div>

  )
}

export default Skills

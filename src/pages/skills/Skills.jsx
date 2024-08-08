import React from 'react'
import SkillCard from './SkillCard'

import imgJS from "../../assets/js.png";
import imgSASS from "../../assets/sass.png"
import imgUX_UI from "../../assets/u.png"
import imgReact from "../../assets/react.png"

function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <SkillCard
        title="Javascript"
        rank="Mid-level"
        postRank="Senior"
        xp={36}
        src={imgJS}
      ></SkillCard>
      <SkillCard
        title="CSS & SASS"
        rank="Mid-level"
        postRank="Senior"
        xp={45}
        src={imgSASS}
      ></SkillCard>
      <SkillCard
        title="UX / UI"
        rank="Mid-level"
        postRank="Senior"
        xp={30}
        src={imgUX_UI}
      ></SkillCard>
      <SkillCard
        title="React"
        rank="Junior"
        postRank="Mid-level"
        xp={30}
        src={imgReact}
      ></SkillCard>
    </div>

  )
}

export default Skills

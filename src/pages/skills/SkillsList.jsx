import SkillCard from "./SkillCard";

import imgJS from "../../assets/icons/js.png";
import imgStyles from "../../assets/icons/styles.png";
import imgUX_UI from "../../assets/icons/ux.png";
import imgReact from "../../assets/icons/react.png";
import imgCpp from "../../assets/icons/cpp.png";
import imgFirebase from "../../assets/icons/firebase.png";

function SkillsList() {
  return (
    <div className="skills__wrapper">
      <SkillCard
        title="JavaScript"
        rank="Mid-level"
        postRank="Senior"
        xp={36}
        src={imgJS}
        list={["450+ hours", "*JQuery", "*TypeScript"]}
      ></SkillCard>
      <SkillCard
        title="Styling"
        rank="Mid-level"
        postRank="Senior"
        xp={5}
        src={imgStyles}
        list={["300+ hours", "CSS & SASS", "*PostCSS", "*Tailwind"]}
      ></SkillCard>
      <SkillCard
        title="UX / UI"
        rank="Trainee"
        postRank="Junior"
        xp={95}
        src={imgUX_UI}
        list={["Adobe Illustrator", "*Figma"]}
      ></SkillCard>
      <SkillCard
        title="React"
        rank="Junior"
        postRank="Mid-level"
        xp={30}
        src={imgReact}
        list={["100+ hours", "JSX & *TSX"]}
      ></SkillCard>
      <SkillCard
        title="Backend Engineering"
        rank="Trainee"
        postRank="Junior"
        xp={50}
        src={imgFirebase}
        list={["NodeJS", "ExpressJS","Firebase"]}
      ></SkillCard>
      <SkillCard
        title="C++"
        rank="Junior"
        postRank="Mid-level"
        xp={80}
        src={imgCpp}
        list={["250+ hours", "Algorithms & Data Structures"]}
      ></SkillCard>
    </div>
  );
}

export default SkillsList;

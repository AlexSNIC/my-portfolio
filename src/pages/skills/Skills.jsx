import React from "react";
import SkillsList from "./SkillsList";
import StickerList from "./StickerList";
import SkillWishlist from "./SkillWishlist";

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">Skill Overview</h2>
      <SkillsList />
      <h2 className="skills__title">Technical Skills</h2>
      <StickerList />
      <h2 className="skills__title">Skill Wishlist</h2>
      <SkillWishlist />
    </div>
  );
}

export default Skills;

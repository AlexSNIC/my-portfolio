import React from "react";

function SkillSticker({src, alt}) {
  return (
    <div className="sticker">
      <div className="sticker__background"></div>
      <img className="sticker__image" src={src} alt={alt} />
      <div className="sticker__text-wrapper">
        <p>{alt}</p>
      </div>
    </div>
  );
}

export default SkillSticker;

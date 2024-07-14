import React from "react";
import TextAndImage from "../../../components/format-content/TextAndImage";
import mainImage from "../../../assets/portrait.jpg";
function Event() {
  return (
    <div className="event">
      <div className="event__header">
          <h2 className="event__title">Media Camp 2024</h2>
          <p className="event__timeline">7 July - 11 July, 2024</p>
      </div>
      <TextAndImage
        text={`Hello! This summer I took part in a camp, where over 250 participants applied and only 25 got accepted. This camp was a fun experience speaking of both learning and relaxing. Here I got many opportunities that not many teenagers have. To begin, I'd like to share all the different things this camp taught me. First and for most, I learned about media content, about how to make media content entertaining, how to make it stand out, how to make it feel natural and how to make quality content. I learned different techniques for lightning effects, about the rule of thirds, blur and many other things. Next up, I learned how to differentiate between what's fake and what's real. Many times, the media has driven people towards the wrong path, with fake news and propaganda. I can assure you, that wont happen to me. And finally, I'd like to conclude this post by saying that I had a lot of fun, and met a lot of people.`}
        image={mainImage}
      />
      
    </div>
  );
}

export default Event;

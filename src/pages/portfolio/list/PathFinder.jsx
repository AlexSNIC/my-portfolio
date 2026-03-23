import React from 'react'

import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import ProjectHeader from '../ProjectHeader';

import PathFinderIMG from '../../../assets/portfolio/pathfinder/pathfinder.png';
import Trophy from '../../../assets/portfolio/pathfinder/trophy.jpg';
import data from "../projects_data.js";

function PathFinder() {
  return (
    <section className='project'>
      <ProjectHeader title={data.pathfinder.title} finished={data.pathfinder.finished} lastUpdated={data.pathfinder.lastUpdated} />
      <TextAndImage 
      text={`
        PathFinder is a game that I created to explore how does a compiler work under the hood.
        The idea of the game is simple: you have to write a program to guide a character through the levels.
        There are 3 basic commands: move, jump, attack and 2 control flow statements: if and while.
        The game has 10 levels, each with a different theme and different mechanics, and the difficulty increases as you progress through the levels.
        The game was made with JavaScript, and the levels were designed with Tiled, a level editor.
        The website uses React.
      `}
      image={PathFinderIMG}
      />
      <ImageAndText 
      text={<>
          Once again, this game was made for a competition, more exactly the Robocode Hackathon 2024, where I got 2nd place.
          Even so, this project was a rush job, so it's not my best work. The design is lacking to say the least. 
          On a positive note, unlike last year's hackathon, I used advanced programming techniques, such as OOP, actual algorithms and less spaghetti code.
          Find the source code on <a href="https://github.com/AlexSNIC/Hackathon-RoboCode" className='u-underline' target="_blank">GitHub</a>.
        </>}
      image={Trophy}
      centerText={true}
      />
    </section>
  )
}

export default PathFinder
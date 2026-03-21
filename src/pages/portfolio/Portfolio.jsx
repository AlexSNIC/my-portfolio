import React from 'react'
import Block from './Block'
import TwiChess from "../../assets/portfolio/twichess.png";
import Pathfinder from "../../assets/portfolio/pathfinder.png";
function Portfolio() {
  return (
    <section className="portfolio">
      <Block projectId="twichess" img={TwiChess} name="TwiChess" finished="May 2023" updated="May 2023" link="https://alexsnic.github.io/twichess/home.html"/>
      <Block projectId="pathfinder" img={Pathfinder} name="PathFinder" finished="March 2024" updated="March 2024"/>
    </section>
  )
}

export default Portfolio
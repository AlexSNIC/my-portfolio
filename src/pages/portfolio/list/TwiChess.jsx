import React from 'react'
import TextAndImage from '../../../components/format-content/TextAndImage';
import ImageAndText from '../../../components/format-content/ImageAndText';
import TwiChessIMG from '../../../assets/portfolio/twichess/twichess.png'
import TwiChessIMG2 from '../../../assets/portfolio/twichess/1774082960886.jpg'
import ProjectHeader from '../ProjectHeader';
const TwiChess = () => {
  return (
    <section className='project'>
      <ProjectHeader title="TwiChess" finished="May 2023" lastUpdated="May 2023" />
      <TextAndImage 
      text={`
        TwiChess is a fully functional 2p chess game, played locally, similar to chess.com, with some personalized features.
        For example, you can create your own chess board by customizing the position of pieces with the chess editor.
        The game automatically detects check and checkmate, forces players to play legal moves and has a functional timer.
        A weak point of this project is the fact that at the time I wasn't aware of OOP or any advanced programming concepts, so the code is not as clean or safe as I would like it to be, but it was a great learning experience.
      `}
      image={TwiChessIMG}
      />
      <ImageAndText 
      text={<>
        TwiChess is a game that I developed for the 2023 Robocode competition, to which I won third place.
        To find out more about the competition and my experience, check out the Events section of this portfolio.
        To test out the game, <a className='u-underline' href="https://alexsnic.github.io/twichess/home.html" target="_blank">click here</a>, or find the source code on <a className='u-underline' target='_blank' href="https://github.com/AlexSNIC/twichess">GitHub</a>.
        </>}
      image={TwiChessIMG2}
      />
    </section>
  )
}

export default TwiChess
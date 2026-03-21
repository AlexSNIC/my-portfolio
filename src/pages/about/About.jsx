import React from 'react'

function About() {
  return (
    <section className='about'>
      <div className='about__hero'>
        <h1 className='u-accent-red'>Solomon Alexandru-Nicolae</h1>
        <h3>Automatics/Software Engineer</h3>
        <br />
        <p>
          Hey! I'm Alex, a passionate student of TUCN, studying Automatics and CS. I am currently settled in Cluj-Napoca. I enjoy participatig in hackthons and I am open to colaborations. 
        </p>
      </div>
      <div className="about__lore">
        <div className="about__block">
          <h3>My Hobbies</h3>
          <p><span className="u-tab"></span>The first of my many passions is programming. I started learning to code from a young age, and currently hold over 4 years worth of experience in web development and algorithmic problem-solving projects. Throughout my life, I've participated in many hackathons and CS competitions, out of which many have I won.</p>
          <p>Besides programming, I have a keen interest in technology as a whole and have been curiously observing it's evolution.</p>
          <p><span className='u-tab'></span>Another one of my passions is music. I have been playing the piano for over 3 years, and I am currently learning to play the guitar. I also enjoy listening to music, and I have a wide range of musical tastes. I've also dipped a bit in music production.</p>
          <p>Last but not least, I enjoy traveling and communicating to new people. From here has my passion for foreign languages started. I currently speak over 5 languages at various levels. These include English, French, Romanian, Russian and German.</p>
        </div>
        <div className="about__block">
          <h3>My Skills</h3>
          <p><span className="u-tab"></span>I'm a mostly self-taught web developer with experience in technologies like JS, React, and NodeJS. I've also evolved my algorithmic problem-solving skills thanks to the preparation for the many competitions I've participated in.</p>
          <p>As an automatics student, I've also learned a lot about control systems, electrical circuits, and embedded systems.</p>
          <p>Besides the programming languages previously mentioned, I've also familiarized myself with other languages, like C++, C#, Assembly and Python. To add to that, I have a good understanding of higher programming concepts, like OOP, data structures, algorithms and memory management.</p>
        </div>
        <div className="about__block">
          <h3>What sets me apart from others?</h3>
          <p><span className="u-tab"></span>One of my strengths is that I am a quick learner. I can get a good grasp of new concept fairly easy and without much difficulty.</p>
          <p>Another strength of mine is my adaptability stemmed from the many camps and training programs I've attended.</p>
          <p>Finally, what sets me apart the most is my ambition and drive to evolve. I've always strived to be in the top and to acquire as much experience as possible.</p>
        </div>
      </div>
      <span className="about__updated">Last updated: 20.03.2026</span>
    </section>
  )
}

export default About
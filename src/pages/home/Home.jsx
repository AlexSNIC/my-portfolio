import React from 'react'

import Button from '../../components/button/Button';
import Type from '../../components/decorations/Type';
import portrait from  "../../assets/portrait-min.jpg";
import Timer from '../../components/decorations/Timer';
import PageLink from '../../components/page-link/PageLink';

function Home() {
  return (
    <>
      <section className='home'>
        <div className="home__info">
          <h1 className='home__title'>
            I'm Solomon <span className='u-no-wrap u-accent-red'>Alexandru - Nicolae</span>
          </h1>
          <Timer time={550}>
            <h2 className='u-fit u-accent-blue home__subtitle'>
              <Type speed={50} text="Web Developer"></Type>
            </h2>
          </Timer>
          <Timer time={900}>
            <p className='u-subdued home__text'>
              Hello! This webpage will give you a better understanding of my skills, my personality and my records. For information about my proficiency, you can consult the <PageLink to="skills">My skills</PageLink> tab. To view my projects, look at <PageLink to="portfolio">My portfolio</PageLink>. In the <PageLink to="about">About me</PageLink> section, you can find out about my personal life: my hobbies, my studies, etc. View <PageLink to="contacts">Contacts</PageLink> if you want a quick contact. I am open for collabs.
            </p>
          </Timer>
          <Timer time={1550}>
            <Button className="home__button u-my-s" type="fill"> My Events </Button>
          </Timer>
        </div>
        <Timer time={1350}>
          <div className='image--corner'>
            <img loading='lazy' className="home__image image" src={portrait} alt="My portrait" />
          </div>
        </Timer>
      </section>
    </>
  )
}

export default Home
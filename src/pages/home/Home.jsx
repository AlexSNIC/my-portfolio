import React from 'react'
import Type from '../../components/decorations/Type';
import { Link } from 'react-router-dom';
import DecoratedImg from '../../components/decorations/DecoratedImg';
import portrait from  "../../assets/portrait.jpg";

function PageLink({ children, ...props }){
  return (
    <Link {...props} className={`u-accent-red u-underline u-no-wrap ${props.className || ''}`}>
      {children}
    </Link>
  );
}
function Home() {
  return (
    <>
      <section className='home'>
        <div className="home__info">
          <h1 className='home__title'>
            Hello! Im <span className='u-accent-red'>Alexandru</span>
          </h1>
          <h2 className='u-fit u-accent-blue home__subtitle'>
            <Type text="Web Developer"></Type>
          </h2>
          <p className='u-subdued home__text'>
            Hello! This webpage will give you a better understanding of my skills, my personality and my records. For information about my proficiency, you can consult the <PageLink to="skills">My skills</PageLink> tab. To view my projects, look at <PageLink to="portfolio">My portfolio</PageLink>. In the <PageLink to="about">About me</PageLink> section, you can find out about my personal life: my hobbies, my studies, etc. View <PageLink to="contacts">Contacts</PageLink> if you want a quick contact. I am open for collabs.
          </p>
        </div>
        <DecoratedImg className="home__image image" src={portrait} alt="My portrait" />
      </section>
    </>
  )
}

export default Home
import React from 'react'
import './About.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa';
import {AiOutlineAppstore} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <AiOutlineAppstore className="about__icon"/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>

          </div>
          <p>Passionné par l'informatique et les nouvelles technologies</p>

          <a href="#contact" className="btn btn-primary">Let' s Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
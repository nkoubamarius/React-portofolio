import React from 'react'
import './Portofolio.css'
import AVICYS from "../../assets/avicys.png"
import AFRICOMPETENCE from "../../assets/africompetence.PNG"
import BESTGIT from "../../assets/github.PNG"
import PSA from "../../assets/psa.png"
import AKWA from "../../assets/akwa.PNG"
import BioFarms from "../../assets/228biofarms.PNG"
import SPOTIFY from "../../assets/spotify.png"
import Airbnb from "../../assets/airbnb.PNG"
import Twitter from "../../assets/twitter.png"
import {AiOutlineGithub} from 'react-icons/ai'
import {GrView} from 'react-icons/gr'

const data =[
  {
    id:1,
    image: AFRICOMPETENCE,
    title: 'AFricompetence',
    github:'',
    demo: 'https://africompetence.com/'
  },
  {
    id:7,
    image: SPOTIFY,
    title: 'SPOTIFY Clone with ReactJs',
    github:'https://github.com/nkoubamarius/spotify-clone',
    demo: 'https://spotify-clone-react.netlify.app'
  },
  {
    id:3,
    image: BESTGIT,
    title: 'Most starred Github in the last 30 days',
    github:'https://github.com/nkoubamarius/frontend-coding-challenge-NKOUBA-Marius',
    demo: 'https://frontend-coding-challenge-nkouba.netlify.app/'
  },
  {
    id:5,
    image: AKWA,
    title: 'AKWA & Partners',
    github:'',
    demo: 'https://www.akwaandpartners.com/'
  },
  {
    id:8,
    image: Airbnb,
    title: 'AirBnB CLone with reactJs',
    github:'https://github.com/nkoubamarius/airbnb-clone',
    demo: 'https://reactjs-airbnb-clone.netlify.app/'
  },
  {
    id:9,
    image: Twitter,
    title: 'Twitter Clone with ReactJS',
    github:'https://github.com/nkoubamarius/react-twitter-clone',
    demo: 'https://twitter-clone-dcffc.web.app/'
  },
  {
    id:6,
    image: BioFarms,
    title: '228 Bio Farms',
    github:'',
    demo: 'https://228biofarms.netlify.app/'
  },
  {
    id:2,
    image: AVICYS,
    title: 'AVICYS Chronometer',
    github:'',
    demo: ''
  },
  {
    id:4,
    image: PSA,
    title: 'POC PSA PRODUCTION',
    github:'https://github.com/nkoubamarius/5MGMT_POC_frontent_Psa_Production',
    demo: ''
  },
  
]

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({id, image, title, github, demo})=> {
          return(
            <article key={id} className="portofolio__item">
              <img className="portofolio__item-image" src={image} alt='avicys'/>
              <h3>{title}</h3>
              <div className="portofolio__item-cfa">
                {github && <a href={github} className="btn_small" target='_blank' rel="noreferrer"><AiOutlineGithub/></a>}
                
                {demo && <a href={demo} className="btn_small btn-primary" target='_blank' rel="noreferrer"><GrView/></a>}
              </div>
            </article>
          )
        })}
        

      </div>

    </section>
  )
}

export default Portofolio
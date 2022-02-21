import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>N'KOUBA Likpalmo Marius</h1>
        <h5 className="text-light">Big Data Engineer & FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div >
          <img  className="me" src={ME} alt="my_picture" />
        </div>

        <a href="#content" className="scroll__down">Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Marius N'KOUBA</a>

      <ul className="permalinks">
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" ><FiFacebook/></a>
        <a href="https://gitthub.com" ><BsGithub/></a>
        <a href="https://linkedin.com" ><AiOutlineLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Marius Portofolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
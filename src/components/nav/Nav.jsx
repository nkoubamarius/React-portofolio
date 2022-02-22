/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Nav.css"
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {FiMessageSquare} from "react-icons/fi";
import {MdWorkOutline} from 'react-icons/md';
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#'? 'active': ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'? 'active': ''}><MdWorkOutline/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? 'active': ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><FiMessageSquare/></a>
    </nav>
  )
}

export default Nav
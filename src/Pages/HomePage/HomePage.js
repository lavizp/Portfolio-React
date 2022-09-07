import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './homepage.css'
import Laviz from '../../assets/Laviz.png'
import {FaGithub,FaLinkedin,FaTwitterSquare} from "react-icons/fa";
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className='home-intro-container'>
        <div className='home-intro-left'>
          <div className='intro-text'>
            <h1>Hi! I am</h1>
            <h1>Laviz Pandey</h1>
            <h3>Professional Software Developer  with<br/>over <mark className='gradient'>2 years</mark> of development experience.</h3>
            <div className='intro-buttons'>
              <button className='orange'>Projects</button>
              <button className='grey'>Contact</button>

            </div>

          </div>
          <div className='intro-connect'>
            <h1>Connect With Me</h1>
            <div className='connect-icons'>
              <a href="https://github.com/lavizp" target="blank"><FaGithub size={100} color="white"/></a>
              <a href="https://github.com/lavizp" target="blank"><FaLinkedin size={100} color="white"/></a>
              <a href="https://github.com/lavizp" target="blank"><FaTwitterSquare size={100} color="white"/></a>
              <a href="https://github.com/lavizp" target="blank"><FaGithub size={100} color="white"/></a>


            </div>

          </div>
        </div>
        <div className='home-intro-right'></div>
          <img src={Laviz}/>
      </div>
    </div>
  )
}

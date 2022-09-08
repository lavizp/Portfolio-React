import React from 'react'
import {FaGithub,FaLinkedin,FaTwitterSquare} from 'react-icons/fa';

import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/ProjectsHome/Projects';
import './homepage.css'
import Laviz from '../../assets/Laviz.png'
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className='home-intro-container'>
        <div className='home-intro-left'>
          <div className="intro-text">
            <h1>HI! I am</h1>
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
              <a href="https://www.linkedin.com/in/laviz-pandey-4b8b55208/" target="blank"><FaLinkedin size={100} color="white"/></a>
              <a href="https://twitter.com/lavizpandey" target="blank"><FaTwitterSquare size={100} color="white"/></a>


            </div>

          </div>
        </div>
        <div className='home-intro-right'>
          <img src={Laviz} alt='laviz dai'/>
        </div>
      </div>
      <div className='home-projects-container'>
        <h1>Projects</h1>
        <div className='projects-list'>
          <Projects/>
        </div>
      </div>
    </div>
  )
}

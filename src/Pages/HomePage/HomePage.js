import React from 'react'
import {FaGithub,FaLinkedin,FaTwitterSquare,FaEnvelope} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Projects from '../../components/ProjectsHome/Projects';
import Footer from '../../components/Footer/Footer';

import { projectsData } from '../../Data/ProjetcsData';

import './homepage.css'
import Laviz from '../../assets/Laviz.png'
export default function HomePage() {
  const navigate = useNavigate();
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
              <button className='orange' id="growOnHover" onClick={()=> navigate("/projects")}>Projects</button>
              <button className='grey' id="growOnHover" onClick={()=> navigate("/about")}>About</button>

            </div>

          </div>
          <div className='intro-connect'>
            <h1>Connect With Me</h1>
            <div className='connect-icons'>
              <a href="https://github.com/lavizp" target="blank"><FaGithub size={100} color="white" id="growOnHover"/></a>
              <a href="https://www.linkedin.com/in/laviz-pandey-4b8b55208/" target="blank"><FaLinkedin size={100} color="white"id="growOnHover"/></a>
              <a href="https://twitter.com/lavizpandey" target="blank"><FaTwitterSquare size={100} color="white"id="growOnHover"/></a>
              <a href="mailto: pandeylaviz@gmail.com" target="blank"><FaEnvelope size={100} color="white"id="growOnHover"/></a>


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
          {projectsData.map((proj) => <Projects title={proj.title} description={proj.shortdescription} image = {proj.image} id={proj.id} key={proj.id}/>)}

        </div>
        <a href='/projects' className='view-more'><h3>View More</h3></a>

      </div>
      <Footer/>
    </div>
  )
}

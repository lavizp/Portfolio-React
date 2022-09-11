import React from 'react'
import Projects from '../../components/ProjectsHome/Projects'
import './projectpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { projectsData } from '../../Data/ProjetcsData';


export default function ProjectsPage() {
  return (
    <div>
      <Navbar/>
      <div className='projects-projects-container'>
      <h1 className='main-title-projects'>Projects</h1>
      <div className='dark-background'>
        <div className='projects-list'>
        {projectsData.map((proj) => <Projects title={proj.title} description={proj.shortdescription} image = {proj.image}/>)}
        </div>
      </div>
      </div>

      <Footer/>

    </div>
  )
}

import React from 'react'
import Projects from '../../components/ProjectsHome/Projects'
import './projectpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function ProjectsPage() {
  return (
    <div>
      <Navbar/>
      <h1 className='main-title-projects'>Projects</h1>
      <div className='dark-background'>
        <div className='projects-list'>
          <Projects/>
          <Projects/>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

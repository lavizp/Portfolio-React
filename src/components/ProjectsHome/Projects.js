import React from 'react'
import './projects.css'
import Laviz from '../../assets/Laviz.png'

export default function Projects() {
  return (
    <div className='home-project-container'>
        <div className='projects-intro'>
            <h1 id="moveOnHover">Title ho</h1>
            <h2 id="moveOnHover">E-Commerse App</h2>


        </div>
            <img src={Laviz} className='image-hover-projects'/>
          <a href='/projects/id'>View Project</a>

    </div>
  )
}


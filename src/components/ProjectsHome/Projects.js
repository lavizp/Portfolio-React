import React from 'react'
import './projects.css'

export default function Projects({title, description, image, id}) {
  return (
    <div className='home-project-container'>
        <div className='projects-intro'>
            <h1 id="moveOnHover" className='project-title'>{title}</h1>
            <h2 id="moveOnHover">{description}</h2>


        </div>
            <img src={image} className='image-hover-projects' alt='ProjectImage'/>
          <a href='/projects/id'>View Project</a>

    </div>
  )
}


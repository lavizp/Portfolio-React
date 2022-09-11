import React from 'react'
import './projects.css'

export default function Projects({title, description, image, id}) {
  return (
    <div className='home-project-container'>
        <div className='projects-intro'>
            <h1 id="moveOnHover" className='project-title'>{title}</h1>
            <h2 id="moveOnHover">{description}</h2>


        </div>
        <div className='view-container'>

          <div className='image-hover-projects'>
            <img src={image}  alt='ProjectImage'/>
          </div>
          <a href={/project/+ id} className='view-projects'>View Project</a>

        </div>


    </div>
  )
}


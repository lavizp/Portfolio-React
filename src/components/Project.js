import React from 'react'
import '../styles/projects.css'

export default function Project({title, description, image}) {
  return (
    <div className='project-single-container'>
        {title}
        {description}
    </div>
  )
}

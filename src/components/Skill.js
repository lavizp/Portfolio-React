import React from 'react'
import '../styles/skills.css'

export default function Skill({title, description, logo}) {
  return (
    <div className='skill-container'>
        <div className='skill-logo'>
          {logo}
        </div>
        <div className='skill-deatils'>
          <h1>{title}</h1>
          {description}
        </div>
    </div>
  )
}

import React from 'react'
import Project from './Project'

export default function Projects({projectLists}) {
    const projects = projectLists.map((project) => <Project title={project.title} description={project.description} image={project.image} link={project.link} codeLink={project.codeLink}/>)
  return (
    <div className='projects-page'>
        <h1>Projects:</h1>
        {projects}
    </div>
  )
}

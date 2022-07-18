import React from 'react'
import Project from './Project'

export default function Projects({projectLists}) {
    const projects = projectLists.map((project) => <Project title={project.title} description={project.description} image={project.image}/>)
  return (
    <div>
        <h1>Projects:</h1>
        {projects}
    </div>
  )
}

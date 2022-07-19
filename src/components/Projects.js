import React from 'react'
import Project from './Project'
import { IconContext } from 'react-icons/lib';


export default function Projects({projectLists}) {
    const projects = projectLists.map((project) => <Project key={project.title} title={project.title} description={project.description} image={project.image} link={project.link} codeLink={project.codeLink}/>)
  return (
    <IconContext.Provider value ={{color: "red", size: "20em"}}>

    <div className='projects-page'>
        <h1>Projects:</h1>
        {projects}
    </div>
    </IconContext.Provider>

  )
}

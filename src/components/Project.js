import React from 'react'
import '../styles/projects.css'

export default function Project({title, description, image,link, codeLink}) {
    const GOTOSite = ()=>{
        console.log({title});
    }
  return (

    
    <div className='project-single-container'>
        <div className='project-image'>
            <a href={link}>
                <img src={image}></img>  
            </a>
        </div>
        <div className='project-info'>
            <h1>{title}</h1>
            <p>{description}</p>
            <button className='codeLink' onClick={GOTOSite}>Details</button>
        </div>
        
    </div>
  )
}

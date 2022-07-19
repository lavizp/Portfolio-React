import React from 'react'
import '../styles/projects.css'
import { Link } from "react-router-dom";


export default function Project({title, description, image,link, codeLink}) {
    const GOTOSite = ()=>{
        <Link to ={{pathname: "https://stackoverflow.com/questions/42914666/react-router-external-link"}} target="_blank"/>
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
            <a href={codeLink} target='blank' className='codeLink'><h1>Click to See Details</h1></a>
        </div>
        
    </div>
  )
}

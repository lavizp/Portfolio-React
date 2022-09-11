import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './singleproject.css'
import {projectsData} from '../../Data/ProjetcsData'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function SingleProjectPage() {
    const {id} = useParams();
    const[project,setProject] = useState();

    useEffect(()=>{
      const tempData = projectsData.filter((data)=> data.id == id)
      setProject(tempData[0]);
    },[])
    
  return (
    <div>
      <Navbar/>
      <h1 className='main-title-projects'>{project?.title}</h1>
      <div className='dark-background'>
          <img src={project?.image} alt='WebsiteImage' className='full-page-image'/>
          <div className='singleproj-data-container'>
            <div className='technical-details'>
              <h1>Technical Details</h1>
              <p>
              Tech Used: React, SCSS,Firebase<br/>
              </p>
              <p>
              Platform: Web<br/>
              </p>
              <p>
              Catogery: E-Commerce Application
              </p>
              <div className='tech-details-buttons'>
                <button id = 'growOnHover' className='tech-button blackbutton'>Code</button>
                <button id = 'growOnHover'className='tech-button orange'>Launch</button>

              </div>
              </div>
            <div className='line'></div>
            <div className='development-story'>
              <h1>Development Story</h1>
              <p>
                {project?.description}
              </p>
            </div>
          </div>
      </div>
      <Footer/>

    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();
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
              Tech Used: {project?.techused}<br/>
              </p>
              <p>
              Platform: {project?.platform}<br/>
              </p>
              <p>
              Catogery: {project?.catogery}
              </p>
              <div className='tech-details-buttons'>
                <CodeButton project={project?.github}/>
                <LaunchButton project={project?.link}/>
                

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

function CodeButton({project})
{
  if(project===""){
    return;
  }
  return(
    <button id = 'growOnHover' className='tech-button blackbutton' onClick={()=>window.open(project?.github,'_blank')}>Code</button>
  )
}
function LaunchButton({project})
{
  if(project===""){
    return;
  }
  return(
    <button id = 'growOnHover'className='tech-button orange' onClick={()=>window.open(project?.link,'_blank')}>Launch</button>

  )
}

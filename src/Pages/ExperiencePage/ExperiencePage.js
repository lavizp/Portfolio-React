import React from 'react'
import './experience.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './experience.css'
import { experienceData } from '../../Data/ExperiencesData'
import {FaAngleDoubleDown} from 'react-icons/fa'

export default function ExperiencePage() {
  return (
    <div>
        <Navbar/>
        <div className='title-container'>
          <h1 className='main-title-projects'>Experiences</h1>
          <FaAngleDoubleDown color="black" className='arrow' size={100}/>

        </div>

        <div className='experiences-bg-container'>
            {experienceData.map((exp) => 
              <ExperienceBox key={exp.id} company={exp.company} position={exp.position} date={exp.date} roles={exp.roles}/>
            )}

        </div>
        <Footer/>
    </div>
  )
}


function ExperienceBox({company,date,position,roles}){
  return(


  <div className='experience-container'>
  <h5>{date}</h5>
  <div className='experience-details'>
      <h1>{company}</h1>
      <h3>{position}</h3>
      <ul>
        {roles.map((role)=>{
          return(
            <li>{role}</li>
          )
        })}
        {/* <li>Developed a mobile based casino style video game from scratch using the Unity Game Engiene</li>
        <li>Implimented a CRUD application to fetch and push to a Restful API.</li>
        <li>Learned about writting industry standard code which is redable and scalable.</li>
        <li>Worked with C# and Unity</li> */}

      </ul>
  </div>
  </div>
  )
}
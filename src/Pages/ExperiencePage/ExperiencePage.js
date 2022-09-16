import React from 'react'
import './experience.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './experience.css'
import { experienceData } from '../../Data/ExperiencesData'
import { achievementData } from '../../Data/Achievements'

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
              <ExperienceBox key={exp.id} company={exp.company} position={exp.position} date={exp.date} roles={exp.roles} />
            )}

        </div>
        <div className='other-works-container'>
            <h1 className="other-achievement">Other Achievements</h1>
            {achievementData.map((ach) => 
            <AchievementBox key = {ach.id} title={ach.title} date={ach.date} position={ach.position} link={ach.li} roles={ach.roles}/>)}
            
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
            <li key={role}>{role}</li>
          )
        })}

      </ul>
  </div>
  </div>
  )
}
function AchievementBox({title,date,position,link,roles}){
  return(


  <div className='experience-container'>
  <h5>{date}</h5>
  <div className='experience-details'>
      <a href={link}><h1>{title}</h1></a>
      <h3>{position}</h3>
      <ul>
        {roles.map((role)=>{
          return(
            <li key={role}>{role}</li>
          )
        })}

      </ul>
  </div>
  </div>
  )
}
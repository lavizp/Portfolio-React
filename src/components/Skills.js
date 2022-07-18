import React from 'react'
import Skill from './Skill'
import '../styles/skills.css'
import { IconContext } from 'react-icons/lib';


export default function Skills({skillsList}) {
  const abc = skillsList.map((skill) => <Skill title={skill.title} description={skill.description} logo={skill.logo}/>)
  return (
    <IconContext.Provider value ={{color: "white", size: "10em"}}>
    <div className ='skills-container' id="skills-container">
    <h1>Skills:</h1>
        {/* <Skill title={'Unity'} description={'I have 2+ years making games in the Unity Engiene'} logo={<FaUnity/>}/> */}
        {abc}
    </div>
    </IconContext.Provider>
  )
}

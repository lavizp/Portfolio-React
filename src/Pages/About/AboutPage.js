import React from 'react'
import './aboutpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {FaHtml5,FaCss3Alt,FaJsSquare,FaUnity,FaReact,FaFigma} from 'react-icons/fa';
import{TbCSharp} from 'react-icons/tb'
import { IconContext } from 'react-icons';


export default function AboutPage() {

  return (
    <>
        <Navbar/>

        <div className='about-intro'>
            <div className='about-intro-description'>
                <h1>
                I am a self-tought software developer with experties in<br/> building scalable web applications.
                </h1>
            </div>
            <div className='about-intro-picture'>
                {/* <img src={Laviz} alt="Dajju"/> */}
            </div>
        </div>
        <div className='about-quote'>
            <div className='quote-container'>
                <p>Random Quote:</p>
                <h2 style={{fontSize: 30}}>"Quote ho Dajju"</h2>
            </div>
            <div className='additional-description'>
                <h1>About Me</h1>
                <p>I love to solve complex technical problems. This is why I picked up programming at a very young age. I started off making video games, and then started learning front end web development. I have expertise in HTML,CSS,React and the Unity Game Engine.I love working in a fast paced environment and am very open to learning new technologies. I love connecting to people and would love to share a conversation with anyone.  </p>
            </div>
        </div>
        <div className='about-skills-container'>
            <h1>My Experties:</h1>
            <div className='about-logos-container'>
                <SingleLogo logoicon={<FaHtml5/>} name='HTML' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>
                <SingleLogo logoicon={<FaCss3Alt/>} name='CSS' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    
                <SingleLogo logoicon={<FaJsSquare/>} name='JavaScript' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    
                <SingleLogo logoicon={<FaReact/>} name='React' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    
                <SingleLogo logoicon={<FaUnity/>} name='Unity' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    
                <SingleLogo logoicon={<TbCSharp/>} name='C Sharp' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    
                <SingleLogo logoicon={<FaFigma/>} name='Figma' link='https://developer.mozilla.org/en-US/docs/Web/HTML'/>    

  



            </div>
        </div>
        <Footer/>
    </>
  )
}

function SingleLogo({logoicon, name,link}){
    return(
        <IconContext.Provider value={{ size: 200, className:'logo' }}>
            <div className='outer'>
            <a href={link} target="blank">{logoicon}</a>
            <a id="logoText" href={link} target="blank">{name}</a>
            </div>  
        </IconContext.Provider>
    )

}

import React from 'react'
import './aboutpage.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {FaHtml5,FaCss3Alt,FaJsSquare,FaUnity,FaReact,FaFigma} from 'react-icons/fa';
import{TbCSharp} from 'react-icons/tb'


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
                <h2>“Creativity is Intilligience having fun”</h2>
            </div>
            <div className='additional-description'>
                <h1>About Me</h1>
                <p>I love to solve complex technical problems. This is why I picked up programming at a very young age. I started off making video games, and then started learning front end web development. I have expertise in HTML,CSS,React and the Unity Game Engine.I love working in a fast paced environment and am very open to learning new technologies. I love connecting to people and would love to share a conversation with anyone.  </p>
            </div>
        </div>
        <div className='about-skills-container'>
            <h1>My Experties:</h1>
            <div className='about-logos-container'>     
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="blank"><FaHtml5  size={150} className='logo' /><h1 id="logoText">HTML 5</h1></a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target="blank"><FaCss3Alt  size={150} className='logo' /><h1 id="logoText">CSS 3</h1></a>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target="blank"><FaJsSquare  size={150} className='logo' /><h1 id="logoText">JavaScript</h1></a>
                <a href='https://reactjs.org/' target="blank"><FaReact  size={150} className='logo' /><h1 id="logoText">React</h1></a>
                <a href='https://unity.com/' target="blank"><FaUnity  size={150} className='logo' /><h1 id="logoText">Unity</h1></a>
                <a href='https://www.w3schools.com/cs/' target="blank"><TbCSharp  size={150} className='logo' /><h1 id="logoText">C Sharp</h1></a>
                <a href='68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667.svg' target="blank"><FaFigma  size={150} className='logo' /><h1 id="logoText">Figma</h1></a>



            </div>
        </div>
        <Footer/>
    </>
  )
}

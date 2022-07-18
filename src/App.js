import './styles/App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LavizPic from './assets/Laviz.png'
import { 
  FaUnity,
  FaReact
 } from "react-icons/fa";


let skillsList = [
  {
    "title": "Unity C# Developer",
    "description": "I have 2 years of experience as a Unity Game Programmer",
    "logo": <FaUnity/>
  },
  {
    "title": "React Developer",
    "description": "I am learning react and making projects using the power of react",
    "logo": <FaReact/>

  }
]

let projectLists = [
  {
    "title": "Throctor",
    "description": "A device that takes thermal images of a patients throat to detect thyroid diseases using machine learning. I won the Microsoft Imagine Cup National Finals 2022- Health Catogery with this project",
    "image": 'https://i.ytimg.com/an_webp/QoV-fDWU2Gk/mqdefault_6s.webp?du=3000&sqp=CJ7j1ZYG&rs=AOn4CLDB-DMISP2HvjioiVMqUgY0f2lTeA',
    "link":'https://www.youtube.com/watch?v=QoV-fDWU2Gk',
    codeLink:'https://www.youtube.com'
  },
  {
    "title": "Cube Surfers Endless",
    "description": "I remade a famous mobile game and added my own twist, an endless mode to it",
    "image": "https://play-lh.googleusercontent.com/KkhT634qxisCzEXsokuqSOeNFW-oZhIlWtO7VWijJayjHstjxUQFWLIgEYLPLvraLEyA=w416-h235-rw",
    "link": 'https://play.google.com/store/apps/details?id=com.gamedevcluub.moneyy'
  }
]

function App() {

  let aboutTitle = "Laviz Pandey"
  let aboutDescription = " I am Laviz Pandey, a 19 year old tech freak in the internet writing code to a dumb machine to make it work. I am a huge gaming freak and have been working as a game developer/programmer professionally. I am also always learning new technologies and tools. I love connecting to people, discussing new ideas and am a huge fan of working for startups. There is something different about building something from the ground up and see it grow.<br>I am a student, a learner and a trying entrepreneur. I founded @BooksgasmNepal a few years ago and also have been a part of @DataResearchCouncilForStudents recently. I also am a C# game programmer and have experience in the Unity Game Engine. Currently, I am learning React and JavaScript.";
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element =
      {
        <>
          <Homepage/>
          <About title={aboutTitle} myDesc={aboutDescription}/>
          <Skills skillsList={skillsList}/>
        </>
      } />
       <Route path='/projects' element =
      {
        <>
          <Projects projectLists={projectLists}/>
        </>
      } />
      </Routes>
      
   <Footer/>

   </div>
    
  );
}

export default App;

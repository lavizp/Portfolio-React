import './styles/App.css';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About';


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
        </>
      }></Route>
      </Routes>
   </div>
    
  );
}

export default App;

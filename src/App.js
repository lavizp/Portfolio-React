import './App.css';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About';


function App() {
  return (
   <div>
    <Navbar/>
      <Homepage/>
      <About/>
 


   </div>
    
  );
}

export default App;

import './App.css';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'


function App() {
  return (
   <div>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Homepage/>} />
    </Routes>
   </div>
    
  );
}

export default App;

import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import { Route, Routes} from "react-router-dom";
import ProjectsPage from "./Pages/Projects/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>


    </Routes>
  );
}

export default App;

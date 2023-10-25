import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutSection from "./components/HomePage/AboutSection";
import ProjectSection from "./components/HomePage/Projects/ProjectSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/projects" element={<ProjectSection />} />
    </Routes>
  );
}

export default App;

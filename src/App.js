import { Route, Routes} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projecsts from "./components/Projecsts";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Connect from "./components/Connect";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
function App() {
  const theme = {
    dark: "#090E16",
    secondary: "#7B4AE2",
    rose: "#C83267"
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      <About/>
      <Projecsts/>
      <Skills/>
      <WorkExperience/>
      <Certifications/>
      <Connect/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

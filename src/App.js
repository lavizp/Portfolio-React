import { Box, Text } from "@chakra-ui/react";
import HeroSection from "./components/HomePage/HeroSection";
import WorkSection from "./components/HomePage/WorkSection";
import AboutSection from "./components/HomePage/AboutSection";
import SkillSection from "./components/HomePage/SkillSection";
import ProjectSection from "./components/HomePage/Projects/ProjectSection";

function App() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </>
  );
}

export default App;

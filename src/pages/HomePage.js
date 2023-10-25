import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import WorkSection from "../components/HomePage/WorkSection";
import AboutSection from "../components/HomePage/AboutSection";
import SkillSection from "../components/HomePage/SkillSection";
import ProjectSection from "../components/HomePage/Projects/ProjectSection";
import GithubSection from "../components/HomePage/GithubSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <GithubSection />
    </>
  );
};

export default HomePage;

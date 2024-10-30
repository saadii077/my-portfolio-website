import React from "react";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default page;

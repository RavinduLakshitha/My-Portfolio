// import { useState } from 'react'
import "./App.css";
import NavbarCom from "./Component/Navbar/navbar";
import Contactme from "./Pages/Contact/contact";
import Portfolio from "./Pages/Home/portfolio";
import Project from "./Pages/Projects/projects";
import TechStack from "./Pages/TechStack/techstack";
import Timeline from "./Pages/Timeline/timeline";

function App() {
  return (
    <div>
      <NavbarCom />
      <Portfolio />
      <Project />
      <TechStack />
      <Timeline />
      <Contactme />
    </div>
  );
}

export default App;

// import { useState } from 'react'
import "./App.css";
import NavbarCom from "./Component/Navbar/navbar";
import Contactme from "./Pages/Contact/contact";
import Portfolio from "./Pages/Home/portfolio";
import Project from "./Pages/Projects/projects";
import TechStack from "./Pages/TechStack/techstack";
import Timeline from "./Pages/Timeline/timeline";
import Layout from "./Component/Layout/layout";

function App() {
  return (
    <Layout>
      <div>
        <NavbarCom />
        <Portfolio />
        <Project />
        <TechStack />
        <Timeline />
        <Contactme />
      </div>
    </Layout>
  );
}

export default App;

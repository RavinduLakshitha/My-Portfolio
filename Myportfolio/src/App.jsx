// import { useState } from 'react'
import "./App.css";
import NavbarCom from "./Component/Navbar/navbar";
import Portfolio from "./Pages/Home/portfolio";
import Project from "./Pages/Projects/projects";

function App() {
  return (
    <div>
      <NavbarCom />
      <Portfolio />
      <Project />
    </div>
  );
}

export default App;

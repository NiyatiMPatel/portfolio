//React
import React from 'react';
import { useState } from "react";
//Styles
import "./styles/reset.scss";
import './styles/App.scss';
import './styles/Mobile.scss';
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import SectionBreak from './components/SectionBreak';
import About from "./components/About";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg"

function App() {
  const [colorMode, setColorMode] = useState();
  const [particleColor, setParticleColor] = useState("#64ffda");
  const [bgColor, setBgColor] = useState("#1F1F1F");

  const switchTheme = (e) => {
    if (colorMode) {
      setColorMode();
      setParticleColor("#64ffda");
      setBgColor("#1F1F1F");
    } else {
      setColorMode("lightMode");
      setParticleColor("#D2B537");
      setBgColor("#ffffff");
    }
  }

  return (
    <div className={`App ${colorMode}`}>
      <ParticlesBg color={particleColor} />
      <Nav switchTheme={switchTheme} colorMode={colorMode} />
      <Home />
      <SectionBreak bgColor={bgColor} className="section-break-bottom" />
      <About />
      <ProjectsAll />
      <SectionBreak bgColor={bgColor} className="section-break-top" />
      <Contact />
    </div>
  );
}

export default App;

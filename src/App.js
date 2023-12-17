//React
import { useState } from "react";
//Styles
import "./styles/reset.scss";
import './styles/App.scss';
import './styles/Mobile.scss';
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ProjectsAll from "./components/ProjectsAll";
import Contact from "./components/Contact";
import React from 'react';
import ParticlesBg from "./components/ParticlesBg"

function App() {
  const [colorMode, setColorMode] = useState();
  const [particleColor, setParticleColor] = useState("#64ffda");
  const [bgColor, setBgColor] = useState("#1F1F1F");

  const links = [
    {
      id: "nav-link-home",
      text: "Home",
      url: "#home",
    },
    {
      id: "nav-link-about",
      text: "About",
      url: "#about",
    },
    {
      id: "nav-link-projects",
      text: "Projects",
      url: "#projects",
    },
    {
      id: "nav-link-contact",
      text: "Contact",
      url: "#contact",
    },
  ]

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
      <Nav links={links} switchTheme={switchTheme} colorMode={colorMode} />
      <Home />

      <div className="section-break">
        <div className="section-break-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={bgColor} className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <About />
      <ProjectsAll />

      <div className="section-break">
        <div className="section-break-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={bgColor} className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default App;

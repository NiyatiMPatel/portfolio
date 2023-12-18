//React
import { useEffect } from "react";
// Projects List
import { projectDataAll } from "../listConstants";
//Components
import Project from "./Project";
import ProjectMobile from "./ProjectMobile";
//UUID
import { v4 as uuidv4 } from 'uuid';
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectsAll() {

  useEffect(() => {
    //section Fade In
    gsap.to(".project-header", {
      scrollTrigger: {
        trigger: "#projects",
        start: "-10% center",
        end: "bottom top",
        // markers: true,
        toggleActions: "play none none none",
      },
      duration: 1,
      y: 0,
      opacity: 1,
    });

  }, []);

  let vw = window.innerWidth;
  return (
    <div id="projects">
      <div className="project-header">
        <div className="project-section-title">
          <p className="about-title">Projects</p>
          <div className="section-break"></div>
        </div>
      </div>
      {vw > 480
        ? projectDataAll.map((projectData) => (
          <Project key={uuidv4()} projectData={projectData} />
        ))
        : projectDataAll.map((projectData) => (
          <ProjectMobile key={uuidv4()} projectData={projectData} />
        ))}
    </div>
  );
}

export default ProjectsAll;

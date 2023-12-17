//React
import { useEffect } from "react";
//Components
import Project from "./Project";
import ProjectMobile from "./ProjectMobile";
//WebPs
import meals from "../images/project-images/meals.png"
import superapp from "../images/project-images/superapp.png";
import expense from "../images/project-images/expense.png";
import users from "../images/project-images/users.png";
import animation from "../images/project-images/animation.png";
import bookstore from "../images/project-images/bookstore.png";
import fashion from "../images/project-images/fashion.png"
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectsAll() {
  const projectDataAll = [
    {
      id: "0",
      classTitle: "project-item-a",
      title: "Vendor Fashions",
      desc: "A cutting-edge winter weather scanning application that empowers users to optimize their skiing and snowboarding experiences by accessing real-time weather conditions at over 400 mountains across the United States.",
      codeUrl: "https://github.com/NiyatiMPatel/assignment-2",
      demoUrl: "https://vendor-fashion.netlify.app",
      imgSrc: fashion,
      imgAlt: "powderly demo image",
      tech: [["HTML", "html"], ["CSS", "css"], ["Bootstrap", "bootstrap"], ["Netlify", "netlify"]]
    },
    {
      id: "1",
      classTitle: "project-item-b",
      title: "Javascript SuperApp",
      desc: "A full-stack web application to play Where's Waldo and compare high scores. Built as part of The Odin Project Fullstack JavaScript curriculum to practice using a BaaS to store data.",
      codeUrl: "https://github.com/NiyatiMPatel/js-assignment",
      demoUrl: "https://javascript-super-app.netlify.app",
      imgSrc: superapp,
      imgAlt: "where's waldo game app project demo image",
      tech: [["HTML", "html"], ["CSS", "css"], ["Javascript", "javascript"]]
    },
    {
      id: "2",
      classTitle: "project-item-a",
      title: "Expense Tracker",
      desc: "An animated and fully responsive Rock Paper Scissors game application. Built as part of a challenge to match a design file as closely as possible.",
      codeUrl: "https://github.com/NiyatiMPatel/expense-tracker-app",
      demoUrl: "https://niyatimpatel.github.io/react-expense-tracker",
      imgSrc: expense,
      imgAlt: "rock paper scissors game app demo image",
      tech: [["React", "react"], ["CSS", "css"], ["Javascript", "javascript"]]
    },
    {
      id: "3",
      classTitle: "project-item-b",
      title: "React Meals",
      desc: "A live weather application to display the current weather conditions at the location searched. Users can easily switch color themes and display units.",
      codeUrl: "https://github.com/NiyatiMPatel/react-food-order-app",
      demoUrl: "https://niyatimpatel.github.io/food-order-app-project",
      imgSrc: meals,
      imgAlt: "live weather app demo image",
      tech: [["React", "react"], ["CSS Modules", "css"], ["Javascript", "javascript"], ["Firebase", "firebase"]]
    },
    {
      id: "4",
      classTitle: "project-item-a",
      title: "User Registrar",
      desc: "An animated and fully responsive template for a company landing page. Built as part of a challenge to match a design file as closely as possible.",
      codeUrl: "https://github.com/NiyatiMPatel/react-reux-toolkit-users-crud-code",
      demoUrl: "https://user-registrar.netlify.app",
      imgSrc: users,
      imgAlt: "landing page project demo image",
      tech: [["React", "react"], ["CSS Modules", "css"], ["React Router", "react"], ["Redux Toolkit", "redux"], ["Firebase", "firebase"]]
    },
    {
      id: "5",
      classTitle: "project-item-b",
      title: "Vite Animation",
      desc: "An animated and fully responsive template for a company landing page. Built as part of a challenge to match a design file as closely as possible.",
      codeUrl: "https://github.com/NiyatiMPatel/animation",
      demoUrl: "https://vite-animation.netlify.app",
      imgSrc: animation,
      imgAlt: "landing page project demo image",
      tech: [["Vite", "vite"], ["React", "react"], ["Styled Components", "styled"], ["GSAP", "gsap"], ["Framer Motion", "framer"]]
    },
    {
      id: "6",
      classTitle: "project-item-a",
      title: "Bookstore",
      desc: "An animated and fully responsive template for a company landing page. Built as part of a challenge to match a design file as closely as possible.",
      codeUrl: "https://github.com/NiyatiMPatel/node-mongo-bookstore",
      demoUrl: "https://node-mongo-bookstore.onrender.com",
      imgSrc: bookstore,
      imgAlt: "landing page project demo image",
      tech: [["Node.js", "node"], ["Express", "express"], ["EJS", "ejs"], ["MongoDB", "mongo"], ["Mongoose", "mongoose"]]
    },
  ];

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
  if (vw > 480) {
    return (
      <div id="projects">
        <div className="project-header">
          <div className="project-section-title">
            <p className="about-title">Projects</p>
            <div className="section-break"></div>
          </div>
        </div>
        {projectDataAll.map((projectData) => <Project projectData={projectData} />)}
      </div>
    );
  } else {
    return (
      <div id="projects">
        <div className="project-header">
          <div className="project-section-title">
            <p className="about-title">Projects</p>
            <div className="section-break"></div>
          </div>
        </div>
        {projectDataAll.map((projectData) => <ProjectMobile projectData={projectData} />)}
      </div>
    );
  }
}

export default ProjectsAll;

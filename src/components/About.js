// React
import { useEffect } from "react";

import InfiniteLoopSlider from "./InfiniteLoopSlider";
//WebPs
import htmlImg from "../images/webps/html.webp";
import cssImg from "../images/webps/css.webp";
import jsImg from "../images/webps/javascript.webp";
import sassImg from "../images/webps/sass.webp";
import reactImg from "../images/webps/react.webp";
import bsImg from "../images/webps/bootstrap.webp";
import nodeImg from "../images/webps/nodejs.webp";
import mongoImg from "../images/webps/mongo.webp";
import sqlImg from "../images/webps/mysql.webp";
import exImg from "../images/webps/express.webp";
import fbImg from "../images/webps/firebase.webp";
import gitImg from "../images/webps/git.webp";
import wpImg from "../images/webps/webpack.webp";
import parImg from "../images/webps/parcel.png";
import ghImg from "../images/webps/github.webp";
import npmImg from "../images/webps/npm.webp";
import jestImg from "../images/webps/jest.webp";
import axiosImg from "../images/webps/axios.webp";
import zepImg from "../images/webps/zeplin.webp";
import BioImg from "../images/webps/niyati.webp";
import reduxImg from "../images/webps/redux.png";
import tsImg from "../images/webps/typescript.png";
import matlabImg from "../images/webps/matlab.png";
import mongooseImg from "../images/webps/mongoose.webp";
import sequelizeImg from "../images/webps/sequelize.png";
import postmanImg from "../images/webps/postman.png";
import netlifyImg from "../images/webps/netlify.png";


//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {

  const languageSkills = [
    { text: "HTML5", image: htmlImg },
    { text: "CSS3", image: cssImg },
    { text: "JavaScript", image: jsImg },
    { text: "TypeScript", image: tsImg },
    { text: "Matlab", image: matlabImg },
  ];

  const frameworkSkills = [
    { text: "React.js", image: reactImg },
    { text: "Redux", image: reduxImg },
    { text: "Node.js", image: nodeImg },
    { text: "Express", image: exImg },
    { text: "MongoDB", image: mongoImg },
    { text: "Mongoose", image: mongooseImg },
    { text: "MySql", image: sqlImg },
    { text: "Sequelize", image: sequelizeImg },
    { text: "SASS", image: sassImg },
    { text: "Bootstrap", image: bsImg },
  ];

  const toolSkills = [
    { text: "Git", image: gitImg },
    { text: "Github", image: ghImg },
    { text: "Npm", image: npmImg },
    { text: "Webpack", image: wpImg },
    { text: "Parcel", image: parImg },
    { text: "Jest", image: jestImg },
    { text: "Axios", image: axiosImg },
    { text: "Postman", image: postmanImg },
    { text: "Zeplin", image: zepImg },
    { text: "Google Firebase", image: fbImg },
    { text: "Netlify", image: netlifyImg },
  ];

  useEffect(() => {
    //section Fade In
    gsap.to(".about-container", {
      scrollTrigger: {
        trigger: "#about",
        start: "-10% center",
        end: "bottom top",
        toggleActions: "play none none none",
      },
      duration: 2,
      y: 0,
      opacity: 1,
    });

  }, []);


  return (
    <div id="about" className="about">
      <div id="about-container" className="about-container">

        <div className="about-content-all">

          <div className="about-content-left">

            <div className='section-header'>
              <p className="about-title">About</p>
              <div className="section-break"></div>
            </div>
            <p className="about-bio">
              Hello! I'm Niyati Patel, a passionate Full Stack Web Developer with a knack for front-end development! Armed with a master's in telecommunications engineering, my journey in tech has been all about pushing boundaries and exploring the wonders of coding.
            </p>
            <p className="about-bio">
              Certified in the cool realms of MERN Stack, React, and AWS, I'm on a mission to infuse creativity into the digital landscape. My passion lies in crafting seamless user experiences and creating code that dances to the rhythm of innovation.  If you're curious about my work, feel free to explore the projects I've led on GitHub.
            </p>
            <p className="about-bio">
              Whether you're a seasoned pro or just starting, let's connect and share the excitement of coding adventures! Reach out on GitHub or LinkedIn, and let's embark on a journey of endless possibilities together. 🌟✨
            </p>
          </div>

          <a href="https://github.com/NiyatiMPatel" target="_blank" rel="noreferrer" className="about-content-right">

            <div className="bio-wrapper">
              <div className="img-filter"></div>
              <div className="bio-image">
                <img src={BioImg} alt="Niyati Patel"></img>
              </div>
            </div>

            <div className="img-bg"></div>
          </a>

        </div>

        <div className='section-header'>
          <p className="skills-title">Tools & Skills</p>
          <div className="section-break"></div>
        </div>

        <p className="skill-label">Languages</p>

        <InfiniteLoopSlider type="front" children={languageSkills} />

        <p className="skill-label">Frameworks, Libraries, & Databases</p>

        <InfiniteLoopSlider type="back" children={frameworkSkills} />

        <p className="skill-label">Tools & Miscellaneous</p>

        <InfiniteLoopSlider type="dev" children={toolSkills} />

      </div>
    </div>

  );
}

export default About;

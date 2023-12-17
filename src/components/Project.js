//React
import { useEffect } from "react";
//UUID
import { v4 as uuidv4 } from 'uuid';
//Svgs
import { ReactComponent as GithubSvg } from "../images/github2.svg";
import { ReactComponent as LinkSvg } from "../images/link.svg";

import getTechLogo from "../helper";

//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Project(props) {

    let projTech = props.projectData.tech.map((techItem) =>
        <div key={uuidv4()} className={`tech-item ${techItem[1]}`} >
            {getTechLogo(techItem[1])}
            <p > {techItem[0]}</p>
        </div>
    );

    useEffect(() => {
        //image slide in
        gsap.to(`#project-image-container-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
            opacity: 1,
        });
        //title slide in
        gsap.to(`.project-header-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            x: 0,
            opacity: 1,
        });
        //content fade in
        gsap.to(`.project-details-${props.projectData.id}`, {
            scrollTrigger: {
                trigger: `#project-item-${props.projectData.id}`,
                start: "top 66%",
                end: "bottom top",
                // markers: true,
                toggleActions: "play none none none",
            },
            duration: 0.5,
            delay: 1,
            opacity: 1,
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="project-container">
            <div id={`project-item-${props.projectData.id}`} className={props.projectData.classTitle}>

                <a id={`project-image-container-${props.projectData.id}`} className="project-image" href={props.projectData.demoUrl} target="_blank" rel="noreferrer">

                    <div className="img-wrapper">
                        <div className="img-filter"></div>
                        <div className="proj-image">
                            <img className={`project-img-${props.projectData.id}`} src={props.projectData.imgSrc} alt={props.projectData.imgAlt}></img>
                        </div>
                    </div>

                    <div className="img-bg"></div>
                </a>


                <div className="project-content-container">

                    <div className={`project-header-${props.projectData.id}`}>
                        <p className={`project-title-${props.projectData.id}`}>{props.projectData.title}</p>
                    </div>

                    <div className={`project-details-${props.projectData.id}`}>
                        <p className="project-desc">{props.projectData.desc}</p>

                        <div className="tech-list">
                            {projTech}
                        </div>

                        <div className="project-links">
                            <a href={props.projectData.demoUrl} target="_blank" rel="noreferrer" className="project-btn">
                                <div className="link-svg-proj">
                                    <LinkSvg />
                                </div>
                                <p>Live Demo</p>
                            </a>
                            <a href={props.projectData.codeUrl} target="_blank" rel="noreferrer" className="project-btn">
                                <div className="link-svg-proj">
                                    <GithubSvg />
                                </div>
                                <p>See Code</p>
                            </a>
                        </div>
                    </div>



                </div>

            </div>

        </div>


    );
}

export default Project;
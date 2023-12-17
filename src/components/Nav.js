//React
import {useState, useEffect} from "react";
//UUID
import { v4 as uuidv4 } from 'uuid';
//Components
import { ReactComponent as LightOutSvg } from "../images/light-fill.svg";
import { ReactComponent as DarkOutSvg } from "../images/dark-out.svg";
//GSAP
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Nav(props) {
    //props.links
    //props.switchTheme  
    const [modalAction, setModalAction] = useState("open");
    let vw = window.innerWidth;

    const scrollClick = (e) => {
        toggleModal();
        e.preventDefault();
        let target = e.target.getAttribute("href");
        let scrollLoc = document.querySelector(target).offsetTop;
        let navOffset = document.getElementById("nav-bar").offsetHeight;
        let screenW = window.innerWidth;
        if (screenW > 600) {
            window.scrollTo({
                left: 0,
                top: scrollLoc-navOffset,
            });
        } else {
            window.scrollTo({
                left: 0,
                top: scrollLoc,
            });
        }
    }

    const resetLink = (linkId) => {
        document.getElementById(`nav-link-${linkId}`).classList = "";
    }

    const selectLink = (linkId) => {
        document.getElementById(`nav-link-${linkId}`).classList.add("selected");
    }

    const hideNav = () => {
        document.getElementById("nav-bar").classList.remove("contrast")
    }

    const showNav = () => {
        document.getElementById("nav-bar").classList.add("contrast")
    }

    const switchTheme = () => {
        props.switchTheme();
    }

    useEffect(() => {

        ScrollTrigger.create({
            trigger: "#home",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("home"),
            onLeave: () => resetLink("home"),
            onEnterBack: () => selectLink("home"),
            onLeaveBack: () => resetLink("home"),
        })

        ScrollTrigger.create({
            trigger: "#about",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("about"),
            onLeave: () => resetLink("about"),
            onEnterBack: () => selectLink("about"),
            onLeaveBack: () => resetLink("about"),
        })

        ScrollTrigger.create({
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("projects"),
            onLeave: () => resetLink("projects"),
            onEnterBack: () => selectLink("projects"),
            onLeaveBack: () => resetLink("projects"),
        })

        ScrollTrigger.create({
            trigger: "#contact",
            start: "top center",
            end: "bottom center",
            // markers: true,
            onEnter: () => selectLink("contact"),
            onLeave: () => resetLink("contact"),
            onEnterBack: () => selectLink("contact"),
            onLeaveBack: () => resetLink("contact"),
        })

        if (window.screen.width > 800) {
            ScrollTrigger.create({
                trigger: "#home",
                start: "bottom 100px",
                end: "bottom top",
                // markers: true,
                onEnter: () => showNav(),
                onEnterBack: () => hideNav(),
            })
        } else {
            showNav();
        }
    },[]);


    const toggleModal = () => {

        let vwNow = window.innerWidth;
        if (modalAction === "open") {
            gsap.to(`.nav-modal`, {
                duration: 0.5,
                x: -vwNow,
                opacity: 1,
            });
            hamToX();
            setModalAction("close");
        } else if (modalAction === "close") {
            gsap.to(`.nav-modal`, {
                duration: 0.5,
                x: vwNow,
                opacity: 1,
            });
            xToHam();
            setModalAction("open");
        } 
    }

    const hamToX = () => {
        //Compress Hamburger
        gsap.to(`.bar-1`, {
            duration: 0.1,
            y: 14,
        });
        gsap.to(`.bar-3`, {
            duration: 0.1,
            y: -14,
        });
        //Pre-Rotate
        gsap.to(`.bar-3`, {
            duration: 0.1,
            width: 35, 
            delay: 0.1,
        });
        gsap.to(`.bar-2`, {
            duration: 0.1,
            opacity: 0,
            delay: 0.1,
        });
        //Rotate
        gsap.to(`.bar-1`, {
            duration: 0.5,
            rotation: 405,
            delay: 0.2,
        });
        gsap.to(`.bar-3`, {
            duration: 0.5,
            rotation: 315,
            delay: 0.2,
        });

    }

    const xToHam = () => {
        //Rotate
        gsap.to(`.bar-1`, {
            duration: 0.5,
            rotation: 0,
        });
        gsap.to(`.bar-3`, {
            duration: 0.5,
            rotation: 0,
        });
        //Post-Rotate
        gsap.to(`.bar-3`, {
            duration: 0.1,
            y: -14,
            width: 18, 
            delay: 0.5,
        });
        gsap.to(`.bar-2`, {
            duration: 0.1,
            opacity: 1,
            delay: 0.5,
        });
        //Open Hamburger
        gsap.to(`.bar-1`, {
            duration: 0.1,
            y: 0,
            opacity: 1,
            delay: 0.6,
        });
        gsap.to(`.bar-3`, {
            duration: 0.1,
            y: 0,
            opacity: 1,
            delay: 0.6,
        });

    }

    useEffect(() => {
        //Nav Bar Fade Down
        let vwNow = window.innerWidth;
        if (vwNow > 480) {
            gsap.to(".nav-bar", {
                delay: 3,
                // ease: "elastic",
                duration: 1,
                y: 0,
                opacity: 1,
              })
        }
      },[]);


    let colorSvg = <DarkOutSvg id="dark" className="dark-svg" fill='red' onClick={e=> e.stopPropagation()}/>;
    if (props.colorMode === "lightMode") {
        colorSvg = <LightOutSvg id="light"  className="light-svg" onClick={e=> e.stopPropagation() }/>;
    }
    
    if (vw > 480) {
        return (
            <div id="nav-bar" className={"nav-bar"}>
                <div className="nav-bar-left">
                    <button id="light" className="nav-btn" onClick={switchTheme}>
                        {colorSvg}
                    </button>
                </div>
                <ul className="nav-bar-list">
                    {props.links.map((link) => 
                        <li key={uuidv4()}>
                            <a href={link.url} id={link.id} onClick={scrollClick}>{link.text}</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    } else {
        return(
            <div id="nav-bar" className="nav-bar-mobile">
                <div className="nav-main">
                    <div className="nav-bar-left">
                        <button id="light" className="nav-btn" onClick={switchTheme}>
                            {colorSvg}
                        </button>
                    </div>
                    <div id="nav-btn" onClick={toggleModal}>
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                        <div className="bar-3"></div>
                    </div>
                </div>

                <div className="nav-modal">
                    <div className="left-window" onClick={toggleModal}></div>
                    <ul className="nav-bar-list">
                        {props.links.map((link) => 
                            <li key={uuidv4()}>
                                <a href={link.url} id={link.id} onClick={scrollClick}>{link.text}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}

export default Nav;

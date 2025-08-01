//React
import { useEffect } from "react";
//Svgs
import { ReactComponent as GithubSvg } from "../images/github.svg";
import { ReactComponent as LinkedInSvg } from "../images/linkedin.svg";
import { ReactComponent as EmailSvg } from "../images/email.svg";
import { ReactComponent as CvSvg } from "../images/cv.svg";
//Docs
import CvPdf from "../documents/Niyati_Patel_Resume.pdf";
//GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Contact() {

  useEffect(() => {
    //section Fade In
    gsap.to(".contact-container", {
      scrollTrigger: {
        trigger: "#contact",
        start: "-10% center",
        end: "bottom top",
        toggleActions: "play none none none",
      },
      duration: 1,
      y: 0,
      opacity: 1,
    });

  }, []);

  return (
    <div id="contact" className="contact">
      <div id="contact-container" className="contact-container">
        <div className='section-header'>
          <p className="contact-title">Contact Me</p>
          <div className="section-break"></div>
        </div>

        <a href="https://github.com/NiyatiMPatel" target="_blank" rel="noreferrer" className="link-item">
          <div className="link-svg">
            <GithubSvg />
          </div>
          <p>Github:</p>
          <p>github.com/NiyatiMPatel</p>
        </a>

        <a href="https://www.linkedin.com/in/niyati-mukesh-patel" target="_blank" rel="noreferrer" className="link-item">
          <div className="link-svg">
            <LinkedInSvg />
          </div>
          <p>LinkedIn:</p>
          <p>www.linkedin.com/in/niyati-mukesh-patel</p>
        </a>

        <address>
          <a href="mailto:patel_niyati@outlook.com" target="_blank" rel="noreferrer" className="link-item">
            <div className="link-svg">
              <EmailSvg />
            </div>
            <p>Email:</p>
            <p>patel_niyati@outlook.com</p>
          </a>
        </address>

        <a href={CvPdf} target="_blank" rel="noreferrer" className="link-item">
          <div className="link-svg">
            <CvSvg />
          </div>
          <p>Resume:</p>
          <p>Niyati_Patel_Resume.pdf</p>
        </a>

      </div>

    </div>


  );
}

export default Contact;

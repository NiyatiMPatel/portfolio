import { ReactComponent as HtmlSvg } from "./images/svgs/icons/html5.svg";
import { ReactComponent as CssSvg } from "./images/svgs/icons/css3.svg";
import { ReactComponent as BsSvg } from "./images/svgs/icons/bootstrap.svg";
import { ReactComponent as JSSvg } from "./images/svgs/icons/javascript.svg";
import { ReactComponent as NpmSvg } from "./images/svgs/icons/npm.svg";
import { ReactComponent as ReactSvg } from "./images/svgs/icons/react.svg";
import { ReactComponent as ViteSvg } from "./images/svgs/icons/vite.svg";
import { ReactComponent as SassSvg } from "./images/svgs/icons/sass.svg";
import { ReactComponent as WebpSvg } from "./images/svgs/icons/webpack.svg";
import { ReactComponent as ApiSvg } from "./images/svgs/icons/api.svg";
import { ReactComponent as FbSvg } from "./images/svgs/icons/firebase.svg";
import { ReactComponent as GsapSvg } from "./images/svgs/icons/gsap.svg";
import { ReactComponent as FramerSvg } from "./images/svgs/icons/framer.svg";
import { ReactComponent as StyledSvg } from "./images/svgs/icons/styled-components.svg";
import { ReactComponent as JestSvg } from "./images/svgs/icons/jest.svg";
import { ReactComponent as MongoSvg } from "./images/svgs/icons/mongo.svg";
import { ReactComponent as MongooseSvg } from "./images/svgs/icons/mongoose.svg";
import { ReactComponent as MapsSvg } from "./images/svgs/icons/maps.svg";
import { ReactComponent as NodeSvg } from "./images/svgs/icons/node.svg";
import { ReactComponent as EjsSvg } from "./images/svgs/icons/ejs.svg";
import { ReactComponent as ReduxSvg } from "./images/svgs/icons/redux.svg";
import { ReactComponent as NetlifySvg } from "./images/svgs/icons/netlify.svg";

const getTechLogo = (techType) => {
 switch (techType) {
  case "html":
   return (
    <div className="tech-logo">
     <HtmlSvg />
    </div>);
  case "css":
   return (
    <div className="tech-logo">
     <CssSvg />
    </div>);
  case "bootstrap":
   return (
    <div className="tech-logo">
     <BsSvg />
    </div>);
  case "javascript":
   return (
    <div className="tech-logo">
     <JSSvg />
    </div>);
  case "sass":
   return (
    <div className="tech-logo">
     <SassSvg />
    </div>);
  case "react":
   return (
    <div className="tech-logo">
     <ReactSvg />
    </div>);
  case "vite":
   return (
    <div className="tech-logo">
     <ViteSvg />
    </div>);
  case "gsap":
   return (
    <div className="tech-logo">
     <GsapSvg />
    </div>);
  case "framer":
   return (
    <div className="tech-logo">
     <FramerSvg />
    </div>);
  case "styled":
   return (
    <div className="tech-logo">
     <StyledSvg />
    </div>);
  case "npm":
   return (
    <div className="tech-logo">
     <NpmSvg />
    </div>);
  case "webpack":
   return (
    <div className="tech-logo">
     <WebpSvg />
    </div>);
  case "jest":
   return (
    <div className="tech-logo">
     <JestSvg />
    </div>);
  case "firebase":
   return (
    <div className="tech-logo">
     <FbSvg />
    </div>);
  case "api":
   return (
    <div className="tech-logo">
     <ApiSvg />
    </div>);
  case "node":
   return (
    <div className="tech-logo">
     <NodeSvg />
    </div>);
  case "ejs":
   return (
    <div className="tech-logo">
     <EjsSvg />
    </div>);
  case "mongo":
   return (
    <div className="tech-logo">
     <MongoSvg />
    </div>);
  case "mongoose":
   return (
    <div className="tech-logo">
     <MongooseSvg />
    </div>);
  case "maps":
   return (
    <div className="tech-logo">
     <MapsSvg />
    </div>);
  case "redux":
   return (
    <div className="tech-logo">
     <ReduxSvg />
    </div>);
  case "netlify":
   return (
    <div className="tech-logo">
     <NetlifySvg />
    </div>);
  case "express":
   return (
    <div className="tech-logo">
     <JSSvg />
    </div>);
  default:
 }
}

export default getTechLogo
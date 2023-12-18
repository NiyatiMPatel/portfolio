//WebPs
import meals from "./images/project-images/meals.png"
import superapp from "./images/project-images/superapp.png";
import expense from "./images/project-images/expense.png";
import users from "./images/project-images/users.png";
import animation from "./images/project-images/animation.png";
import bookstore from "./images/project-images/bookstore.png";
import fashion from "./images/project-images/fashion.png"

export const projectDataAll = [
 {
  id: "0",
  classTitle: "project-item-a",
  title: "Vendor Fashions",
  desc: "A sophisticated online shopping platform that offers a user-friendly interface for customers to browse, select, and purchase products, while also providing features for managing orders and user profiles.",
  codeUrl: "https://github.com/NiyatiMPatel/assignment-2",
  demoUrl: "https://vendor-fashion.netlify.app",
  imgSrc: fashion,
  imgAlt: "fashion demo image",
  tech: [["HTML", "html"], ["CSS", "css"], ["Bootstrap", "bootstrap"]]
 },
 {
  id: "1",
  classTitle: "project-item-b",
  title: "Javascript SuperApp",
  desc: " An application that covers a wide range of learning aspects in JavaScript, making it an excellent resource for understanding various concepts and techniques in the language.",
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
  desc: "Expense tracker application that allows users to manage and visualize their expenses. It features components for adding expenses, and displaying them in list and chart formats.",
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
  desc: "Application structured with a focus on modularity and reusability, designed to streamline the process of online food ordering. Built using the robust and dynamic framework to offer a user-friendly interface and efficient functionality.",
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
  desc: "A representation of modern web development practices, showcasing how to address the challenges of state management and HTTP request/response handling in complex applications.",
  codeUrl: "https://github.com/NiyatiMPatel/react-reux-toolkit-users-crud-code",
  demoUrl: "https://user-registrar.netlify.app",
  imgSrc: users,
  imgAlt: "landing page project demo image",
  tech: [["React", "react"], ["CSS Modules", "css"], ["React Router", "react"], ["Redux Toolkit", "redux"], ["Axios", "axios"], ["Firebase", "firebase"]]
 },
 {
  id: "5",
  classTitle: "project-item-b",
  title: "Vite Animation",
  desc: "A testament to the power of modern web technologies in creating visually stunning and interactive websites. It showcases the effective use of on-scroll effects to enhance user engagement and experience.",
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
  desc: "Web application that manages user authentication, role-based access control, and session management, alongside online store functionalities.",
  codeUrl: "https://github.com/NiyatiMPatel/node-mongo-bookstore",
  demoUrl: "https://node-mongo-bookstore.onrender.com",
  imgSrc: bookstore,
  imgAlt: "landing page project demo image",
  tech: [["Node.js", "node"], ["Express", "express"], ["EJS", "ejs"], ["MongoDB", "mongo"], ["Mongoose", "mongoose"]]
 },
];


export const links = [
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
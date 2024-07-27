//WebPs
import meals from "./images/project-images/meals.png"
import superapp from "./images/project-images/superapp.png";
import expense from "./images/project-images/expense.png";
// import users from "./images/project-images/users.png";
// import animation from "./images/project-images/animation.png";
import bookstore from "./images/project-images/bookstore.png";
import bonvoyage from "./images/project-images/bonvoyage.png";
import fashion from "./images/project-images/fashion.png"

export const projectDataAll = [
 {
  id: "0",
  classTitle: "project-item-a",
  title: "BonVoyage",
  desc: "A web application designed for hotel booking, offering a platform where users can search for hotels, view hotel details, and make bookings. It also supports features for hotel owners to manage their listings, including adding new hotels, editing existing listings, and viewing their bookings.",
  codeUrl: "https://github.com/NiyatiMPatel/bonvoyage",
  demoUrl: "https://bonvoyagebooking.netlify.app/",
  imgSrc: bonvoyage,
  imgAlt: "bonvoyage",
  tech: [["Node.js", "node"], ["Express", "express"], ["MongoDB", "mongo"], ["Mongoose", "mongoose"], ["Typescript", "typescript"], ["Vite", "vite"], ["React", "react"], ["Tailwind", "tailwind"], ["Playwright", "playwright"]]
 },
 {
  id: "1",
  classTitle: "project-item-b",
  title: "TradeTrove",
  desc: "An online shopping platform, specifically designed for managing products, user authentication, and order processing. It caters to both end-users looking to purchase products and administrators tasked with managing the platform's content and orders.",
  codeUrl: "https://github.com/NiyatiMPatel/node-mongo-bookstore",
  demoUrl: "https://node-mongo-bookstore.onrender.com",
  imgSrc: bookstore,
  imgAlt: "bookstore",
  tech: [["Node.js", "node"], ["Express", "express"], ["EJS", "ejs"], ["MongoDB", "mongo"], ["Mongoose", "mongoose"]]
 },
 {
  id: "2",
  classTitle: "project-item-a",
  title: "React Meals",
  desc: "A web application designed for an online food ordering system. It allows users to browse through a selection of meals, add them to a cart, and proceed to checkout with their order details.",
  codeUrl: "https://github.com/NiyatiMPatel/react-food-order-app",
  demoUrl: "https://niyatimpatel.github.io/food-order-app-project",
  imgSrc: meals,
  imgAlt: "meal",
  tech: [["React", "react"], ["CSS Modules", "css"], ["Javascript", "javascript"], ["Firebase", "firebase"]]
 },
 {
  id: "3",
  classTitle: "project-item-b",
  title: "Expense Tracker",
  desc: "An application that helps users manage and visualize their expenses over time. It allows users to add new expenses, view a list of expenses, and filter expenses by year.",
  codeUrl: "https://github.com/NiyatiMPatel/expense-tracker-app",
  demoUrl: "https://niyatimpatel.github.io/react-expense-tracker",
  imgSrc: expense,
  imgAlt: "expense",
  tech: [["React", "react"], ["CSS", "css"], ["Javascript", "javascript"]]
 },
 {
  id: "4",
  classTitle: "project-item-a",
  title: "CodeCanvas",
  desc: "A web application that covers a wide range of JavaScript concepts and functionalities through a series of interactive exercises, including DOM manipulation, event handling, array methods, object manipulation, and more.",
  codeUrl: "https://github.com/NiyatiMPatel/js-assignment",
  demoUrl: "https://javascript-super-app.netlify.app",
  imgSrc: superapp,
  imgAlt: "superapp",
  tech: [["HTML", "html"], ["CSS", "css"], ["Javascript", "javascript"]]
 },
 {
  id: "5",
  classTitle: "project-item-b",
  title: "Vendor",
  desc: "A web application that provides a complete online shopping experience with seamless search and cart functionalities, user engagement and personalization through account management, and detailed product information.",
  codeUrl: "https://github.com/NiyatiMPatel/assignment-2",
  demoUrl: "https://vendor-fashion.netlify.app",
  imgSrc: fashion,
  imgAlt: "fashion",
  tech: [["HTML", "html"], ["CSS", "css"], ["Bootstrap", "bootstrap"]]
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
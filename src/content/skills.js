import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaAngular,
  FaLess,
  FaSass,
  FaGit,
  FaNodeJs,
  FaPython,
  FaAws,
} from "react-icons/fa"
import { GrGatsbyjs, GrGraphQl, GrHeroku } from "react-icons/gr"

export const skillsFrontEnd = [
  {
    category: "Fundamentals",
    skills: [
      { icon: <FaHtml5 />, skill: "HTML5" },
      { icon: <FaCss3Alt />, skill: "CSS3" },
      { icon: <FaJsSquare />, skill: "JavaScript 6" },
      { skill: "TypeScript" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    skills: [
      { icon: <FaReact />, skill: "ReactJS (Hooks, Context API)" },
      // { icon: 'react', skill: 'React Hooks' },
      // { icon: 'react', skill: 'Context API' },
      { icon: <GrGatsbyjs />, skill: "Gatsby" },
      { svg: "redux", skill: "Redux" },
      { svg: "apollo", skill: "Apollo Client" },
      { icon: <FaVuejs />, skill: "Vue.js (Vue Router, Vuex)" },
      { icon: <FaAngular />, skill: "Angular" },
    ],
  },
  {
    category: "CSS Compilers",
    skills: [
      { icon: <FaLess />, skill: "LESS" },
      { icon: <FaSass />, skill: "Sass/SCSS" },
    ],
  },
  {
    category: "Styling Libraries",
    skills: [
      { skill: "Styled-Components" },
      { skill: "Semantic UI" },
      { skill: "Material UI" },
      { skill: "Spark Design System" },
    ],
  },
  {
    category: "API Calls",
    skills: [
      { svg: "axios", skill: "Axios" },
      { icon: <FaJsSquare />, skill: "Fetch API" },
      { icon: <GrGraphQl />, skill: "GraphQL" },
      { skill: "RxJS" },
    ],
  },
  {
    category: "Deployment",
    skills: [
      { svg: "netlify", skill: "Netlify" },
      { svg: "zeit", skill: "Zeit" },
      // { icon: 'aws', skill: 'Elastic Beanstalk' },
    ],
  },
  {
    category: "Version Control",
    skills: [{ icon: <FaGit />, skill: "Git" }],
  },
  {
    category: "Testing",
    skills: [
      { svg: "jest", skill: "Jest" },
      { skill: "React-Testing-Library" },
    ],
  },
]

export const skillsBackEnd = [
  {
    category: "Fundamentals",
    skills: [
      { icon: <FaNodeJs />, skill: "Node.js" },
      { icon: <FaPython />, skill: "Python" },
      { skill: "C#" },
      { skill: "REST" },
      { svg: "sql", skill: "SQL" },
      { icon: <GrGraphQl />, skill: "GraphQL" },
      { icon: <FaAws />, skill: "DynamoDB" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { icon: <FaNodeJs />, skill: "Express" },
      { skill: "ASP.NET Core" },
      { svg: "knex", skill: "Knex" },
      { icon: <GrGraphQl />, skill: "GraphQL-Yoga" },
      { svg: "apollo", skill: "Apollo Server (Gateway, Federation)" },
      { svg: "prisma", skill: "Prisma" },
      // { svg: 'apollo', skill: 'Apollo Gateway' },
      // { svg: 'apollo', skill: 'Apollo Federation' },
      { svg: "django", skill: "Django" },
    ],
  },
  {
    category: "Deployment",
    skills: [{ icon: <GrHeroku />, skill: "Heroku" }],
  },
  {
    category: "Testing",
    skills: [
      { svg: "jest", skill: "Jest" },
      { icon: <FaNodeJs />, skill: "SuperTest" },
    ],
  },
]

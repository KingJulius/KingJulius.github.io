import IMG1 from './assets/project-images/foodclassifier.png';
import IMG2 from './assets/project-images/minesweeper.png';
import IMG3 from './assets/project-images/digitclassifier.png';
import IMG4 from './assets/project-images/expensetracker.png';

import HONEYWELL from './assets/company-icons/honeywell-logo.jpg'
import KPMG from './assets/company-icons/kpmg-logo.svg'
import NBA from './assets/company-icons/nba-logo.jpeg'

import HTML from "./assets/library-icons/html5-original.svg";
import CSS from "./assets/library-icons/css3-original.svg";
import DJANGO from "./assets/library-icons/django-plain.svg";
import EXPRESS from "./assets/library-icons/express-original.svg";
import FLASK from "./assets/library-icons/flask-original.svg";
import C from "./assets/library-icons/c-original.svg";
import JAVA from "./assets/library-icons/java-original.svg";
import JAVASCRIPT from "./assets/library-icons/javascript-original.svg";
import MARKDOWN from "./assets/library-icons/markdown-original.svg";
import MONGODB from "./assets/library-icons/mongodb-original.svg";
import MYSQL from "./assets/library-icons/mysql-original.svg";
import NEXTJS from "./assets/library-icons/nextjs-line.svg";
import NODEJS from "./assets/library-icons/nodejs-original.svg";
import PYTHON from "./assets/library-icons/python-original.svg";
import PYTORCH from "./assets/library-icons/pytorch-original.svg";
import REACT from "./assets/library-icons/react-original.svg";
import REDUX from "./assets/library-icons/redux-original.svg";
import SPRING from "./assets/library-icons/spring-original.svg";
import TENSORFLOW from "./assets/library-icons/tensorflow-original.svg";
import TYPESCRIPT from "./assets/library-icons/typescript-original.svg";
import TAILWIND from "./assets/library-icons/tailwind-plain.svg";
import NPM from "./assets/tool-icons/npm-original-wordmark.svg";
import UBUNTU from "./assets/tool-icons/ubuntu-plain.svg";
import GIT from "./assets/tool-icons/git-original.svg";
import VSCODE from "./assets/tool-icons/vscode-original.svg";
import WINDOWS from "./assets/tool-icons/windows8-original.svg";
import GITHUB from "./assets/tool-icons/github-original.svg";
import LINUX from "./assets/tool-icons/linux-original.svg";
import DOCKER from "./assets/tool-icons/docker-original.svg";
import AWS from "./assets/tool-icons/amazonwebservices-original.svg";
import AZURE from "./assets/tool-icons/azure-original.svg";
import YARN from "./assets/tool-icons/yarn-original.svg";

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { CiViewTimeline } from 'react-icons/ci';
import { FaBusinessTime } from 'react-icons/fa';
import {MdOutlineContactMail} from 'react-icons/md'

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa'


export const soloProjects = [
  {
    id: 4,
    title: 'Expense Tracker',
    img: IMG4,
    description: 'A Web App Developed to keep track of expenses.',
    technologies: 'React | JavaScript(ES6) | CSS Modules',
    link: 'https://kingjulius.github.io/expense-tracker/',
    github: 'https://github.com/KingJulius/expense-tracker',
  },
  {
    id: 1,
    title: 'Food Dish Classifier',
    img: IMG1,
    description:
      'Website that allows users to upload image of their dish and it returns the label along with the confidence score.',
    technologies: 'Python | TensorFlow | Flask | React| NGINX | AWS EC2',
    link: '',
    github: 'https://github.com/KingJulius/Predict-that-Dish',
  },
  {
    id: 2,
    title: 'Minesweeper Java Application',
    img: IMG2,
    description:
      'A GUI game using a client/server architecture to load and save an instance of the game and to display the top scores.',
    technologies: 'Java | Swing | SQLite',
    link: '',
    github: 'https://github.com/KingJulius/Minesweeper',
  },
  {
    id: 3,
    title: 'Digit Classification using Real-Time Image Feed',
    img: IMG3,
    description: 'Digit Classification using Real-Time Image Feed.',
    technologies: 'Python | OpenCV | Keras| TensorFlow',
    link: '',
    github: 'https://github.com/KingJulius/Real-Time-Digit-Classification',
  },
];

export const exp = [
  {position:`Software Eng Intern`,  company:"NBA", dates:"Jun 2022 – Aug 2022", location:"New York, USA", img:NBA},
  {position:"Analyst",  company:"KPMG", dates:"Jul 2018 – Aug 2020", location:`Bengaluru, India`, img:KPMG},
  {position:"Software Dev Intern",  company:"Honeywell Technology Solutions", dates:"Jan 2018 – Jun 2018", location:"Bengaluru, India", img:HONEYWELL},
];

export const langauges = [
  {id:1, title:'PYTHON', img:PYTHON},
  {id:2, title:'JAVASCRIPT', img:JAVASCRIPT},
  {id:3, title:'TYPESCRIPT', img:TYPESCRIPT},
  {id:4, title:'REACT', img:REACT},
  {id:5, title:'REDUX', img:REDUX},
  {id:6, title:'NEXTJS', img:NEXTJS},
  {id:7, title:'NODEJS', img:NODEJS},
  {id:8, title:'EXPRESS', img:EXPRESS},
  {id:9, title:'DJANGO', img:DJANGO},
  {id:10, title:'FLASK', img:FLASK},
  {id:11, title:'HTML', img:HTML},
  {id:12, title:'CSS', img:CSS},
  {id:13, title:'MONGODB', img:MONGODB},
  {id:14, title:'TENSORFLOW', img:TENSORFLOW},
  {id:15, title:'PYTORCH', img:PYTORCH},
  {id:16, title:'JAVA', img:JAVA},
  {id:17, title:'MARKDOWN', img:MARKDOWN},
  {id:18, title:'SPRING', img:SPRING},
  {id:19, title:'C', img:C},
  {id:20, title:'TAILWIND CSS', img:TAILWIND}
];

export const tools =[
  {id:1, title:'NPM', img:NPM},
  {id:2, title:'UBUNTU', img:UBUNTU},
  {id:3, title:'GIT', img:GIT},
  {id:4, title:'VSCODE', img:VSCODE},
  {id:5, title:'WINDOWS', img:WINDOWS},
  {id:6, title:'MYSQL', img:MYSQL},
  {id:7, title:'GITHUB', img:GITHUB},
  {id:8, title:'LINUX', img:LINUX},
  {id:9, title:'DOCKER', img:DOCKER},
  {id:10, title:'AWS', img:AWS},
  {id:11, title:'AZURE', img:AZURE},
  {id:12, title:'YARN', img:YARN}
];

export const contents =[
  {id:1, section:'home', icon:<AiOutlineHome />, title:'Home'},
  {id:2, section:'about', icon:<AiOutlineUser />, title:'About'},
  {id:3, section:'experience', icon:<BiBook />, title:'Skills'},
  {id:4, section:'timeline', icon:<CiViewTimeline />, title:'Experience'},
  {id:5, section:'portfolio', icon:<FaBusinessTime />, title:'Projects'},
  {id:6, section:'contact', icon:<MdOutlineContactMail />, title:'Contact'},
];

export const links = [
  {id:1, title:'LinkedIn', url:'https://www.linkedin.com/in/julius-dsouza/', icon:<BsLinkedin />},
  {id:2, title:'GitHub', url:'https://github.com/KingJulius', icon:<FaGithub />},
  {id:3, title:'Twitter', url:'https://twitter.com/jsdsz', icon:<FaTwitterSquare />},
];

export const summary = "Experience in developing scalable websites and applications using a wide range of modern technologies and frameworks. Comprehensive experience in designing and developing high-quality deliverables for large enterprises/clients. Highly adept at both independent and collaborative projects, with an emphasis on landing pages and website development.";
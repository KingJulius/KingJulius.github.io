import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Timeline from './components/timeline/Timeline';
import Topbar from './components/topbar/Topbar';
import { links, contents, summary, langauges, tools, exp, soloProjects } from "./data.js";

const App = () => {
  return (
    <>
      <Header links={links}/>
      <Topbar contents={contents}/>
      <Intro summary={summary}/>
      <Experience langauges={langauges} tools={tools}/>
      <Timeline exp={exp}/>
      <Portfolio soloProjects={soloProjects}/>
      <Contact />
      <Footer links={links} contents={contents}/>
    </>
  )
}

export default App

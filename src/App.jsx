import { useState, useEffect, useRef } from "react";

import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const refs = {
    heroRef: useRef(),
    aboutMeRef: useRef(),
    projectsRef: useRef(),
    blogRef: useRef(),
    contactRef: useRef(),
  };

  return (
    <>
      <Nav width={width} refs={refs} />
      <Hero width={width} heroRef={refs.heroRef} />
      <AboutMe width={width} aboutMeRef={refs.aboutMeRef} />
      <Projects width={width} projectsRef={refs.projectsRef} />
      <Blog blogRef={refs.blogRef} />
      <Contact contactRef={refs.contactRef} />
    </>
  );
}

export default App;

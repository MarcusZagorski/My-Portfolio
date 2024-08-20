import { useState, useEffect } from "react";

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

  return (
    <>
      <Nav width={width} />
      <Hero width={width} />
      <AboutMe width={width} />
      <Projects width={width} />
      <Blog />
      <Contact />
    </>
  );
}

export default App;

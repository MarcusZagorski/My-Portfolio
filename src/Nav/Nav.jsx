/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Nav.css";
import LogoDesign from "../assets/logo-design.png";
import { motion, useInView } from "framer-motion";

const Nav = ({ width, refs }) => {
  const links = [
    { link: "Home", ref: refs.heroRef, inView: useInView(refs.heroRef) },
    { link: "About", ref: refs.aboutMeRef, inView: useInView(refs.aboutMeRef) },
    {
      link: "Projects",
      ref: refs.projectsRef,
      inView: useInView(refs.projectsRef),
    },
    { link: "Blog", ref: refs.blogRef, inView: useInView(refs.blogRef) },
  ];

  const [hamburgerClicked, isHamburgerClicked] = useState(false);

  const handleHamburger = () => {
    isHamburgerClicked(!hamburgerClicked);
  };

  return width >= 932 ? (
    <nav>
      <img
        src={LogoDesign}
        alt="My logo displaying my initials MZ (Marcus Zagorski)"
      />
      <ul>
        {links.map((link, index) => {
          return (
            <>
              <li
                key={index}
                onClick={() => {
                  link.ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                style={link.inView ? { color: "#cec0da" } : { color: "white" }}
              >
                <p className="link">{link.link}</p>
                <div className="filled"></div>
              </li>
            </>
          );
        })}
      </ul>
      <button
        className="contactme-btn"
        onClick={() => {
          refs.contactRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        CONTACT ME
      </button>
    </nav>
  ) : (
    <>
      <nav>
        <motion.img
          src={LogoDesign}
          alt="My logo displaying my initials MZ (Marcus Zagorski)"
        />
        <div
          className="hamburger"
          onClick={() => handleHamburger()}
          style={
            hamburgerClicked
              ? { background: "none" }
              : { background: "linear-gradient(#a466d9, #62318c)" }
          }
        >
          <motion.span
            className="hamburger-menu"
            animate={
              hamburgerClicked
                ? { transform: "translate(0px, 8px) rotate(45deg)" }
                : { transform: "translate(0px, 0px) rotate(0)" }
            }
          ></motion.span>
          <motion.span
            className="hamburger-menu"
            initial={{ opacity: 1 }}
            animate={hamburgerClicked ? { opacity: 0 } : { opacity: 1 }}
          ></motion.span>
          <motion.span
            className="hamburger-menu"
            animate={
              hamburgerClicked
                ? { transform: "translate(0px, -8px) rotate(-45deg)" }
                : { transform: "translate(0px, 0px) rotate(0)" }
            }
          ></motion.span>
        </div>
      </nav>
      <motion.div
        className="hamburger-open-menu"
        animate={
          hamburgerClicked
            ? { width: "100vw", height: "100vh", background: "rgb(106 67 137)" }
            : { width: "0", height: "0", background: "none" }
        }
      >
        <div className="hamburger-menu-list">
          {links.map((link, index) => (
            <motion.p
              key={index}
              animate={hamburgerClicked ? { opacity: 1 } : { opacity: 0 }}
              onClick={() => {
                link.ref.current.scrollIntoView({
                  behavior: "smooth",
                });
                isHamburgerClicked(!hamburgerClicked);
              }}
            >
              {link.link}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Nav;

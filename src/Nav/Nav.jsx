/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Nav.css";
import LogoDesign from "../assets/logo-design.png";
import { useInView } from "framer-motion";

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
  ) : !hamburgerClicked ? (
    <nav>
      <img
        src={LogoDesign}
        alt="My logo displaying my initials MZ (Marcus Zagorski)"
      />
      <div className="hamburger" onClick={handleHamburger}>
        <span className="hamburger-menu"></span>
        <span className="hamburger-menu"></span>
        <span className="hamburger-menu"></span>
      </div>
    </nav>
  ) : (
    <div className="mobile-nav-container">
      <nav className="hamburger-open">
        <img
          src={LogoDesign}
          alt="My logo displaying my initials MZ (Marcus Zagorski)"
        />
        <div className="hamburger" onClick={handleHamburger}>
          <span className="hamburger-closed"></span>
          <span className="hamburger-closed"></span>
        </div>
      </nav>

      <div className="links-container">
        {links.map((link, index) => {
          return (
            <p
              onClick={() => {
                link.ref.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                isHamburgerClicked(false);
              }}
              style={link.inView ? { color: "#cec0da" } : { color: "white" }}
              key={index}
            >
              {link.link}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;

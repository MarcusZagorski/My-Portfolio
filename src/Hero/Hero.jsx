/* eslint-disable react/prop-types */
import "./Hero.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import ImageOfMe from "../assets/button-of-me.png";

const Hero = ({ width, heroRef, projectsRef, contactRef }) => {
  const clickTo = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const contactMe = [
    {
      icon: "mingcute:github-fill",
      link: "https://www.github.com/MarcusZagorski",
    },
    {
      icon: "ri:linkedin-fill",
      link: "https://www.linkedin.com/in/marcus-zagorski",
    },
    {
      icon: "mingcute:whatsapp-fill",
      link: "https://wa.me/+447511173832",
    },
    {
      icon: "prime:twitter",
      link: "https://x.com/matszCoder",
    },
  ];
  return width >= 932 ? (
    <>
      <main className="hero" ref={heroRef}>
        <div className="hero-container">
          <div>
            <p className="name">MARCUS ZAGORSKI</p>
            <h1>
              Full Stack Developer <br />& Graphic Designer
            </h1>
            <p className="sub-head">
              Creating stunning & functional web experiences with HTML, CSS, JS,
              React, NodeJS & Figma
            </p>
            <button
              className="view-work-btn"
              onClick={() => clickTo(projectsRef)}
            >
              VIEW MY WORK
            </button>
          </div>
          <div>
            <img src={ImageOfMe} alt="Circular image of me" />
          </div>
          <div className="social-media-icons">
            <div className="social-media-container">
              {contactMe.map((contact, index) => {
                return (
                  <>
                    <a href={contact.link} target="_blank">
                      <Icon key={index} icon={contact.icon}></Icon>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  ) : (
    <>
      <main>
        <div className="hero-container">
          <p className="name">MARCUS ZAGORSKI</p>

          <div>
            <img src={ImageOfMe} alt="Circular image of me" />
          </div>

          <div>
            <h1>
              Full Stack Developer <br />& Graphic Designer
            </h1>
            <p className="sub-head">
              Creating stunning & functional web experiences with HTML, CSS, JS,
              React, NodeJS & Figma
            </p>
          </div>

          <div className="cta-btns">
            <button
              className="view-work-btn"
              onClick={() => clickTo(projectsRef)}
            >
              VIEW MY WORK
            </button>
            <button
              className="contactme-btn"
              onClick={() => clickTo(contactRef)}
            >
              CONTACT ME
            </button>
          </div>

          <div className="social-media-icons">
            <div className="social-media-container">
              {contactMe.map((contact, index) => {
                return (
                  <>
                    <a href={contact.link} target="_blank">
                      <Icon key={index} icon={contact.icon}></Icon>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;

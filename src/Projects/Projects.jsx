import "./Projects.css";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Projects = ({ width }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  let projects = [
    {
      projectNum: 1,
      projectTitle: "Youtube Video Recommendations",
      projectSummary:
        "I Developed a YouTube app that enables users to add videos to a database. Additionally, I enhanced the functionality by offering users the option to customise video titles or remain using the default YouTube title.",
      builtUsing: [
        "mdi:react",
        "flowbite:css-solid",
        "mdi:nodejs",
        "akar-icons:postgresql-fill",
      ],
      imageClass: "fs-project",
    },
    {
      projectNum: 2,
      projectTitle: "Chat-Server",
      projectSummary:
        "Developed a Chat server application that allows users to send messages back and forth, and delete messages at their own leisure via a server hosted on Glitch. All messages come with an automatic time stamp, alongside an aesthetically pleasing design.",
      builtUsing: ["mdi:react", "mdi:nodejs", "flowbite:css-solid"],
      imageClass: "chat-server",
    },
    {
      projectNum: 3,
      projectTitle: "High Scores Table",
      projectSummary:
        "Developed an application displaying regional high scores. My approach for this project was to showcase my responsive design implementation. The project aimed to demonstrate proficiency in crafting adaptive user interfaces tailored to diverse screen sizes and devices.",
      builtUsing: ["mdi:react", "flowbite:css-solid"],
      imageClass: "high-scores",
    },
    {
      projectNum: 4,
      projectTitle: "Cakes-Co",
      projectSummary: "N/A",
      builtUsing: ["mdi:react", "flowbite:css-solid"],
      imageClass: "cakes-co",
    },
  ];
  return (
    <section className="projects">
      <h1>
        PRO<span>JECTS</span>
      </h1>
      <div className="projects-container">
        {width >= 932 ? (
          <>
            <p className="project-number">
              #{projects[projectIndex].projectNum}
            </p>
            <div className="projects-inner-container">
              <div
                className="projects-arrows"
                onClick={() =>
                  setProjectIndex(projectIndex > 0 ? projectIndex - 1 : 3)
                }
              >
                <Icon icon="solar:arrow-left-broken"></Icon>
              </div>
              <div className="project-info-container">
                <div className="project-info">
                  <h2>{projects[projectIndex].projectTitle}</h2>
                  <p className="project-summary">
                    {projects[projectIndex].projectSummary}
                  </p>
                  <p className="build-info">
                    Built using:{" "}
                    {projects[projectIndex].builtUsing.map((build, index) => {
                      return <Icon key={index} icon={build}></Icon>;
                    })}
                  </p>
                  <div className="project-btns">
                    <button>Live View</button>
                    <button>Github</button>
                  </div>
                </div>
                <div
                  className={`project-img ${projects[projectIndex].imageClass}`}
                ></div>
              </div>
              <div
                className="projects-arrows"
                onClick={() =>
                  setProjectIndex(projectIndex < 3 ? projectIndex + 1 : 0)
                }
              >
                <Icon icon="solar:arrow-right-broken"></Icon>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="projects-inner-container">
              <div className="project-arrows-container">
                <div
                  className="projects-arrows"
                  onClick={() =>
                    setProjectIndex(projectIndex > 0 ? projectIndex - 1 : 3)
                  }
                >
                  <Icon icon="solar:arrow-left-broken"></Icon>
                </div>

                <div
                  className="projects-arrows"
                  onClick={() =>
                    setProjectIndex(projectIndex < 3 ? projectIndex + 1 : 0)
                  }
                >
                  <Icon icon="solar:arrow-right-broken"></Icon>
                </div>
              </div>

              <div className="project-info">
                <h2>{projects[projectIndex].projectTitle.toUpperCase()}</h2>
                <p className="project-summary">
                  {projects[projectIndex].projectSummary}
                </p>
                <div
                  style={{ backgroundSize: "cover", borderRadius: "80px" }}
                  className={`${projects[projectIndex].imageClass}`}
                ></div>

                <div className="built-using-container">
                  <p className="build-info">Built using:</p>
                  {projects[projectIndex].builtUsing.map((build, index) => {
                    return <Icon key={index} icon={build}></Icon>;
                  })}
                  <div className="project-btns">
                    <button>LIVE VIEW</button>
                    <button>GITHUB</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;

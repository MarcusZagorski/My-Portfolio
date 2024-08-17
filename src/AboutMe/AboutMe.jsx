import "./AboutMe.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = ({ width }) => {
  const projects = [
    {
      svgIcon: "ant-design:api-filled",
      projectTitle: "RESPONSIVE WEB DESIGN",
      projectParagraph:
        "Created responsive web pages using HTML, CSS, and JavaScript.",
    },
    {
      svgIcon: "mdi:responsive",
      projectTitle: "API INTEGRATION",
      projectParagraph: "Developed endpoints and integrated third-party APIs.",
    },
    {
      svgIcon: "teenyicons:screen-solid",
      projectTitle: "FULL STACK APPLICATION",
      projectParagraph: "Developed endpoints and integrated third-party APIs.",
    },
  ];

  return (
    <section className="about-me">
      {width >= 932 && (
        <svg
          width="135"
          height="508"
          viewBox="0 0 135 508"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow"
        >
          <path
            d="M43.9138 0.0897477C63.7785 -0.281636 87.4864 8.9509 91.2181 32.1422C95.4121 58.2063 71.9308 78.4786 58.1736 96.6263C52.5311 104.07 42.66 114.265 47.3722 124.746C51.7921 134.576 67.3587 137.191 76.1834 139.92C96.5344 146.213 129.151 159.94 110.434 187.289C97.4652 206.238 74.7233 215.904 59.36 232.369C49.6865 242.735 45.1291 248.235 60.4101 252.288C72.881 255.596 86.7478 257.646 97.463 265.718C119.556 282.364 96.6943 303.954 82.4167 316.722C76.7179 321.819 45.4616 343.525 48.6448 351.858C50.9179 357.809 80.967 364.902 86.6756 368.545C95.5451 374.207 104.653 382.561 106.3 393.783C110.203 420.39 78.0402 438.361 78.9969 465.748C90.164 454.822 99.9323 442.187 112.087 432.428C119.33 426.612 142.246 412.762 132.716 434.339C126.348 448.758 113.414 462.587 103.998 474.985C97.3081 483.794 87.3193 502.519 76.9657 506.864C64.443 512.12 52.8793 497.874 44.9257 489.849C33.6546 478.476 22.3375 467.419 11.6868 455.353C7.57836 450.698 -2.09781 442.856 0.408653 435.823C3.43108 427.343 13.5318 430.799 18.8777 433.822C25.2099 437.404 30.5433 443.318 35.9985 448.165C38.7842 450.64 50.669 464.486 54.51 464.081C53.0858 464.232 58.5977 441.416 59.6311 439.057C65.0155 426.764 74.3074 418.109 81.0604 406.875C96.154 381.767 50.2516 379.028 37.3411 368.778C14.0481 350.284 38.0246 327.321 53.6338 314.458C63.6885 306.173 75.9482 298.822 84.0395 288.197C91.8104 277.993 80.9937 277.54 70.9619 274.744C53.7111 269.936 22.5609 267.722 30.2092 240.003C37.2844 214.361 67.6524 200.269 85.4032 184.153C95.4525 175.029 98.8946 172.19 85.3773 165.866C73.2091 160.173 59.7104 158.673 47.6555 152.652C25.4507 141.561 18.5714 118.961 31.4315 97.0027C40.4155 81.6625 84.2369 47.7552 68.604 27.8738C59.7378 16.5977 43.5527 19.9389 32.7019 13.9518C17.0187 5.29802 34.6865 0.0897477 43.9138 0.0897477C54.7138 -0.112185 40.7521 0.0897477 43.9138 0.0897477Z"
            fill="url(#paint0_linear_132_210)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_132_210"
              x1="67.1143"
              y1="8.53551e-06"
              x2="67.1145"
              y2="560.552"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A466D9" />
              <stop offset="1" stopColor="#62318C" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <h1 className="who-am-i">
        WHO AM <span>I</span>?
      </h1>
      <div className="who-am-i-container">
        <div className="background">
          <h1>Background</h1>
          <p>
            Hi, I&apos;m Marcus Zagorski, a passionate Full Stack Developer &
            Graphic Designer. After studying IT in the UK, I completed an
            intensive coding program with Code Your Future. My journey into web
            development and design began with a love for creating functional and
            visually appealing websites, driven by the endless possibilities of
            technology.
          </p>
          <hr />
        </div>
        <div className="skills-and-tech">
          <h1>Skills & Technologies</h1>
          <div className="skills-container">
            <div className="html-svg">
              <Icon icon="flowbite:html-solid"></Icon>
            </div>
            <div className="css-svg">
              <Icon icon="flowbite:css-solid"></Icon>
            </div>
            <div className="js-svg">
              <Icon icon="ri:javascript-fill"></Icon>
            </div>
            <div className="react-svg">
              <Icon icon="mdi:react"></Icon>
            </div>
            <div className="nodejs-svg">
              <Icon icon="mdi:nodejs"></Icon>
            </div>
            <div className="postgresql-svg">
              <Icon icon="akar-icons:postgresql-fill"></Icon>
            </div>
            <div className="photoshop-svg">
              <Icon icon="mage:photoshop"></Icon>
            </div>
            <div className="figma-svg">
              <Icon icon="solar:figma-bold-duotone"></Icon>
            </div>
          </div>
          <hr />
        </div>
        <div className="about-me-projects">
          <h1>Projects</h1>
          <div className="about-me-projects-container">
            {projects.map((project, index) => {
              return (
                <div key={index} className="project">
                  <Icon icon={project.svgIcon}></Icon>
                  <p className="project-title">{project.projectTitle}</p>
                  <p className="project-paragraph">
                    {project.projectParagraph}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="lets-connect">
            If you&apos;re looking for a skilled professional to bring your web
            projects to life, <a href="#">let&apos;s connect!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

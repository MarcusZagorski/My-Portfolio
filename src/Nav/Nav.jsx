import "./Nav.css";

const Nav = ({ width }) => {
  const links = ["Home", "About", "Projects", "Blog"];

  return width >= 932 ? (
    <nav>
      <img
        src="/logo-design.png"
        alt="My logo displaying my initials MZ (Marcus Zagorski)"
      />
      <ul>
        {links.map((link, index) => {
          return (
            <>
              <li key={index}>
                <a href="#">
                  <p className="link">{link}</p>
                  <div className="filled"></div>
                </a>
              </li>
            </>
          );
        })}
      </ul>
      <button className="contactme-btn">CONTACT ME</button>
    </nav>
  ) : (
    <nav>
      <img
        src="/logo-design.png"
        alt="My logo displaying my initials MZ (Marcus Zagorski)"
      />
      <div className="hamburger">
        <span className="hamburger-menu"></span>
        <span className="hamburger-menu"></span>
        <span className="hamburger-menu"></span>
      </div>
    </nav>
  );
};

export default Nav;

import "./Nav.css";

const Nav = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  return (
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
    </nav>
  );
};

export default Nav;

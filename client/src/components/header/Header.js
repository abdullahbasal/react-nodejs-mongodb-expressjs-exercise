import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../user-context/UserContext";
import DarkMode from "../darkmode/DarkMode";
import logo from "../../assets/images/logo.png";
import { API_URL } from "../../config";

export default function Header() {
  const {
    setUserInfo,
    userInfo,
    about,
    games,
    apps,
    contact,

    scrollToSection,
  } = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    fetch(`${API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="logo">
            <img
              src={logo}
              style={{ height: "66px", width: "66px" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav margin-auto mb-2 mb-lg-0">
              {location.pathname === "" || location.pathname === "/" ? (
                <>
                  <ul>
                    {username && (
                      <>
                        <li className="nav-item">
                          <Link to="/create">Create new post</Link>{" "}
                        </li>
                        <li className="nav-item">
                          <a onClick={logout}>Logout ({username})</a>{" "}
                        </li>
                      </>
                    )}
                  </ul>

                  {/* {!username && (
                    <>
                      <Link to="/login">Login</Link>
                      <Link to="/register">Register</Link>
                    </>
                  )} */}

                  <li className="nav-item">
                    <a onClick={() => scrollToSection(about)}>About</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => scrollToSection(games)}>Games</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => scrollToSection(apps)}>Applications</a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => scrollToSection(contact)}>Contact</a>
                  </li>
                  <li className="nav-item" style={{ color: "#F11A7B" }}>
                    <Link to={"/blog"}>Blogs</Link>
                  </li>
                </>
              ) : null}
            </ul>

            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <DarkMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

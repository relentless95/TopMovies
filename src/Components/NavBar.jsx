import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { ThemeContext } from "../utils/Theme";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const [icon, setIcon] = useState(HiMoon);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleIcon = () => {
    console.log("clicked on the icon");
    setIcon((curr) => (curr === HiMoon ? CgSun : HiMoon));
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="navbar-header">
            {/* <h1>TopMovies</h1> */}
            <Link to="/">
              <img src={"/images/logo.png"} alt="logo" className="logo" />
            </Link>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>

          <div
            className="links-container"
            ref={linksContainerRef}
            style={linkStyles}
          >
            <ul className="links" ref={linksRef}>
              {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contactUs">Contact Us</Link> */}

              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                Home
              </NavLink>
              {/* <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                About
              </NavLink> */}
              <NavLink
                to="/search"
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                search
              </NavLink>
              <NavLink
                to="/latest"
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                Latest Movies
              </NavLink>
              <NavLink
                to="/contactUs"
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                Contact Us
              </NavLink>
              <div className="toggle-theme">
                {icon === HiMoon ? (
                  <CgSun
                    onClick={() => {
                      toggleIcon();
                      toggleTheme();
                    }}
                  />
                ) : (
                  <HiMoon
                    onClick={() => {
                      toggleIcon();
                      toggleTheme();
                    }}
                  />
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="spacer"></div> */}
    </>
  );
}

export default NavBar;

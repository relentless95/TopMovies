import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
          {/* <h1>TopMovies</h1> */}
          <Link to="/"><img src={"/images/logo.png"} alt="logo" className="logo"/></Link>
        </div>
        <ul>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contactUs">Contact Us</Link> */}

          <NavLink to="/home" className={({isActive})=> isActive ? "selected": ""}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "selected": ""}> About</NavLink>
          <NavLink to="/contactUs" className={({isActive})=> isActive ? "selected": ""}>Contact Us</NavLink>

        </ul>
      </nav>
      <div className="spacer"></div>
    </>
  );
}

export default NavBar;

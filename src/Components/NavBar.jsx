import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function NavBar({toggleTheme}) {
  const [icon, setIcon] = useState(CgSun)
  
  const toggleIcon = () => {
    console.log("clicked on the icon")

    setIcon((curr) => (curr === CgSun ?  HiMoon: CgSun));
    // setTheme2((curr) => (curr === "lighter" ? "darker" : "lighter"));
  };
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
          <NavLink to="/latest" className={({isActive})=> isActive ? "selected": ""}>Latest Movies</NavLink>
          <NavLink to="/contactUs" className={({isActive})=> isActive ? "selected": ""}>Contact Us</NavLink>
          {icon === CgSun? <HiMoon onClick={toggleIcon}/>:<CgSun onClick={toggleIcon}/>}

        </ul>
      </nav>
      <div className="spacer"></div>
    </>
  );
}

export default NavBar;

import React from "react";
import johnW from "../assets/John_Wick_4.mp4";
import johnW2 from "../assets/John_Wick_4.webm";
import { Link } from "react-router-dom";

function ExplorePage() {
  return (
    <div className="vid-container">
      {/* <div className="overlay"></div> */}
      <video className="bg-video bg-video__content"  autoPlay loop muted >
        <source src={johnW} type="video/mp4"/>
        <source src={johnW} type="video/webm"/>
        Your browser is not supported
      </video>
      <div className="content">
        <Link to="/home">
          <h1>Explore</h1>
        </Link>
      </div>
      <div className="bottom-content">
        <p>
          Explore the latest trending movies. This website is powered by the movie
          database
        </p>
      </div>
    </div>
  );
}

export default ExplorePage;

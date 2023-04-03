import React from "react";
import johnW from "../assets/John_Wick_4.mp4";
import { Link } from "react-router-dom";

function ExplorePage() {
  return (
    <div className="vid-container">
      <div className="overlay"></div>
      <video src={johnW} autoPlay loop muted />
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

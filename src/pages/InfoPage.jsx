import React from "react";
import { Link, useParams } from "react-router-dom";

function InfoPage() {
  const { movieId } = useParams();
  console.log("movie-id --->", movieId);
  return (
    <>
      <div>InfoPage</div>
      <Link to='/home'>Back</Link>
    </>
  );
}

export default InfoPage;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function InfoPage() {
  const { movieId } = useParams();
  console.log("movie-id --->", movieId);
  const [oneMovie, setOneMovie] = useState([]);
  const [crew, setCrew] = useState([])
  const [fetching, setFetching] = useState(true);

  // to calculate movie rating
  //   v = 459 (number of votes)
  // m = 25000 (minimum number of votes required to be listed in IMDb's Top Rated Movies)
  // R = 6.856 (average rating)
  // C = 6.9 (mean vote across the whole report)

  // ((v / (v + m)) * R) + ((m / (v + m)) * C) = ((459 / (459 + 25000)) * 6.856) + ((25000 / (459 + 25000)) * 6.9)

  // fetch(`https://api.themoviedb.org/3/movie/<<movieID>>/credits?api_key=<<your_api_key>>`)
  //             .then(response => response.json())
  //             .then((jsonData)=>jsonData.crew.filter(({job})=> job ==='Director'))

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d4f24c1de9b6106c77077a3305aa28f&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setOneMovie(data);
        setFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4d4f24c1de9b6106c77077a3305aa28f&language=en-US`
    ).then((response)=>{
      console.log(response.data)
      const data = response.data;
      setCrew(data);

    })
    .catch((error)=>{
      console.log(error);
    })
  }, [movieId]);

  return (
    <>
      <div>InfoPage</div>
      {fetching && (
        <img src={"/images/spinner2.gif"} alt="spinner" className="spinner" />
      )}

      {!fetching && (
        <>
          <img
            src={
              "https://image.tmdb.org/t/p/original" + `${oneMovie.poster_path}`
            }
            style={{ width: "300px", height: "400px" }}
          />
          <h3>{oneMovie.title}</h3>
          <p>movie rating</p>
          <span>
            {(oneMovie.vote_count / (oneMovie.vote_count + 25000)) *
              oneMovie.vote_average +
              (25000 / (oneMovie.vote_count + 25000)) * 6.9}
          </span>
          <p>{oneMovie.release_date}</p>

          <ul>
            {oneMovie.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>

          <p>{oneMovie.overview}</p>
          <h6>Featured Crew</h6>
          <p>movie length: {oneMovie.runtime}</p>
          <p></p>
        </>
      )}

      <Link to="/home">Back</Link>
    </>
  );
}

export default InfoPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SearchForm from "../Components/SearchForm";

// const url = `https://api.themoviedb.org/3/search/movie?api_key=${
//   import.meta.env.VITE_API_KEY
// }&query=bat&language=en-US`;

const url = `https://api.themoviedb.org/3/search/movie?api_key=${
  import.meta.env.VITE_API_KEY
}`;

// placeholder image:"/images/placeholder-image.jpg"
console.log(url);

function SearchPageNew() {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("batman");

  const FetchMovies = async (url_address) => {
    setIsFetching(true);
    try {
      const response = await axios.get(url_address);
      // console.log(response);
      if (response.data.results == 0) {
        // console.log("OH OH something went wrong");
        setError({
          show: true,
          msg: "movie not found. Please be more specific",
        });

        throw new Error("Movie not found");
        // return;
      } else {
        const data = await response.data.results;
        // console.log("this hererererer---->", data);
        setMovies(data);
        // console.log(movies);
      }

      setIsFetching(false);
      setError({ show: false, msg: "" });
    } catch (error) {
      // console.log("an error occurred")
      console.log("this is the eroooooorrr", error);
    }

    // .then((res) => {
    //   console.log(res);
    //   if (res.status == 200) {
    //     return res.data;
    //   }
    // })
    // .then((data) => {
    //   // console.log("heereeeee......209398")
    //   setMovies(data.results);
    //   setIsFetching(false);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    console.log("the movies---->", movies);
    console.log("the error---->", error.msg);
  };

  useEffect(() => {
    FetchMovies(`${url}&query=${query}&language=en-US`);
  }, [query]);

  return (
    <section className="home-container">
      <SearchForm query={query} setQuery={setQuery} error={error} />

      {isFetching ? (
        <img src={"/images/spinner2.gif"} alt="spinner" className="spinner" />
      ) : (
        <div className="main-container">
          {movies.map((movie) => {
            console.log(movie);
            // const {movieId: id, poster: poster}
            const {
              id: movieId,
              poster_path: poster,
              title: title,
              release_date: date,
              vote_average: score,
              original_language: language,
            } = movie;
            return (
              <div className="card" key={movie.id}>
                {poster == null ? (
                  <Link to={`/movie/${movieId}`}>
                    <img
                      src={"/images/placeholder-image.jpg"}
                      alt="placeholder"
                      className="card-image"
                    />
                  </Link>
                ) : (
                  <Link to={`/movie/${movieId}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${poster}`}
                      alt="image"
                      className="card-image"
                      // style={{ height: "400px", width: "300px" }}
                    />
                  </Link>
                )}
                <div className="card-content">
                  <div className="movie-title">
                    <p>{title}</p>
                  </div>
                  <p>language: {language}</p>
                  <div className="card-info">
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                      score: {Math.round(score * 10) / 10}
                    </div>
                    <div>release date: {date}</div>
                  </div>
                </div>
                <div className="button-container">
                  {/* <button className="card-button">more info</button> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default SearchPageNew;

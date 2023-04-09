import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

function InfoPage() {
  const { movieId } = useParams();
  console.log("movie-id --->", movieId);
  const [oneMovie, setOneMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [producers, setProducers] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [videosArr, setVideosArr] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [fetching, setFetching] = useState(true);

  // to calculate movie rating
  //   v = 459 (number of votes)
  // m = 25000 (minimum number of votes required to be listed in IMDb's Top Rated Movies)
  // R = 6.856 (average rating)
  // C = 6.9 (mean vote across the whole report)

  // ((v / (v + m)) * R) + ((m / (v + m)) * C) = ((459 / (459 + 25000)) * 6.856) + ((25000 / (459 + 25000)) * 6.9)

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
    )
      .then((response) => {
        // console.log(response.data)
        const data = response.data;
        const producerData = data.crew.filter(
          (crewMember) => crewMember.job === "Producer"
        );
        setCredits(data);
        setProducers(producerData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4d4f24c1de9b6106c77077a3305aa28f&language=en-US`
    )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const videoData = data.results.filter(
          (video) => video.name == "Official Trailer"
        );
        setTrailer(videoData);
        setVideosArr(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);
  console.log(trailer);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=4d4f24c1de9b6106c77077a3305aa28f&&include_image_language=en,null`
    )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setMovieImages(data.backdrops);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);
  // console.log("movie images are", movieImages)

  // console.log(credits)
  // console.log(credits.crew);
  // console.log("producers are:", producers);
  // console.log(credits.cast.slice(0,5))

  // console.log("videosArr is: ",videosArr)

  return (
    <>
      <div>InfoPage</div>
      {fetching && (
        <img src={"/images/spinner2.gif"} alt="spinner" className="spinner" />
      )}

      {!fetching &&
        trailer.length > 0 &&
        producers.length > 0 &&
        movieImages.length > 0 && (
          <>
            <img
              src={
                "https://image.tmdb.org/t/p/original" +
                `${oneMovie.poster_path}`
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
            <p>movie length: {oneMovie.runtime}</p>

            <h6>Featured Crew</h6>
            <div>
              {producers.length > 0 &&
                producers.slice(0, 3).map((obj) => {
                  return <p key={obj.id}>{obj.name}</p>;
                })}
            </div>
            <div>
              {trailer.length > 0 && (
                <a
                  href={`https://www.youtube.com/watch?v=${trailer[0]["key"]}`}
                  target="_blank"
                >
                  video
                </a>
              )}
            </div>
            <div>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer[0]["key"]}`}
                playing
                controls
                volume={0.3}
                light={true}
              />
            </div>

            <h6>cast info</h6>
            <div className="info-container">
              {credits.cast.slice(0, 5).map((actor) => {
                return (
                  <div className="actor-card" key={actor.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w185/" +
                        `${actor.profile_path}`
                      }
                      alt="actor"
                    />
                    <div className="actorcard-content">
                      <p>{actor.name}</p>
                      <p>character: {actor.character}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p>images</p>
            <div className="images-container">
              {movieImages.slice(0, 7).map((movie) => {
                return (
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w342/" + `${movie.file_path}`
                    }
                  />
                );
              })}
            </div>
          </>
        )}

      <Link to="/home">Back</Link>
    </>
  );
}

export default InfoPage;

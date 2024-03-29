import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCirclePlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import MovieImages from "../Components/MovieImages";

function InfoPage() {
  const { movieId } = useParams();
  console.log("movie-id --->", movieId);
  const [oneMovie, setOneMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  // const [producers, setProducers] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [videosArr, setVideosArr] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [isfetchingMovies, setFetchingMovies] = useState(true);
  const [isfetchingCredits, setFetchingCredits] = useState(true);
  const [isfetchingVideos, setFetchingVideos] = useState(true);
  const [isfetchingImages, setFetchingImages] = useState(true);
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;

  // to calculate movie rating
  //   v = 459 (number of votes)
  // m = 25000 (minimum number of votes required to be listed in IMDb's Top Rated Movies)
  // R = 6.856 (average rating)
  // C = 6.9 (mean vote across the whole report)

  // ((v / (v + m)) * R) + ((m / (v + m)) * C) = ((459 / (459 + 25000)) * 6.856) + ((25000 / (459 + 25000)) * 6.9)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        const data = response.data;

        setOneMovie(data);
        setFetchingMovies(false); // <----- comment this out
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => {
        // console.log(response.data)
        const data = response.data;
        const producerData = data.crew.filter(
          (crewMember) => crewMember.job === "Producer"
        );
        setCredits(data);
        // setProducers(producerData);
        setFetchingCredits(false); // <----- comment this out
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const videoData = data.results.filter(
          (video) => video.name == "Official Trailer"
        );
        console.log("videoData is:", videoData);
        if (videoData.length == 0) {
          console.log("video not found"); // to remove
          const trailerData = data.results.find((trailer) => {
            console.log("the trailer found is:", trailer);
            return trailer.type == "Trailer";
          });
          console.log("trailer is", trailerData);
          console.log("video data is:", videoData);

          // const trailerDataFinal = [trailerData]

          // will probably delete this smal block
          if (trailerData.length == undefined) {
            console.log("trailer exists", trailerData);
            setTrailer([trailerData]);
            console.log("what i am looking for", trailer);
          } else {
            // console.log("reached here in the else block")
            setTrailer([]);
          }
          //delete until here

          // setTrailer([trailerData]);
          console.log(trailer);
        }
        // add else if statement here
        else if (videoData.length == 0) {
          setTrailer([]);
          console.log("reached here");
        } else {
          setTrailer(videoData);
        }
        setVideosArr(data.results);
        setFetchingVideos(false); // <----- comment this out
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  console.log("the trailer is:", trailer.length);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}&include_image_language=en,null`
    )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setMovieImages(data.backdrops);
        setFetchingImages(false); // <----- comment this out
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);
  console.log("movie images are", movieImages);

  // console.log("credits is", credits.length)
  console.log("credits is", credits);

  // console.log(credits.crew);
  // console.log("producers are:", producers);
  // console.log(credits.cast.slice(0,5))

  // console.log("videosArr is: ",videosArr)

  return (
    <section className="home-container">
      <div className="info-main-container">
        {/* <h1>InfoPage</h1> */}
        {isfetchingMovies &&
          isfetchingCredits &&
          isfetchingVideos &&
          isfetchingImages && (
            <div className="center-spinner">
              <img
                src={"/images/spinner2.gif"}
                alt="spinner"
                className="spinner"
              />
            </div>
          )}

        {!isfetchingMovies &&
          !isfetchingCredits &&
          !isfetchingVideos &&
          !isfetchingImages && (
            // trailer.length > 0 &&
            // credits !== undefined &&
            // producers.length > 0 &&
            // movieImages.length > 0 &&
            <>
              <div className="details-container">
                <div>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" +
                      `${oneMovie.poster_path}`
                    }
                    className="movie-image card-image"
                    // style={{ width: "300px", height: "400px" }}
                  />
                </div>
                <div className="text-details">
                  <h1 className="details-title">{oneMovie.title}</h1>
                  <div className="movie-xtics">
                    <span>
                      movie rating <FontAwesomeIcon icon={faStar} />
                      {Math.round(
                        ((oneMovie.vote_count / (oneMovie.vote_count + 25000)) *
                          oneMovie.vote_average +
                          (25000 / (oneMovie.vote_count + 25000)) * 6.9) *
                          10
                      ) / 10}
                    </span>
                    <span>{oneMovie.release_date}</span>
                    <span>
                      <div>
                        {oneMovie.genres.map((genre) => {
                          return (
                            <p key={genre.id} className="tags">
                              {genre.name}
                            </p>
                          );
                        })}
                      </div>
                    </span>
                  </div>

                  <div className="movie-overview">
                    <p>synopsis: </p>

                    <p>{oneMovie.overview}</p>
                  </div>

                  <div className="runtime">
                    <p>runtime: {oneMovie.runtime} min</p>
                  </div>

                  <h3 className="crew">Featured Crew</h3>
                  <div className="crew-members">
                    {credits?.crew.length == 0 ? (
                      <h1>Nothing in here</h1>
                    ) : (
                      <>
                        {credits?.crew.slice(0, 5).map((member, index) => {
                          return (
                            <div key={index}>
                              <p>{member.name}</p>
                              <p>{member.job}</p>
                            </div>
                          );
                        })}
                      </>
                    )}
                    {/* {credits &&
                  credits?.crew.slice(0, 5).map((member, index) => {
                    return (
                      <div key={index}>
                        <p>{member.name}</p>
                        <p>{member.job}</p>
                      </div>
                    );
                  })} */}
                    {/* {producers.length > 0 &&
                    producers.slice(0, 3).map((obj) => {
                      return (
                        <div key={obj.id}>
                          <p>{obj.name}</p>
                        </div>
                      );
                    })} */}
                  </div>
                  <div className="trailer-link">
                    <button className="trailer-button">
                      {trailer.length == 0 ? (
                        <h1>Link not available</h1>
                      ) : (
                        <a
                          href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faCirclePlay} /> Watch trailer
                        </a>
                      )}
                      {/* {trailer.length > 0 && (
                      <a
                        href={`https://www.youtube.com/watch?v=${trailer[0]["key"]}`}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faCirclePlay} /> Watch trailer
                      </a>
                    )} */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="trailer-section">
                <h1>Watch the trailer here</h1>
                {trailer.length == 0 ? (
                  <h1>Video not available</h1>
                ) : (
                  <div className="video-previewer">
                    {/* video previewer needs to be responsive */}
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
                      playing
                      controls
                      volume={0.3}
                      light={true}
                      width="80%"
                      height = "80%"
                    />
                  </div>
                )}
                {/* <div className="video-previewer">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailer[0]["key"]}`}
                  playing
                  controls
                  volume={0.3}
                  light={true}
                />
              </div> */}
              </div>

              <div className="cast-info">
                <h1>cast info</h1>
                <div className="info-container">
                  {/* {credits ? <h1>No credits available please refresh</h1> : <></>} */}
                  {credits.cast.slice(0, 5).map((actor) => {
                    return (
                      <>
                        <div className="actor-card" key={actor.id}>
                          {/* <h6>{actor.profile_path} </h6> */}
                          {/* {console.log("actor.profile_path", actor.profile_path)} */}
                          {actor.profile_path == null ? (
                            <img
                              src={"/images/Profile_placeholder2.png"}
                              alt="profile image"
                              className="actor-image"
                            />
                          ) : (
                            <img
                              src={
                                "https://image.tmdb.org/t/p/w185/" +
                                `${actor.profile_path}`
                              }
                              alt="actor"
                              className="actor-image"
                            />
                          )}
                          {/* <img
                          src={
                            "https://image.tmdb.org/t/p/w185/" +
                            `${actor.profile_path}`
                          }
                          alt="actor"
                          className="actor-image"
                        /> */}
                          <div className="actorcard-content">
                            <h3>{actor.name}</h3>
                            <p>character: {actor.character}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <h1 className="image-title">Image gallery</h1>
              <MovieImages
                setFetchingImages={setFetchingImages}
                movieId={movieId}
              />
              {/* old methods to get images */}
              {/* {movieImages.length == 0 ? (
                <h1>No images here</h1>
              ) : (
                <div className="images-container">
                  {movieImages?.slice(0, 7).map((movie) => {
                    return (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w400/" +
                          `${movie.file_path}`
                        }
                      />
                    );
                  })}
                </div>
              )} */}
              {/* old method to get images ends here  */}
            </>
          )}

        <button
          onClick={() => navigate(-1)}
          className="back-button"
          title="return to home page"
        >
          Return
          <FontAwesomeIcon icon={faChevronRight} className="chevron-left" />
        </button>
      </div>
    </section>
  );
}

export default InfoPage;

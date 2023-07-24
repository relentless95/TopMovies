import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieImages = ({ setFetchingImages, movieId }) => {
  const [movieImages, setMovieImages] = useState([]);
  const [target, setTarget] = useState(null);

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

  return (
    <div>
      {console.log("movie images--->", movieImages)}
      {movieImages.length == 0 ? (
        <h1>No images here</h1>
      ) : (
        <div className="images-container-new">
          {movieImages?.slice(0, 7).map((movie) => {
            const id = nanoid();
            {
              console.log("this is the movieeeeeeee---->", movie);
            }
            return (
              <img
                onClick={() => {
                  setTarget(movie);
                }}
                className="media"
                key={id}
                src={"https://image.tmdb.org/t/p/w780/" + `${movie.file_path}`}
              />
            );
          })}
        </div>
      )}
      <motion.div
        className="popup-media"
        style={{ display: target ? "block" : "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span onClick={() => setTarget(null)}>&times;</span>
        {target == null ? (
          <div>
            {console.log(target)}
            <h1>No thing here</h1>
          </div>
        ) : (
          <motion.img
            // className="img-motion"
            src={"https://image.tmdb.org/t/p/w1280/" + `${target?.file_path}`}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
          />
        )}
        {/* <img src={"https://image.tmdb.org/t/p/w780/" + `${target.file_path}`} /> */}
      </motion.div>
    </div>
  );
};

export default MovieImages;

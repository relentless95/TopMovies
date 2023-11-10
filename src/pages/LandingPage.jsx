import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const apiURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

const Swiper = React.lazy(() => import("../Components/Swiper"));

const LandingPage = () => {
  const [content, setContent] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const FetchMovies = async (url) => {
    try {
      const response = await axios.get(url);
      console.log("THIS: ", response);
      if (response.data.results == 0) {
        setError("data not returned");
        throw new Error("data not found");
      } else {
        const result = await response.data.results;

        console.log("THIS RESULT", result);
        setData(result);
        console.log("THIS DATA", data);
        setIsFetching(false);
      }
    } catch (error) {
      console.log("This is the errorrrrrr", error);
      setError(error);
    }

    // console.log("the movies---->", data);
    // console.log("the movies---->", error);
  };

  useEffect(() => {
    FetchMovies(apiURL);
  }, []);

  useEffect(()=>{
    data? setContent(data.results) :  setContent(null);
  }, [data])

  return (
    <section style={{ border: "solid red 1px" }}>
      {isFetching ? (
        <img src={"/images/spinner2.gif"} alt="spinner" className="spinner" />
      ) : (
        <div>
          {data.map((movie) => {
            console.log(movie);
            const { title: title } = movie;
            return <p>{title}</p>;
          })}
        </div>
      )}
    </section>
  );
};

export default LandingPage;

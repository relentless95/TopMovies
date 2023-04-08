// import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";

// const apiURL =
//   "https://api.themoviedb.org/3/trending/movie/week?api_key=4d4f24c1de9b6106c77077a3305aa28f";
// function MovieList() {
//   const [fetching, setFetching] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("")

//   useEffect(() => {
//     console.log("useEffect-initial render (Mounting!");
//     axios
//       .get(apiURL)
//       .then((response) => {
//         // console.log("the response is: " , response)
//         // const response = response.data

//         setMovies(response.data.results);
//         setFetching(false);
//         // console.log("the movies array is: " , response.data.results)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   // console.log(movies)

//   return (
//     <>
//       <div>
//         <section className="heading">
//           <h1>Trending movies</h1>
//           <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

//           {fetching && (
//             <img
//               src={"/images/spinner2.gif"}
//               alt="spinner"
//               className="spinner"
//             />
//           )}
//         </section>

//         <div className="main-container">
//           {movies
//           .filter((curr)=>{
//             if(searchTerm ==""){
//               return curr;
//             }
//             if(curr.title.toLowerCase().includes(searchTerm.toLowerCase()))
//             {return curr}
//           })
//           .map((movie) => {
//             return (
//               <div className="card" key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}><img
//                   src={
//                     "https://image.tmdb.org/t/p/original" +
//                     `${movie.poster_path}`
//                   }
//                   alt="image"
//                   className="card-image"
//                 /></Link>
//                 <div className="card-content">
//                   <Link to="/details" className="movie-title">
//                     <p>{movie.title}</p>
//                   </Link>
//                   <p>language: {movie.original_language}</p>
//                   <div className="card-info">
//                     <div>
//                       <FontAwesomeIcon icon={faStar} />
//                       score: {Math.round(movie.vote_average * 10) / 10}
//                     </div>
//                     <div>release date: {movie.release_date}</div>
//                   </div>
//                 </div>
//                 <div className="button-container">
//                   {/* <button className="card-button">more info</button> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default MovieList;

// trial
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const apiURL =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=4d4f24c1de9b6106c77077a3305aa28f";
function MovieList() {
  const [fetching, setFetching] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("useEffect-initial render (Mounting!");
    axios
      .get(apiURL)
      .then((response) => {
        // console.log("the response is: " , response)
        // const response = response.data

        setMovies(response.data.results);
        setFetching(false);
        // console.log("the movies array is: " , response.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(movies)

  return (
    <>
      <div>
        <section className="heading">
          <h1>Trending movies</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

          {fetching && (
            <img
              src={"/images/spinner2.gif"}
              alt="spinner"
              className="spinner"
            />
          )}
        </section>

        <div className="main-container">
          {movies
          .filter((curr)=>{
            if(searchTerm ==""){
              return curr;
            }
            if(curr.title.toLowerCase().includes(searchTerm.toLowerCase()))
            {return curr}
          })
          .map((movie) => {
            return (
              <div className="card" key={movie.id}>
                <Link to={`/movie/${movie.id}`}><img
                  src={
                    "https://image.tmdb.org/t/p/original" +
                    `${movie.poster_path}`
                  }
                  alt="image"
                  className="card-image"
                /></Link>
                <div className="card-content">
                  <Link to="/details" className="movie-title">
                    <p>{movie.title}</p>
                  </Link>
                  <p>language: {movie.original_language}</p>
                  <div className="card-info">
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                      score: {Math.round(movie.vote_average * 10) / 10}
                    </div>
                    <div>release date: {movie.release_date}</div>
                  </div>
                </div>
                <div className="button-container">
                  {/* <button className="card-button">more info</button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MovieList;

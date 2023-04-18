import { useEffect, useState } from "react";
import axios from "axios";

function useMovieSearch(query, pageNumber) {
  const [fetching, setfetching] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);




useEffect(() => {
  setfetching(true);
  console.log("victor is ugly")
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4d4f24c1de9b6106c77077a3305aa28f&language=en-US&page=${pageNumber}`
    )
    .then((response) => {
      console.log("the response data is:",response.data);
    
      setMovies((previousMovies) => {
        return [...new Set([...previousMovies, ...response.data.results])];
      });

      setHasMore(response.data.results.length >0)
      setfetching(false)
    })
    .catch((error)=>{
        console.log("error in the useEffect", error)
        setError(true)
    })
}, [pageNumber]);

console.log("movies are", movies)
return {fetching, error, movies, hasMore}
}


export default useMovieSearch
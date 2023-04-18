import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY


export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
//   /movie/upcoming?api_key=4d4f24c1de9b6106c77077a3305aa28f
//   "https://jsonplaceholder.typicode.com"
});

export const getUpcomingMovies = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`, options);

    // const response = await api.get(`&language=en-US&page=${pageParam}`, options);
//   const response = await api.get(`/posts?_page=${pageParam}`, options);
console.log("the response is: ", response.data.results)
  return response.data;
};

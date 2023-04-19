import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getUpcomingMovies = async (pageParam = 1, options = {}) => {
  const response = await api.get(
    `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`,
    options
  );

  console.log("the response is: ", response.data.results);
  return response.data;
};

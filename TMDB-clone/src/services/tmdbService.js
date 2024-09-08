import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "pt-BR",
  },
});

export const tmdbService = {
  getTrendingMovies: () => tmdbApi.get("/trending/movie/week"),
  getPopularMovies: () => tmdbApi.get("/movie/popular"),
  searchMovies: (query) => tmdbApi.get("/search/movie", { params: { query } }),
  getMovieDetails: (movieId) =>
    tmdbApi.get(`/movie/${movieId}`, {
      params: { append_to_response: "credits" },
    }),
};

import { defineStore } from "pinia";
import { useMovies } from "../composables/useMovies";

export const useMovieStore = defineStore("movie", () => {
  const {
    trendingMovies,
    popularMovies,
    searchResults,
    currentMovie,
    loading,
    error,
    fetchTrendingMovies,
    fetchPopularMovies,
    searchMovies,
    fetchMovieDetails,
  } = useMovies();

  return {
    trendingMovies,
    popularMovies,
    searchResults,
    currentMovie,
    loading,
    error,
    fetchTrendingMovies,
    fetchPopularMovies,
    searchMovies,
    fetchMovieDetails,
  };
});

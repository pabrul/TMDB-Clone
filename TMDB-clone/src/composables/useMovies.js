import { ref, computed } from "vue";
import { tmdbService } from "../services/tmdbService";

export function useMovies() {
  const trendingMovies = ref([]);
  const popularMovies = ref([]);
  const searchResults = ref([]);
  const currentMovie = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchTrendingMovies = async () => {
    loading.value = true;
    try {
      const response = await tmdbService.getTrendingMovies();
      trendingMovies.value = response.data.results;
    } catch (err) {
      error.value = "Falha ao carregar filmes em tendência";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchPopularMovies = async () => {
    loading.value = true;
    try {
      const response = await tmdbService.getPopularMovies();
      popularMovies.value = response.data.results;
    } catch (err) {
      error.value = "Falha ao carregar filmes populares";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const searchMovies = async (query) => {
    loading.value = true;
    try {
      const response = await tmdbService.searchMovies(query);
      searchResults.value = response.data.results;
    } catch (err) {
      error.value = "Falha na busca de filmes";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const fetchMovieDetails = async (movieId) => {
    loading.value = true;
    try {
      const response = await tmdbService.getMovieDetails(movieId, {
        params: {
          append_to_response: "credits", // Certifique-se de adicionar isso
        },
      });
      currentMovie.value = response.data;
    } catch (err) {
      error.value = "Falha ao carregar detalhes do filme";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    trendingMovies: computed(() => trendingMovies.value),
    popularMovies: computed(() => popularMovies.value),
    searchResults: computed(() => searchResults.value),
    currentMovie: computed(() => currentMovie.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    fetchTrendingMovies,
    fetchPopularMovies,
    searchMovies,
    fetchMovieDetails,
  };
}

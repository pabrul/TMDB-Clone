<script setup>
import { onMounted } from "vue";
import { useMovieStore } from "../../stores/movieStore";
import MovieCard from "../molecules/MovieCard.vue";

const movieStore = useMovieStore();

onMounted(() => {
  movieStore.fetchTrendingMovies();
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center text-white">
      Filmes em Tendência
    </h1>
    <div v-if="movieStore.loading" class="text-center py-12">
      <p class="text-3xl text-white">Carregando filmes...</p>
    </div>
    <div v-else-if="movieStore.error" class="text-center py-12">
      <p class="text-xl text-red-400">{{ movieStore.error }}</p>
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <MovieCard
        v-for="movie in movieStore.trendingMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

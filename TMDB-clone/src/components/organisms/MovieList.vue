<script setup>
import { ref, onMounted, computed } from "vue";
import { useMovieStore } from "../../stores/movieStore";
import MovieCard from "../molecules/MovieCard.vue";
import TabSelector from "../molecules/TabSelector.vue";

const movieStore = useMovieStore();
const activeTab = ref("trending");

const tabs = [
  { value: "trending", label: "Tendências" },
  { value: "popular", label: "Os Mais Populares" },
];

const fetchMovies = () => {
  if (activeTab.value === "trending") {
    movieStore.fetchTrendingMovies();
  } else {
    movieStore.fetchPopularMovies();
  }
};

onMounted(() => {
  fetchMovies();
});

const changeTab = (tab) => {
  activeTab.value = tab;
  fetchMovies();
};

const movies = computed(() => {
  return activeTab.value === "trending"
    ? movieStore.trendingMovies
    : movieStore.popularMovies;
});

const title = computed(() => {
  return activeTab.value === "trending"
    ? "Filmes em Tendência"
    : "Filmes Mais Populares";
});
</script>

<template>
  <div>
    <TabSelector :tabs="tabs" :activeTab="activeTab" @change="changeTab" />

    <h1 class="text-4xl font-bold mb-8 text-center text-white">
      {{ title }}
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
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

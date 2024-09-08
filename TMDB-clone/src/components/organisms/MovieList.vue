<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useMovieStore } from "../../stores/movieStore";
import MovieCard from "../molecules/MovieCard.vue";
import TabSelector from "../molecules/TabSelector.vue";
import Search from "../atoms/Search.vue";

const router = useRouter();
const route = useRoute();
const movieStore = useMovieStore();
const activeTab = ref("trending");
const searchQuery = ref("");

const tabs = [
  { value: "trending", label: "Tendências" },
  { value: "popular", label: "Os Mais Populares" },
];

const fetchMovies = () => {
  if (searchQuery.value) {
    movieStore.searchMovies(searchQuery.value);
  } else if (activeTab.value === "trending") {
    movieStore.fetchTrendingMovies();
  } else {
    movieStore.fetchPopularMovies();
  }
};

const updateUrlAndFetch = () => {
  router
    .push({
      query: {
        category: activeTab.value,
        search: searchQuery.value || undefined,
      },
    })
    .catch(() => {}); // Catch any navigation errors
  fetchMovies();
};

const changeTab = (tab) => {
  activeTab.value = tab;
  searchQuery.value = "";
  updateUrlAndFetch();
};

const handleSearch = (query) => {
  searchQuery.value = query;
  updateUrlAndFetch();
};

const movies = computed(() => {
  if (searchQuery.value) {
    return movieStore.searchResults;
  }
  return activeTab.value === "trending"
    ? movieStore.trendingMovies
    : movieStore.popularMovies;
});

const title = computed(() => {
  if (searchQuery.value) {
    return `Resultados para "${searchQuery.value}"`;
  }
  return activeTab.value === "trending"
    ? "Filmes em Tendência"
    : "Filmes Mais Populares";
});

// Use onMounted instead of watch for initial setup
onMounted(() => {
  if (route.query) {
    activeTab.value = route.query.category || "trending";
    searchQuery.value = route.query.search || "";
  }
  fetchMovies();
});

// Watch for route changes after initial mount
watch(
  () => route.query,
  (newQuery) => {
    if (newQuery) {
      activeTab.value = newQuery.category || "trending";
      searchQuery.value = newQuery.search || "";
      fetchMovies();
    }
  }
);
</script>

<template>
  <div>
    <Search
      @search="handleSearch"
      @reset="() => handleSearch('')"
      class="mb-6"
    />

    <TabSelector
      :tabs="tabs"
      :activeTab="activeTab"
      @change="changeTab"
      class="mb-6"
    />

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

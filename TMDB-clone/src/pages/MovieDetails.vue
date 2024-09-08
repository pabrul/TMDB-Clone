<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../stores/movieStore";
import { getImageUrl } from "../utils/movieUtils";

const route = useRoute();
const movieStore = useMovieStore();
const movie = ref(null);

onMounted(async () => {
  const movieId = route.params.id;
  await movieStore.fetchMovieDetails(movieId, {
    append_to_response: "credits",
  });
  movie.value = movieStore.currentMovie;
});
</script>

<template>
  <div v-if="movie" class="movie-details">
    <div class="relative">
      <img
        :src="getImageUrl(movie.backdrop_path, 'original')"
        :alt="movie.title"
        class="w-full h-96 object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-tmdb-dark-blue to-transparent"
      ></div>
    </div>

    <div class="container mx-auto px-4 py-8 -mt-32 relative z-10">
      <div class="flex flex-col md:flex-row">
        <img
          :src="getImageUrl(movie.poster_path, 'w500')"
          :alt="movie.title"
          class="w-64 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8"
        />
        <div class="text-white">
          <h1 class="text-4xl font-bold mb-4">{{ movie.title }}</h1>
          <p class="mb-4">
            {{ movie.release_date }} •
            {{ movie.genres.map((g) => g.name).join(", ") }}
          </p>
          <p class="text-lg mb-4">{{ movie.overview }}</p>
          <div class="mb-4">
            <span class="font-bold">Avaliação:</span>
            {{ movie.vote_average.toFixed(1) }}
          </div>
          <div class="mb-4">
            <span class="font-bold">Duração:</span> {{ movie.runtime }} minutos
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-4 text-white">Elenco Principal</h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <div
          v-if="movie.credits && movie.credits.cast"
          v-for="actor in movie.credits.cast.slice(0, 6)"
          :key="actor.id"
          class="text-center"
        >
          <img
            :src="getImageUrl(actor.profile_path, 'w185')"
            :alt="actor.name"
            class="w-full rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md mb-2"
          />
          <p class="font-semibold text-white">{{ actor.name }}</p>
          <p class="text-sm text-gray-300">{{ actor.character }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-12">
    <p class="text-3xl text-white">Carregando...</p>
  </div>
</template>

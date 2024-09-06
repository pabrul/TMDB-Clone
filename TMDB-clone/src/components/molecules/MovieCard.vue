<script setup>
import { ref } from "vue";
import { truncateOverview } from "../../utils/movieUtils";
import MoviePoster from "../atoms/MoviePoster.vue";
import MovieTitle from "../atoms/MovieTitle.vue";
import Modal from "./Modal.vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const goToMovieDetails = () => {
  window.open(`https://www.themoviedb.org/movie/${props.movie.id}`, "_blank");
};
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
  >
    <MoviePoster :path="movie.poster_path" :alt="movie.title" />
    <div class="p-4">
      <MovieTitle
        :title="movie.title"
        class="text-tmdb-dark-blue hover:text-tmdb-dark-blue/80 text-xl font-semibold mb-2 cursor-pointer"
        @click="goToMovieDetails"
      />
      <p class="text-sm text-gray-600 mb-2">
        {{ new Date(movie.release_date).toLocaleDateString() }}
      </p>
      <p class="text-sm text-gray-700 mb-1">
        {{ truncateOverview(movie.overview, 100) }}
        <button
          @click="openModal"
          class="text-tmdb-light-blue hover:underline ml-1 focus:outline-none"
        >
          Ver mais
        </button>
      </p>
      <div class="mt-4 flex justify-between items-center">
        <span
          class="inline-block bg-tmdb-light-green text-tmdb-dark-blue text-xs px-3 py-1 rounded-full font-semibold"
        >
          {{ movie.vote_average.toFixed(1) }}
        </span>
        <button
          @click="goToMovieDetails"
          class="bg-tmdb-light-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-tmdb-dark-blue transition duration-300"
        >
          Detalhes
        </button>
      </div>
    </div>

    <Modal :isOpen="isModalOpen" :title="movie.title" @close="closeModal">
      <p class="text-gray-700">{{ movie.overview }}</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["search", "reset"]);
const searchQuery = ref("");

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit("search", searchQuery.value);
  }
};

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};

const resetSearch = () => {
  searchQuery.value = "";
  emit("reset");
};

watch(searchQuery, (newValue) => {
  if (newValue === "") {
    emit("reset");
  }
});
</script>

<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Buscar filmes..."
      @keypress="handleKeyPress"
      class="w-full p-2 pr-20 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tmdb-light-blue bg-white text-tmdb-dark-blue"
    />
    <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex">
      <button
        v-if="searchQuery"
        @click="resetSearch"
        class="mr-2 text-tmdb-light-blue hover:text-tmdb-dark-blue"
        title="Limpar busca"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button
        @click="handleSearch"
        class="text-tmdb-light-blue hover:text-tmdb-dark-blue"
        title="Buscar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { getImageUrl } from "@/utils/movieUtils";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Movie Poster",
  },
});
</script>

<template>
  <img
    :src="getImageUrl(path, 'w342')"
    :alt="alt"
    class="w-full h-auto rounded-lg shadow-md"
    loading="lazy"
  />
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    :href="href"
    class="text-white hover:text-tmdb-light-green transition duration-300"
    >{{ text }}</a
  >
</template>

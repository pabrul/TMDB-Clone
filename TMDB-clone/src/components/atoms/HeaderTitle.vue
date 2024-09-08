<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link to="/">
    <h1 class="text-3xl font-bold text-tmdb-light-green">{{ title }}</h1>
  </router-link>
</template>

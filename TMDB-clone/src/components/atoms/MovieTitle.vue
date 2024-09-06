<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="text-xl font-bold text-gray-800 mb-2 truncate">{{ title }}</h2>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const buttonClasses = computed(() => ({
  "px-4 py-2 rounded-md font-semibold": true,
  "bg-blue-500 text-white hover:bg-blue-600": props.variant === "primary",
  "bg-gray-200 text-gray-800 hover:bg-gray-300": props.variant === "secondary",
}));
</script>

<template>
  <button :type="type" :class="buttonClasses">
    {{ text }}
  </button>
</template>

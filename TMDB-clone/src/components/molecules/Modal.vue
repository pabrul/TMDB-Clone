<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <h2 v-if="title" class="text-xl font-bold mb-4 text-tmdb-dark-blue">
          {{ title }}
        </h2>
        <slot></slot>
        <div class="mt-4 flex justify-end">
          <button
            @click="closeModal"
            class="bg-tmdb-light-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-tmdb-dark-blue transition duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change"]);

const changeTab = (tab) => {
  emit("change", tab);
};
</script>

<template>
  <div class="mb-8 flex justify-center space-x-4">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="changeTab(tab.value)"
      :class="[
        'px-4 py-2 rounded-full transition-colors duration-200',
        activeTab === tab.value
          ? 'bg-tmdb-light-blue text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

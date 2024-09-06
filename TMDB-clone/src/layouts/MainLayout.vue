<script setup>
import Header from "../components/organisms/Header.vue";
import Footer from "../components/organisms/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-tmdb-dark-blue to-tmdb-light-blue text-white flex flex-col"
  >
    <Header />
    <main class="container mx-auto px-4 py-8 flex-grow">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

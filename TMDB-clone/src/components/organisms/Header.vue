<script setup>
import HeaderTitle from "../atoms/HeaderTitle.vue";
import NavMenu from "../molecules/NavMenu.vue";
</script>

<template>
  <header class="bg-tmdb-dark-blue shadow-md">
    <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
      <HeaderTitle title="TMDB Clone" />
      <NavMenu />
    </nav>
  </header>
</template>

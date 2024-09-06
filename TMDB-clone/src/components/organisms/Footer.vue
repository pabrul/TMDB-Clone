<script setup>
import NavLink from "../atoms/NavLink.vue";
</script>

<template>
  <footer class="bg-tmdb-dark-blue mt-12">
    <div class="container mx-auto px-4 py-6 text-center">
      <p>
        &copy; {{ new Date().getFullYear() }} TMDB Clone. All rights reserved.
      </p>
      <div class="mt-2">
        <NavLink href="#" text="Termos de Uso" class="mx-2" />
        <NavLink href="#" text="Política de Privacidade" class="mx-2" />
      </div>
    </div>
  </footer>
</template>

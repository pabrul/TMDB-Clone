<script setup>
import NavLink from "../atoms/NavLink.vue";

const links = [{ href: "/", text: "Home" }];
</script>

<template>
  <ul class="flex space-x-4">
    <li v-for="link in links" :key="link.text">
      <NavLink :href="link.href" :text="link.text" />
    </li>
  </ul>
</template>

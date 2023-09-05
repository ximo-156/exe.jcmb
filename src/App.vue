<script setup lang="ts">
import Headers from "./components/header.vue";
</script>

<template>
  <Headers />
  <router-view></router-view>
</template>

<style scoped>
.router-link {
  border: none;
  color: inherit;
  color: bisque;
  text-decoration: none;
  margin-right: 20px;
}
</style>

<script setup lang="ts">
</script>

<template>
  <router-link to="/home" class="router-link"> to home</router-link>
  <router-link to="/about" class="router-link">to about</router-link>

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

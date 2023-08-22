<script setup lang="ts">
function onclk() {
  console.log(123);
}
</script>

<template>
  <router-link to="/home"> to home</router-link>
  <br />
  <router-link to="/about">to about</router-link>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

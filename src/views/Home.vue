<script setup lang="ts">
import { ref } from "vue";
let count = ref(123);
function shclk(i: number) {
  i--;
  count.value = i;
}
</script>

<template>
  <router-link to="/about" class="router-link"> 跳转到其他页面</router-link>
  <router-link to="/mapZG" class="router-link">地图界面</router-link>
</template>

<style scoped lang="less">
.router-link {
  border: none;
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
}
</style>

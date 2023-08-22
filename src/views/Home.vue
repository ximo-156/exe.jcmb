<script setup lang="ts">
import { ref } from "vue";
let count = ref(123);
function shclk(i) {
  i--;
  count.value = i;
}

</script>

<template>
  <div @click="shclk(count)">我是测试页{{ count }}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

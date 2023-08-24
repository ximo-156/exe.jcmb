<script setup lang="ts">
import { ref } from "vue";
let count = ref(123);
function shclk(i:number) {
  i--;
  count.value = i;
}

</script>

<template>
  <div @click="shclk(count)" class="read-the-docs">我是测试页{{ count }}</div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
  width: calc(100vw - 100px);
  height: calc(100vh - 100px);
  text-align: center;
  line-height: calc(100vh - 42px);
  font-size: 60px;
  cursor: pointer;
}
</style>

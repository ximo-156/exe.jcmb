<script setup lang="ts">
import { ref } from "vue";
import Headers from "../components/header.vue";
const Arr = ref([
  { path: "/about", name: "第一个测试页" },
  { path: "/MapZG", name: "简单的 vue3 中国地图" },
  { path: "/AMAP", name: "高德地图示例" },
  {
    path: "/OpenSourceChina",
    name: "开源中国",
  },
  // { path: "/map", name: "打算做一个示例二级地图的", text: "这个还有一点 bug" },
]);
</script>

<template>
  <!-- <Headers /> -->
  <div v-for="(item, index) in Arr" :key="index">
    <router-link :to="item.path" class="router-link">
      <div>
        {{ item.name }} <span v-if="item.text">{{ item.text }}</span>
      </div>
    </router-link>
  </div>
</template>

<style scoped lang="less">
.router-link {
  border: none;
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
}
</style>

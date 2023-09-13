<template>
  <!-- 这是高德地图示例 -->
  <Headers />
  <div class="index">
    <!-- 创建一个容器用来承载地图 -->
    <div
      id="container"
      class="index-map"
      style="height: 50vh; width: 100%"
    ></div>
  </div>
</template>

<script setup lang='ts'>
import Headers from "../../components/header.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { ref, onMounted } from "vue";
let map: Ref<String | Array | null> = ref(null);
function initMap() {
  AMapLoader.load({
    key: "296bbc7c49fce60e2d181dd526d79929",
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map("container", {
        //设置地图容器id
        zooms: [2, 22],
        viewMode: "3D", //是否为3D地图模式
        zoom: 18, //初始化地图级别
        center: [114.07, 22.62], //初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
onMounted(() => {
  initMap();
});
</script>

<style scoped lang='less'>
.index {
  .index-map {
    height: 100%;
    width: 100%;
  }
}
</style>
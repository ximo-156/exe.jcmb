<template>
  <div class="index">
    <div @click="back" class="back">
      <span v-pre></span>
      <div>{{ backtext }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({
  backtext: String,
});
const router = useRouter();
const route = useRoute();
let backtext = props.backtext ? props.backtext : ref("返回");
function back() {
  //   window.history.forward();
  router.go(-1);
}
</script>

<style scoped lang="less">
.index {
  height: 40px;
  width: 100vw;
  background-color: transparent;
  .back {
    cursor: pointer;
  }
}
</style>

<template>
  <div class="index">
    <!-- 头部右边-->
    <div @click="back" class="back" v-if="backbol">
      <span v-pre></span>
      <div>{{ backtext }}</div>
    </div>
    <!--    头部中间-->
    <div class="title">

    </div>
    <!--    头部左边-->
    <div class="rigth"></div>
  </div>
</template>

<script setup lang="ts">
import {ref, defineProps} from "vue";
import {useRouter, useRoute} from "vue-router";

const props = defineProps({
  backtext: String,
  backbol: {
    type: Boolean,
    default: true,
  },
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
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px 0 0 20px;
    cursor: pointer;
  }
}
</style>

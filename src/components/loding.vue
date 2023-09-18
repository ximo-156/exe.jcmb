<template>

<div class='index'>
    <div class="dots">
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'

</script>

<style scoped lang='less'>
.index{
    .read-the-docs {
  color: #888;
  width: calc(100vw - 100px);
  height: calc(100vh - 100px);
  text-align: center;
  line-height: calc(100vh - 42px);
  font-size: 60px;
  cursor: pointer;
}

.box {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #0fd4e2;
  color: #72ade4;
  display: flex;

  span {
    flex: 1 1 50%;
  }
}

.dots {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #1d01ec;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
}

</style>
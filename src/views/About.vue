<script setup lang="ts">
import {ref} from "vue"
  

let a = ref(0)

function A佳佳(){
    a.value++
}
</script>
<template>
    <div @click="A佳佳" class="yige">
        {{a}}
    </div>
</template>
<style scoped>
.yige{
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-weight: 700;
    font-size: 60px;
    text-align: center;
    background: rgba(123, 246, 9, .5);
    cursor: pointer;
}
</style>
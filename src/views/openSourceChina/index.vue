<script lang="ts" setup>
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../../utils/request";
const url = "https://query.asilu.com/news/oschina-news";
const config: AxiosRequestConfig = {
  method: "GET",
  headers:
    "Accept,Accept-Language,Content-language,Content-Type,DNT,X-Access-Token,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Referer,Cache-Control,key,x-biz,x-info,platinfo,encr,enginever,gzipped,poiid,md",
  // 可以在这里设置请求的 headers、params 等
};

try {
  const responseData = await request<MyData>(url, config);
  console.log(responseData);
} catch (error) {
  console.error(error);
}
</script>

<template>
  <div></div>
</template>

<style scoped lang="less">
</style>
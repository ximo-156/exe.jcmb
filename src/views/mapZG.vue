<template>
  <Headers/>
  <div class="index">
    <div ref="chinaMap" class="chinaMap">地图1</div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from "echarts";
import {ref, onMounted} from "vue";
import Headers from "../components/header.vue";
// 引入 json 文件

import chinaMaps from "../map/chinaMap.json";
import taiWanMaps from "../map/taiwanMap.json";
import haiNanMaps from "../map/haiNanMap.json";
import anHuiMaps from "../map/anHuiMap.json";
import jiangXiMaps from "../map/jiangXiMap.json";
import yunNanMaps from "../map/yunNanMap.json";
import guiZhouMaps from "../map/guiZhouMap.json";
import guangDongMaps from "../map/guangDongMap.json";
import fuJianMaps from "../map/fuJianMap.json";
import zheJiangMaps from "../map/zheJiangMap.json";
import jiangSuMaps from "../map/jiangSuMap.json";
import siChuanMaps from "../map/siChuanMap.json";
import chongQingMaps from "../map/chongQingMap.json";
import huBeiMaps from "../map/huBeiMap.json";
import heNanMaps from "../map/heNanMap.json";
import shanDongMaps from "../map/shanDongMap.json";
import jiLinMaps from "../map/jiLinMap.json";
import liaoNingMaps from "../map/liaoNingMap.json";
import tianJinMaps from "../map/tianJinMap.json";
import beiJingMaps from "../map/beiJingMap.json";
import heBeiMaps from "../map/heBeiMap.json";
import shanXiMaps from "../map/shanXiMap.json";
import shanXi2Maps from "../map/shanXi2Map.json";
import ningXiaMaps from "../map/ningXiaMap.json";
import qingHaiMaps from "../map/qingHaiMap.json";
import xiZangMaps from "../map/xiZangMap.json";
import heiLongJiangMaps from "../map/heiLongJiangMap.json";
import neimengGuMaps from "../map/neimengGuMap.json";
import ganSuMaps from "../map/ganSuMap.json";
import xinJiangMaps from "../map/xinJiangMap.json";
import guangxiMaps from "../map/guangxiMap.json";
import huNanMaps from "../map/huNanMap.json";

let chinaMap = ref(chinaMaps);
console.log(chinaMap.value)
//2.台湾省地图
let taiWanMap = ref(taiWanMaps);
//3.海南省地图
let haiNanMap = ref(haiNanMaps);
//4.安徽省地图
let anHuiMap = ref(anHuiMaps);
//5.江西省地图
let jiangXiMap = ref(jiangXiMaps);
//6.湖南省地图
let huNanMap = ref(huNanMaps);
//7.云南省地图
let yunNanMap = ref(yunNanMaps);
//8.贵州省地图
let guiZhouMap = ref(guiZhouMaps);
//9.广东省地图
let guangDongMap = ref(guangDongMaps);
//10.福建省地图
let fuJianMap = ref(fuJianMaps);
//11.浙江省地图
let zheJiangMap = ref(zheJiangMaps);
//12.江苏省地图
let jiangSuMap = ref(jiangSuMaps);
//13.四川省地图
let siChuanMap = ref(siChuanMaps);
//14.重庆市市地图
let chongQingMap = ref(chongQingMaps);
//15.湖北省地图
let huBeiMap = ref(huBeiMaps);
//16.河南省地图
let heNanMap = ref(heNanMaps);
//17.山东省地图
let shanDongMap = ref(shanDongMaps);
//18.吉林省地图
let jiLinMap = ref(jiLinMaps);
//19.辽宁省地图
let liaoNingMap = ref(liaoNingMaps);
//20.天津市市地图
let tianJinMap = ref(tianJinMaps);
//21.北京市市地图
let beiJingMap = ref(beiJingMaps);
//22.河北省地图
let heBeiMap = ref(heBeiMaps);
//23.山西省地图
let shanXiMap = ref(shanXiMaps);
//24.陕西省地图
let shanXi2Map = ref(shanXi2Maps);
//25.宁夏回族自治区省地图
let ningXiaMap = ref(ningXiaMaps);
//26.青海省地图
let qingHaiMap = ref(qingHaiMaps);
//27.西藏自治区地图
let xiZangMap = ref(xiZangMaps);
//28.黑龙江省地图
let heiLongJiangMap = ref(heiLongJiangMaps);
//29.内蒙古自治区地图
let neimengGuMap = ref(neimengGuMaps);
//30.甘肃省地图
let ganSuMap = ref(ganSuMaps);
//31.新疆维吾尔自治区省地图
let xinJiangMap = ref(xinJiangMaps);
//32.广西壮族自治区地图
let guangxiMap = ref(guangxiMaps);
// 初始化 init 元素
//

//在生命周期绘制地图
onMounted(() => {
  drawChina();
});
let mapJson = [
  {
    name: "台湾省",
    json: taiWanMap,
  },
  {
    name: "海南省",
    json: haiNanMap,
  },
  {
    name: "安徽省",
    json: anHuiMap,
  },
  {
    name: "江西省",
    json: jiangXiMap,
  },
  {
    name: "湖南省",
    json: huNanMap,
  },
  {
    name: "云南省",
    json: yunNanMap,
  },
  {
    name: "贵州省",
    json: guiZhouMap,
  },
  {
    name: "广东省",
    json: guangDongMap,
  },
  {
    name: "福建省",
    json: fuJianMap,
  },
  {
    name: "浙江省",
    json: zheJiangMap,
  },
  {
    name: "江苏省",
    json: jiangSuMap,
  },
  {
    name: "四川省",
    json: siChuanMap,
  },
  {
    name: "重庆市",
    json: chongQingMap,
  },
  {
    name: "湖北省",
    json: huBeiMap,
  },
  {
    name: "河南省",
    json: heNanMap,
  },
  {
    name: "山东省",
    json: shanDongMap,
  },
  {
    name: "吉林省",
    json: jiLinMap,
  },
  {
    name: "辽宁省",
    json: liaoNingMap,
  },
  {
    name: "天津市",
    json: tianJinMap,
  },
  {
    name: "北京市",
    json: beiJingMap,
  },
  {
    name: "河北省",
    json: heBeiMap,
  },
  {
    name: "山西省",
    json: shanXiMap,
  },
  {
    name: "陕西省",
    json: shanXi2Map,
  },
  {
    name: "宁夏回族自治区",
    json: ningXiaMap,
  },
  {
    name: "青海省",
    json: qingHaiMap,
  },
  {
    name: "西藏自治区",
    json: xiZangMap,
  },
  {
    name: "黑龙江省",
    json: heiLongJiangMap,
  },
  {
    name: "内蒙古自治区",
    json: neimengGuMap,
  },
  {
    name: "甘肃省",
    json: ganSuMap,
  },
  {
    name: "新疆维吾尔自治区",
    json: xinJiangMap,
  },
  {
    name: "广西壮族自治区",
    json: guangxiMap,
  },
];
let regions = [
  {
    name: "新疆维吾尔自治区",
    itemStyle: {
      areaColor: "#374ba4",
      opacity: 1,
    },
  },
  {
    name: "四川省",
    itemStyle: {
      areaColor: "#fe9b45",
      opacity: 1,
    },
  },
  {
    name: "陕西省",
    itemStyle: {
      areaColor: "#fd691b",
      opacity: 1,
    },
  },
  {
    name: "黑龙江省",
    itemStyle: {
      areaColor: "#ffc556",
      opacity: 1,
    },
  },
];
let scatter = [
  {name: "北京烤鸭", value: [116.46122, 39.97886, 9]},
  {name: "兰州拉面", value: [103.86615, 36.040129, 9]},
  {name: "新疆烤肉", value: [87.613228, 43.810394, 9]},
  {name: "长沙臭豆腐", value: [112.915204, 28.207735, 9]},
  {name: "西安肉夹馍", value: [108.953445, 34.288842, 9]},
  {name: "云南", value: [102.710002, 25.045806, 9]},
];

// let scatter = [];
function drawChina() {
  let myChart = echarts.init(chinaMap.value);
  echarts.registerMap("china", chinaMaps); //注册可用的地图
  let option = {
    geo: {
      map: "china",
      roam: true, //是否允许缩放，拖拽
      zoom: 1.5, //初始化大小
      //缩放大小限制
      scaleLimit: {
        min: 1, //最小
        max: 5, //最大
      },
      //设置中心点
      center: [115.97, 29.71],
      //省份地图添加背景
      regions: regions,
      itemStyle: {
        areaColor: "#0b122e",
        color: "red",
        borderColor: "#232652",
        borderWidth: 2,
      },
      //高亮状态
      emphasis: {
        itemStyle: {
          areaColor: "#1af9e5",
          color: "#fff",
        },
      },
    },
    //配置属性
    series: {
      type: "effectScatter",
      coordinateSystem: "geo",
      data: scatter,
      showEffectOn: "render",
      rippleEffect: {
        //涟漪特效相关配置
        brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'
      },
      hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
      label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        normal: {
          formatter: "{b}",
          position: "right",
          show: true,
        },
      },
      itemStyle: {
        //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
        normal: {
          color: "#ffffff", //散点的颜色
          shadowBlur: 10,
          shadowColor: 20,
          fontSize: "12px",
        },
      },
      zlevel: 1,
    },
  };
  myChart.setOption(option);
}
</script>

<style scoped lang='less'>
.index {

  .chinaMap {
    height: 100vh;
    border: solid 1px red;
    width: 100%;
    //background: #010111;
    background-size: 100% 100%;
    background-image: url("@/assets/bg.png");

  }
}
</style>
<template>
  <Headers />
  <div class="index">
    <div class="container">
      <!-- 全国地图 机构趋势模块 -->
      <div class="china">
        <!-- 点击返回全国-->
        <div @click="returnCh">返回</div>
        <div ref="chinaMap" v-if="pyName === 'china'"></div>
        <div ref="provinceMap" v-if="pyName !== 'china'">111</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import * as echarts from "echarts";
import Headers from "../components/header.vue";
import { ref, reactive, nextTick, onMounted } from "vue";
import { cityArr, totalMap } from "../map/mapData";
let totalMaps = ref(totalMap);
let cityArrs = ref(cityArr);
let pyName: string = ref("china");
let pyNameOfChinese = ref();
let chinaMap = ref();
let provinceMap = ref();
// 获取界面 dom 元素

onMounted(() => {
  chinaMapFun();
});
// 中国地图
function chinaMapFun(cityNames) {
  let myEchartsOfChina;
  // 先处理数据 很重要
  let mapData = [];
  for (let i = 0; i < totalMaps.value.length; i++) {
    let obj = { value: 0, datas: [], name: "" }; // 数组里面是多个对象
    obj.name = totalMaps.value[i].comname2;
    obj.value = totalMaps.value[i].achieveRate; // 该区域的数据值 number类型
    obj.datas[0] = totalMaps.value[i].preium;
    obj.datas[1] = totalMaps.value[i].target;

    //注意： 此行是模拟下面的省份用的 实际开发中每个省份的数据是后端返回的
    if (totalMaps.value[i].children) {
      obj.children = totalMaps.value[i].children;
    }
    mapData.push(obj);
  }
  // 这里进行筛选传进来的省份数据 模拟黑龙江省份下面的和黑河市
  if (pyNameOfChinese.value) {
    mapData = mapData.map((item) => {
      if (item.children) {
        return {
          name: item.children.comname2,
          value: item.children.achieveRate,
          datas: [item.children.preium, item.children.target],
        };
      }
    });
  }
  console.log(provinceMap.value);
  console.log(chinaMap.value);
  // 1，初始化节点
  // 检测是否已经存在echarts实例，如果不存在，则不再去初始化
  if (pyName === "china") {
    console.log(chinaMap.value, "1");
    myEchartsOfChina = echarts.init(provinceMap.value);
  } else {
    console.log(provinceMap.value, "2");
    myEchartsOfChina = echarts.init(chinaMap.value);
  }
  // // 显示加载动画
  myEchartsOfChina.showLoading();
  if (pyName.value === "china") {
    let province = require("../../../node_modules/echarts/map/json/china.json");
    // 注册地图数据
    echarts.registerMap(pyName.value, province);
  } else {
    // 单独引入其他省份的地图 注意：registerMap方法的第一参数要和引入的省名相同
    let province = require("../../../node_modules/echarts/map/json/province/" +
      pyName.value +
      ".json");
    echarts.registerMap(this.pyName, province);
  }

  myEchartsOfChina.hideLoading();

  let options = {
    title: {
      show: false, // 是否显示标题组件
      text: "中国地图", // 主标题文本
      subtext: "注：展示当月和当年累计情况",
      left: "3%",
      top: "85%",
    },
    tooltip: {
      enterable: true, // 允许点击触发tooltip中的事件
      show: true, // 是否显示提示框组件，包括提示框浮层和 axisPointer。 [ default: true ]
      trigger: "item", // 触发类型。 [ default: 'item' ]
      triggerOn: "click", // 只有点击时才触发 不设置默认随鼠标移动并显示
      backgroundColor: "rgba(50,50,50,0.7)", // tooltip 背景颜色 rgba
      // 文本设置
      textStyle: {
        color: "rgb(255,255,255)", // 值域文字颜色
        fontSize: 12,
      },
    },
    // 底部小导航图标
    visualMap: {
      // text: ['注：展示当月和当年累计情况'],
      orient: "horizontal",
      itemWidth: 15,
      textGap: 2,
      // calculable: false,
      show: true,
      left: "center",
      y: "bottom",
      splitList: [
        { end: 0, label: "无", color: "#DDDDDD" },
        { end: 30, color: "rgb(255,248,220)" },
        { start: 30, end: 60, label: "30-60", color: "rgb(252,235,207)" },
        { start: 60, end: 90, label: "60-90", color: "#FFDAB9" },
        { start: 90, end: 100, label: "90-100", color: "rgb(245,158,131)" }, // 245 158 131
        { start: 100, label: ">=100", color: "rgb(40,183,163)" }, // 40 183 163
      ],
    },
    backgroundColor: "#fff", // 图表背景色

    series: [
      {
        name: "省份",
        type: "map", // 指定是地图类型
        map: pyName, // 和上面registerMap中的第一个参数值一致才可以正常加载地图
        zoom: 1.2,
        roam: true, // 是否开启平游或缩放
        selectedMode: "single", // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
        itemStyle: {
          areaColor: "#FFFFFF",
          borderColor: "#0f0f0f",
          normal: { label: { show: true }, areaColor: "#DDDDDD" },
          emphasis: { label: { show: true } },
        },
        emphasis: {
          // 强调的样式，也就是鼠标移入后的样式==高亮状态下的多边形和标签样式。
          itemStyle: {
            areaColor: "#000000",
          },
        },
        label: {
          normal: {
            show: true, // 是否显示标签，这里显示的就是省份的名字。默认就是false
            textStyle: {
              fontWeight: 300,
              color: "#000000", // 值域文字颜色
              fontSize: 7, // 文字的字体大 小
            },
          },
          emphasis: {
            show: false, // 在鼠标移入时，是否显示，如果不写，默认是显示的
          },
        },
        data: mapData, // 各省地图数据导入
      },
    ],
  };

  // 设置各个省份地图的参数
  let options1 = {
    title: {
      show: false, // 是否显示标题组件
      subtext: "注：展示当月和当年累计情况",
      left: "3%",
      top: "85%",
    },
    tooltip: {
      enterable: true, // 允许点击触发tooltip中的事件
      show: true, // 是否显示提示框组件，包括提示框浮层和 axisPointer。 [ default: true ]
      trigger: "item", // 触发类型。 [ default: 'item' ]
      backgroundColor: "rgba(50,50,50,0.7)", // tooltip 背景颜色 rgba
      // 文本设置
      textStyle: {
        color: "rgb(255,255,255)", // 值域文字颜色
        fontSize: 12,
      },
    },
    // 底部小导航图标
    visualMap: {
      // text: ['注：展示当月和当年累计情况'],
      orient: "horizontal",
      itemWidth: 15,
      textGap: 2,
      // calculable: false,
      show: true,
      left: "center",
      y: "bottom",
      splitList: [
        { start: 6, label: ">=7", color: "#FFDAB9" },
        { start: 3, end: 6, label: "4-6", color: "rgb(245,158,131)" }, // 245 158 131
        { start: 1, end: 3, label: "1-3", color: "rgb(40,183,163)" }, // 40 183 163
        { end: 0, label: "无", color: "#DDDDDD" },
      ],
    },
    series: [
      {
        name: "省份", // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。见上：可以在tooltip中获取到
        type: "map", // 指定是地图类型
        map: pyName.value, // 和上面registerMap中的一直
        zoom: 1.2,
        selectedMode: "single", // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
        itemStyle: {
          areaColor: "#FFFFFF",
          borderColor: "#0f0f0f",
          normal: { label: { show: true }, areaColor: "#DDDDDD" },
          emphasis: { label: { show: true } },
        },
        emphasis: {
          // 强调的样式，也就是鼠标移入后的样式==高亮状态下的多边形和标签样式。
          itemStyle: {
            areaColor: "#000000",
          },
        },
        label: {
          normal: {
            show: true, // 是否显示标签，这里显示的就是省份的名字。默认就是false
            textStyle: {
              fontWeight: 300,
              color: "#000000", // 值域文字颜色
              fontSize: 7, // 文字的字体大 小
            },
          },
          emphasis: {
            show: false, // 在鼠标移入时，是否显示，如果不写，默认是显示的
          },
        },
        // 数据对不上 省下面的地区对不上
        data: mapData,
      },
    ],
  };
  // 判断是否是各个省份
  if (pyName === "china") {
    console.log("2");
    myEchartsOfChina.setOption(options);
  } else {
    console.log("1");
    myEchartsOfChina.setOption(options1);
  }
}

function lookVideoGo(cityName) {
  // 保留一份中文
  pyNameOfChinese = cityName;
  // this.myEchartsOfChina.clear(); // 清空当前实例，会移除实例中所有的组件和图表。
  myEchartsOfChina.dispose(); // 销毁后实例无法在使用

  // 获取城市拼音
  for (var i = 0, len = cityArr.value[0].length; i < len; i++) {
    if (cityName === cityArr.value[0][i]) {
      // 获取得城市拼音
      pyName = cityArr.value[1][i];
      // 使用nextTick Api 防止echarts初始化时避免节点不存在的报错
      nextTick(() => {
        chinaMapFun(pyName);
      });
      break;
    } else {
      console.warn("没有找到此城市的拼音");
    }
  }
}
function returnCh() {
  // this.myEchartsOfChina.clear(); // 清空当前实例，会移除实例中所有的组件和图表。
  myEchartsOfChina.dispose(); // 销毁后实例 这里使用dispose防止残留
  pyName.value = "china";
  pyNameOfChinese = "";
  // 使用nextTick Api 防止echarts初始化时避免节点不存在的报错
  nextTick(() => {
    chinaMapFun();
  });
}
</script>

<style scoped lang='less'>
.index {
  .container {
    width: 90%;
    border: 1px solid balck;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    .china {
      #chinaMap,
      #provinceMap {
        width: 400px;
        height: 400px;
        margin-right: 30px;
        margin-top: 20px;
      }
    }
    // 返回箭头
    .returnImg {
      cursor: pointer;
      display: block;
      width: 25px;
    }
  }
}
</style>../map/mapdata.js
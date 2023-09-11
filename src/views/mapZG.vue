<template>
  <Headers />
  <div ref="line" class="line"></div>
  <div ref="lines" class="line"></div>
</template>

<script setup>
import Headers from "../components/header.vue";
// 按需引入 echarts
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
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
const line = ref();
const lines = ref();
let qxdata = ref([24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]);
function chart() {
  // 折线图
  let lineChart = echarts.init(line.value);
  var lineOption = (lineOption = {
    tooltip: {
      trigger: "axis",
    },

    legend: {
      textStyle: {
        color: "#4c9bfd", // 图例文字颜色
      },
      right: "10%", // 距离右边10%
      // 如果series 里面设置了name，那么此时图里组件的data可以省略！！！
      // data: ['Email', 'Union Ads']
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, //显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false, // 去除轴内间距
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd", // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: "#4c9bfd", // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
    },
    color: ["#00f2f1", "#ed3f35"], //两条曲线改变颜色
    series: [
      {
        name: "预期销售额",
        type: "line",
        smooth: true,
        stack: "总量",
        data: qxdata.value,
      },
      {
        name: "实际销售额",
        type: "line",
        smooth: true,
        stack: "总量",
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      },
    ],
  });
  lineChart.setOption(lineOption);
}

//定义一个全局变量，用来统计每个省有几个市
let num = 0;
//1.中国地图
let chinaMap = ref(chinaMaps);
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
onMounted(async () => {
  chart();
  linesOption();
});

// var mapname = chinaMap;
//设置省份的json 这里注意名字要和中国地图上的名字一致
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
async function linesOption() {
  //设置初始地图
  var myChart = echarts.init(lines.value);
  var geoCoordMap = {
    台湾: [122, 23],
    黑龙江: [129, 51],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [88.388277, 31.56375],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };
  let data = [
    { name: "台湾", value: 1 },
    { name: "北京", value: 2 },
    { name: "天津", value: 3 },
    { name: "河北", value: 4 },
    { name: "山西", value: 5 },
    { name: "内蒙古", value: 6 },
    { name: "辽宁", value: 7 },
    { name: "吉林", value: 8 },
    { name: "黑龙江", value: 9 },
    { name: "上海", value: 10 },
    { name: "江苏", value: 11 },
    { name: "浙江", value: 12 },
    { name: "安徽", value: 13 },
    { name: "福建", value: 14 },
    { name: "江西", value: 15 },
    { name: "山东", value: 16 },
    { name: "河南", value: 17 },
    { name: "湖北", value: 18 },
    { name: "湖南", value: 19 },
    { name: "重庆", value: 20 },
    { name: "四川", value: 21 },
    { name: "贵州", value: 22 },
    { name: "云南", value: 23 },
    { name: "西藏", value: 24 },
    { name: "陕西", value: 25 },
    { name: "甘肃", value: 26 },
    { name: "青海", value: 27 },
    { name: "宁夏", value: 28 },
    { name: "新疆", value: 29 },
    { name: "广东", value: 30 },
    { name: "广西", value: 31 },
    { name: "海南", value: 32 },
  ];
  function convertData(data) {
    //定义一个数组
    let res = [];
    //循环遍历每个区域值
    for (let i = 0; i < data.length; i++) {
      //获取坐标
      let geoCoord = geoCoordMap[data[i].name];
      //判断是否有坐标
      if (geoCoord) {
        //往数组里设置值
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  }
  // 地图开始
  let option = {
    //设置背景颜色
    backgroundColor: "#020933",
    geo: {
      map: "China", //地图为刚刚设置的China
      aspectScale: 0.75, //长宽比
      zoom: 1.1, //当前视角的缩放比例
      roam: false, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
      itemStyle: {
        //地图区域的多边形 图形样式
        normal: {
          areaColor: "#013C62", //地区颜色
          shadowColor: "#182f68", //阴影颜色
          shadowOffsetX: 0, //阴影偏移量
          shadowOffsetY: 25, //阴影偏移量
        },
        emphasis: {
          areaColor: "#2AB8FF", //地区颜色
          label: {
            show: false, //是否在高亮状态下显示标签
          },
        },
      },
    },
    series: [
      //数据系列
      {
        type: "map", //地图类型
        //地图上文字
        label: {
          normal: {
            show: true, //是否显示标签
            textStyle: {
              color: "#fff",
            },
          },
          emphasis: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        //地图区域的多边形 图形样式
        itemStyle: {
          normal: {
            borderColor: "#2ab8ff",
            borderWidth: 1.5,
            areaColor: "#12235c",
          },
          emphasis: {
            areaColor: "#2AB8FF",
            borderWidth: 0,
          },
        },
        zoom: 1.2, //当前视角的缩放比例
        //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        roam: false,
        map: "China", //使用中国地图
      },
      {
        //设置为分散点
        type: "scatter",
        //series坐标系类型
        coordinateSystem: "geo",
        //设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbol: "pin",
        // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
        symbolSize: [40, 40],
        //气泡字体设置
        label: {
          normal: {
            show: true, //是否显示
            textStyle: {
              color: "#fff", //字体颜色
              fontSize: 8, //字体大小
            },
            //返回气泡数据
            formatter(value) {
              return value.data.value[2];
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#1E90FF", //标志颜色
          },
        },
        //给区域赋值
        data: convertData(data),
        showEffectOn: "render", //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
        rippleEffect: {
          //涟漪特效相关配置。
          brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'
        },
        hoverAnimation: false, //是否开启鼠标 hover 的提示动画效果。
        zlevel: 1, //所属图形的 zlevel 值
      },
    ],
  };
  myChart.setOption(option);
}

//提取自动播放的代码
function timing() {
  // 取消高亮指定的数据图形
  myChart.dispatchAction({
    type: "downplay",
    seriesIndex: 0,
    dataIndex: index,
  });
  // 高亮指定的数据图形
  myChart.dispatchAction({
    type: "highlight",
    seriesIndex: 0,
    dataIndex: index + 1,
  });
  index++;
  //判断长度是否和城市的长度一样，如果一样重新播放
  if (index > num) {
    index = -1;
  }
}
/* 
    //加载时的文字提示
    myChart.showLoading({ text: '正在加载数据' });  //增加等待提示
    //设置开始位置（播放的位置）
    let index = -1;
    //定时播放
    var timer = setInterval(function () {
        //调用定时播放代码
        timing()
    }, 1500);
    //鼠标移入
    myChart.on('mousemove', function (e) {
        //取消定时
        clearInterval(timer);
        //取消高亮
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        //高亮鼠标移入的位置
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });

    });
    //鼠标移出
    myChart.on('mouseout', function (e) {
        //取消定时
        clearInterval(timer);
        //取消高亮
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
        //重新开始定时播放
        timer = setInterval(function () {
            //调用定时播放代码
            timing()
        }, 1500);
    });
    //点击事件
    myChart.on('click', function (e) {
        //过滤 这里是es6语法 filter函数可以看成是一个过滤函数，返回符合条件的元素的数组
        var chooseName = mapJson.filter((item) => {
            //我们根据名字来判断是否选择一种
            return item.name == e.name;
        });
        //这里的chooseName是一个数组，我们需要获取到json 有兴趣可以打印
        //{name: "新疆维吾尔自治区", json: "json/新疆维吾尔自治区.json"}
        mapname = chooseName[0].json;

        //添加一个返回按键
        $('<div class="back">返回中国地图</div>').appendTo(
            $('#chart-panel')
        );
        //给返回按键设置样式
        $('.back').css({
            position: 'absolute',//绝对地位
            left: '20px',//设置位置
            top: '20px',//设置位置
            color: 'pink',//设置字体颜色
            'font-size': '20px',//设置字体大小
            cursor: 'pointer',//变小手
        });
        //设置返回按钮的点击事件
        $('.back').click(function () {
            //地图重新设置为中国地图
            mapname = chinaMap;
            //隐藏按钮
            $('.back').css({
                opacity:0,
            });
            //绘制地图
            mapInit();
            //重新开始定时播放
            timer = setInterval(function () {
                //调用定时播放代码
                timing()
            }, 1500);
        });
        //绘制地图
        mapInit();
        //定时播放
        timer = setInterval(function () {
            //调用定时播放代码
            timing()
        }, 1500);
    });
    //设置初始化时间
    setTimeout(function () {
        mapInit();
    }, 500);


    //创建地图
    var mapInit = () => {
        //调用中国地图（同步）
        $.getJSON(mapname, function (geoJson) {
            //获取到长度（每个省里有几个市）
            num = geoJson.features.length;
            //调用我们通过json对象注册的地图
            echarts.registerMap('China', geoJson);
            //文件加载的动画
            myChart.hideLoading();
            //判断是否为祖国地图
            if (mapname === chinaMap) {
                //设置小黄点
                var geoCoordMap = {
                    '台湾': [122,23],
                    '黑龙江': [129,51],
                    '内蒙古': [110.3467, 41.4899],
                    "吉林": [125.8154, 44.2584],
                    '北京市': [116.4551, 40.2539],
                    "辽宁": [123.1238, 42.1216],
                    "河北": [114.4995, 38.1006],
                    "天津": [117.4219, 39.4189],
                    "山西": [112.3352, 37.9413],
                    "陕西": [109.1162, 34.2004],
                    "甘肃": [103.5901, 36.3043],
                    "宁夏": [106.3586, 38.1775],
                    "青海": [101.4038, 36.8207],
                    "新疆": [87.9236, 43.5883],
                    "西藏": [88.388277,31.56375],
                    "四川": [103.9526, 30.7617],
                    "重庆": [108.384366, 30.439702],
                    "山东": [117.1582, 36.8701],
                    "河南": [113.4668, 34.6234],
                    "江苏": [118.8062, 31.9208],
                    "安徽": [117.29, 32.0581],
                    "湖北": [114.3896, 30.6628],
                    "浙江": [119.5313, 29.8773],
                    "福建": [119.4543, 25.9222],
                    "江西": [116.0046, 28.6633],
                    "湖南": [113.0823, 28.2568],
                    "贵州": [106.6992, 26.7682],
                    "云南": [102.9199, 25.4663],
                    "广东": [113.12244, 23.009505],
                    "广西": [108.479, 23.1152],
                    "海南": [110.3893, 19.8516],
                    '上海': [121.4648, 31.2891],
                };
                //设置每个区域的值
                var data = [
                    {name:"台湾",value:1},
                    {name:"北京",value:2},
                    {name:"天津",value:3},
                    {name:"河北",value:4},
                    {name:"山西",value:5},
                    {name:"内蒙古",value:6},
                    {name:"辽宁",value:7},
                    {name:"吉林",value:8},
                    {name:"黑龙江",value:9},
                    {name:"上海",value:10},
                    {name:"江苏",value:11},
                    {name:"浙江",value:12},
                    {name:"安徽",value:13},
                    {name:"福建",value:14},
                    {name:"江西",value:15},
                    {name:"山东",value:16},
                    {name:"河南",value:17},
                    {name:"湖北",value:18},
                    {name:"湖南",value:19},
                    {name:"重庆",value:20},
                    {name:"四川",value:21},
                    {name:"贵州",value:22},
                    {name:"云南",value:23},
                    {name:"西藏",value:24},
                    {name:"陕西",value:25},
                    {name:"甘肃",value:26},
                    {name:"青海",value:27},
                    {name:"宁夏",value:28},
                    {name:"新疆",value:29},
                    {name:"广东",value:30},
                    {name:"广西",value:31},
                    {name:"海南",value:32},
                ];
                //给每个地区赋值
                var convertData = function (data) {
                    //定义一个数组
                    var res = [];
                    //循环遍历每个区域值
                    for (var i = 0; i < data.length; i++) {
                        //获取坐标
                        var geoCoord = geoCoordMap[data[i].name];
                        //判断是否有坐标
                        if (geoCoord) {
                            //往数组里设置值
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
            }else{
                //这里不为中国地图所以先不设置（后面需要对市区进行标记在设置）

                //设置小黄点
                var geoCoordMap = {

                };
                //设置每个区域的值
                var data = [

                ];
                //给每个地区赋值
                convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
            }


            //地图开始
            option = {
                //设置背景颜色
                backgroundColor: '#020933',
                geo: {
                    map: 'China',//地图为刚刚设置的China
                    aspectScale:0.75, //长宽比
                    zoom:1.1,//当前视角的缩放比例
                    roam: false,//是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    itemStyle: {//地图区域的多边形 图形样式
                        normal: {
                            areaColor: '#013C62',//地区颜色
                            shadowColor: '#182f68',//阴影颜色
                            shadowOffsetX: 0,//阴影偏移量
                            shadowOffsetY: 25,//阴影偏移量
                        },
                        emphasis: {
                            areaColor: '#2AB8FF',//地区颜色
                            label: {
                                show: false,//是否在高亮状态下显示标签
                            },
                        },
                    },
                },
                series: [//数据系列
                    {
                        type: 'map',//地图类型
                        //地图上文字
                        label: {
                            normal: {
                                show: true,//是否显示标签
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        //地图区域的多边形 图形样式
                        itemStyle: {
                            normal: {
                                borderColor: '#2ab8ff',
                                borderWidth: 1.5,
                                areaColor: '#12235c',
                            },
                            emphasis: {
                                areaColor: '#2AB8FF',
                                borderWidth: 0,
                            },
                        },
                        zoom: 1.2,//当前视角的缩放比例
                        //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                        roam: false,
                        map: 'China', //使用中国地图

                    },
                    {

                        //设置为分散点
                        type: 'scatter',
                        //series坐标系类型
                        coordinateSystem: 'geo',
                        //设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                        symbol: 'pin',
                        // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
                        symbolSize: [40,40],
                        //气泡字体设置
                        label: {
                            normal: {
                                show: true,//是否显示
                                textStyle: {
                                    color: '#fff',//字体颜色
                                    fontSize: 8,//字体大小
                                },
                                //返回气泡数据
                                formatter (value){
                                    return value.data.value[2]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#1E90FF', //标志颜色
                            }
                        },
                        //给区域赋值
                        data: convertData(data),
                        showEffectOn: 'render',//配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
                        rippleEffect: {//涟漪特效相关配置。
                            brushType: 'stroke'//波纹的绘制方式，可选 'stroke' 和 'fill'
                        },
                        hoverAnimation: true,//是否开启鼠标 hover 的提示动画效果。
                        zlevel: 1//所属图形的 zlevel 值
                    },
                ],
            };
            myChart.setOption(option);
        });
    };
 */
</script>

<style  scoped>
.line {
  width: 500px;
  height: 500px;
}
</style>

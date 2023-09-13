import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import mapZG from '../views/mapZG.vue';
import vue2 from "../views/vue2.vue";
import Map from "../views/Map.vue"
import AMAP from "../../src/views/AMAP/index.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    {
        path: "/mapZG",
        name: "地图界面",
        component: mapZG,
    },
    {
        path: "/AMAP",
        name: "高德地图示例",
        component: AMAP
    },
    {
        path: "/vue2",
        name: "vue2实现map",
        component: vue2

    },
    {
        path: "/Map",
        name: "vue2改造",
        component: Map
    },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
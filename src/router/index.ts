import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Map from '../views/mapZG.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '首页',
        component: Home,
    },
    {
        path: "/map",
        name: "地图界面",
        component: Map,
    },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
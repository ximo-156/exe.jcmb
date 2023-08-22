import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue'
// const Home:object = { template: '<div>Home</div>' }
// const About:object = { template: '<div>About</div>' }
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: '首页',
        component: Home,
    },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
import { createRouter, createWebHashHistory/* , createWebHistory */ } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Info from '../views/InfoPage.vue';
import Doc from '../views/DocPage.vue';
import Depend from '../views/DependPage.vue';
import Error404 from '../views/Error404Page.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/doc/:docType',
        component: Doc,
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/page/:pageType',
        component: Depend,
        meta: {
            keepAlive: false
        }
    },
    {
        path: "/:pathMatch(.*)",
        component: Error404,
        meta: {
            keepAlive: false
        }
    }
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
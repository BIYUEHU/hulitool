import { createRouter, createWebHashHistory/* , createWebHistory */ } from 'vue-router';
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Doc from '../views/DocPage.vue';
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
        path: '/doc/:docType',
        // component: () => import('../views/DocPage.vue'),
        component: Doc,
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
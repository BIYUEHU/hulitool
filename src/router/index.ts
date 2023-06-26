import { createRouter, createWebHashHistory/* , createWebHistory */ } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
    {
        path: '/', component: HomePage
    },
    {
        path: '/about', component: AboutPage
    },
    {
        path: '/doc/:docType', component: () => import('../views/DocPage.vue'), meta: {
            keepAlive: false
        }
    },
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
/*
 * @Author: Biyuehu biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-06-26 11:43:06
 */
/* Vue */
import { createApp } from "vue";
import App from "@/App.vue";
/* 路由 */
import Router from "@/router";
/* Pinia与持久化存储 */
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
/* 复制文本插件 */
import VueClipboards from "vue-clipboard2";
/* Mdui样式库 */
import mdui from "mdui";
import "../node_modules/mdui/dist/css/mdui.css";
/* ElementPlus */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
/* 自制库 */
import * as Func from "@/function";
/* 全局样式 */
import "@/style.css";

/* 创建Vue与Pinia应用 */
const app = createApp(App);
const pinia = createPinia();

/* Vue挂载对象与装载插件 */
app.config.globalProperties.$func = Func;
app.config.globalProperties.$mdui = mdui;
app.use(Router);
app.use(pinia);
app.use(VueClipboards);
app.use(ElementPlus);

/* Pinia装载插件 */
pinia.use(piniaPluginPersistedstate);

/* Vue，启动！ */
app.mount("#app");

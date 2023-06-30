/*
 * @Author: Biyuehu biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-06-26 11:43:06
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueClipboards from 'vue-clipboard2';
// import Codemirror from "codemirror-editor-vue3";

import mdui from 'mdui';
import '../node_modules/mdui/dist/css/mdui.css';
import HighlightJS from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

import * as Func from './function';

const app = createApp(App);
const pinia = createPinia();

// 自定义一个代码高亮指令
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: HTMLElement) => {
        HighlightJS.highlightBlock(block)
    })
})

pinia.use(piniaPluginPersistedstate);

app.config.globalProperties.$func = Func;
app.config.globalProperties.$mdui = mdui;
app.use(Router);
app.use(pinia);
app.use(VueClipboards);
// app.use(VueCodeMirror);
app.mount('#app');

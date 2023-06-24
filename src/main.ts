import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist'
import VueClipboards from 'vue-clipboard2';
import mdui from 'mdui';
import '../node_modules/mdui/dist/css/mdui.css';
import * as Func from './function';
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/lib/common'
// import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.config.globalProperties.$Func = Func;
app.config.globalProperties.$mdui = mdui;
// app.config.globalProperties.$hljs = hljs

app.use(Router);
app.use(pinia);
app.use(VueClipboards);
// app.use(hljsVuePlugin);
app.mount('#app');

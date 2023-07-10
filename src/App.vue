<!--
 * @Author: Biyuehu biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-06-26 18:48:43
-->
<template>
    <div v-if="denpendPage">
        <router-view />
    </div>
    <div v-else :style="`--background-image: url(${settings.background ? settings.background : '/background.png'});`"
        :class="`bg mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
        <HeaderCom />
        <div class="mdui-typo">
            <router-view />
        </div>
        <SettingsCom />
    </div>
</template>

<style scoped>
.bg:before {
    background-image: var(--background-image);
}
</style>

<script setup lang="ts">
import { provide, getCurrentInstance, onMounted, ComponentInternalInstance, ComponentPublicInstance, watch, ref } from 'vue';
import HeaderCom from './components/HeaderCom.vue';
import SettingsCom from './components/SettingsCom.vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from './store';
import { App, docType } from './function';

import DocData from './json/DocData.json';
import { useRoute } from 'vue-router';

const router = useRoute();
const denpendPage = ref<boolean>(false);
watch(router, () => {
    const Doc =  App.getDoc(<docType[]>DocData, <string>router.params.pageType);
    if (typeof Doc === 'object' && Doc.page) denpendPage.value = true;
}, { deep: true });

const { proxy } = <ComponentInternalInstance>getCurrentInstance();

/* 加载用户设置 */
const mainStore = useMainStore();
const { settings } = storeToRefs(mainStore);
onMounted(() => App.setThemeLayout((<ComponentPublicInstance>proxy).$el.offsetParent.classList, settings.value.theme.layout));
provide('settings', settings);
provide('mainStore', mainStore);
provide('settingsMethod', {
    setThemeLayout: () => App.setThemeLayout((<ComponentPublicInstance>proxy).$el.offsetParent.classList, settings.value.theme.layout /* === 'light' ? settings.value.theme.primary.toLowerCase().replace(' ', '') : settings.value.theme.layout */ )
});
</script>
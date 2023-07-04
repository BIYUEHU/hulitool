<!--
 * @Author: Biyuehu biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-06-26 18:48:43
-->
<template>
    <div :style="`--background-image: url(${settings.background ? settings.background : '/background.jpg'});`"
        :class="`bg mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
        <HeaderCom />
        <div class="mdui-typo">
            <router-view/>
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
import { provide, getCurrentInstance, onMounted, ComponentInternalInstance, ComponentPublicInstance } from 'vue';
import HeaderCom from './components/HeaderCom.vue';
import SettingsCom from './components/SettingsCom.vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from './store';
import { App } from './function';

const { proxy } = <ComponentInternalInstance>getCurrentInstance();

/* 加载用户设置 */
const mainStore = useMainStore();
const { settings } = storeToRefs(mainStore);
onMounted(() => App.setThemeLayout((<ComponentPublicInstance>proxy).$el.offsetParent.classList, settings.value.theme.layout));
provide('settings', settings);
provide('mainStore', mainStore);
provide('settingsMethod', {
    setThemeLayout: () => App.setThemeLayout((<ComponentPublicInstance>proxy).$el.offsetParent.classList, settings.value.theme.layout)
});
</script>
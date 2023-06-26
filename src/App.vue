<template>
    <div :style="`--background-image: url(${settings.background ? settings.background : '/background.jpg'});`"
        :class="`bg mdui-theme-layout-${settings.theme.layout === 'light' ? 'light' : 'auto'} mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
        <headerCom />
        <router-view></router-view>
        <settingsCom />
    </div>
</template>

<style scoped>
.bg:before {
    background-image: var(--background-image);
}
</style>

<script setup lang="ts">
import { ref, provide, getCurrentInstance, onMounted } from 'vue';
import HeaderCom from './components/HeaderCom.vue';
import SettingsCom from './components/SettingsCom.vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from './store';

const headerCom = ref(HeaderCom);
const settingsCom = ref(SettingsCom);

const { proxy } = getCurrentInstance() as any;

/* 加载用户设置 */
const mainStore = useMainStore();
const { settings } = storeToRefs(mainStore);

const setThemeLayout = () => {
    const bodyClass: DOMTokenList = proxy.$el.offsetParent.classList;

    if (settings.value.theme.layout === 'dark') {
        bodyClass.add('mdui-theme-layout-dark')
    } else {
        bodyClass.remove('mdui-theme-layout-dark');
    };
}

onMounted(() => setThemeLayout())

provide('settings', settings);
provide('settingsMethod', {
    setThemeLayout
});

</script>
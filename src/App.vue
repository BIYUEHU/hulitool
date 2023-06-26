<template>
    <div :style="`--background-image: url(${settings.background ? settings.background : '/background.jpg'});`"
        :class="`bg mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
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
    bodyClass.remove('mdui-theme-layout-auto');
    bodyClass.remove('mdui-theme-layout-light');
    bodyClass.remove('mdui-theme-layout-dark');
    switch (settings.value.theme.layout) {
        case 'light':
            break;
        case 'dark':
            bodyClass.add('mdui-theme-layout-dark')
            break;
        case 'time':
            const hours: number = new Date().getHours();
            if (hours >= 7 && hours <= 19) {
                bodyClass.add('mdui-theme-layout-light');
            } else {
                bodyClass.add('mdui-theme-layout-dark');
            }
            break;
        default:
            bodyClass.add('mdui-theme-layout-auto');
            break;
    }
}

onMounted(() => setThemeLayout());
provide('settings', settings);
provide('mainStore', mainStore);
provide('settingsMethod', {
    setThemeLayout
});



</script>
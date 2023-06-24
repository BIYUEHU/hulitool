<template>
    <div
        :class="`mdui-theme-layout-${settings.theme.layout} mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
        <headerCom />
        <router-view></router-view>
        <settingsCom />
    </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
    import { ref } from 'vue';
    import HeaderCom from './components/HeaderCom.vue';
    import SettingsCom from './components/SettingsCom.vue';
    import { storeToRefs } from 'pinia';
    import { useMainStore } from './store';

    const headerCom = ref(HeaderCom);
    const settingsCom = ref(SettingsCom);
    const mainStore = useMainStore();
    const { settings, count } = storeToRefs(mainStore);
</script>
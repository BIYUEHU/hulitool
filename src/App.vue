<template>
    <div
        :class="`mdui-theme-layout-${settings.theme.layout === 'light' ? 'light' : 'auto'} mdui-theme-primary-${settings.theme.primary} mdui-theme-accent-${settings.theme.accent} `">
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
    
    const { settings } = storeToRefs(mainStore);

    if (settings.value.theme.layout === 'dark') {
        document.getElementsByTagName('body')[0].className += ' mdui-theme-layout-dark';
    }
</script>
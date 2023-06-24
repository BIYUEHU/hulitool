<template>
    <div class="mdui-dialog" id="dialog-settings">
        <div class="mdui-dialog-title">设置文档主题</div>
        <div class="mdui-dialog-content">

            <p class="mdui-typo-title">主题色</p>
            <div class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
                <div v-for="color in ThemeData.layout" :key="color" class="mdui-col">
                    <label class="mdui-radio mdui-m-b-1">
                        <input v-model="themeSettings.layout" @change="setThemeLayout()" type="radio" name="theme-layout" :value="color.toLowerCase()">
                        <i class="mdui-radio-icon"></i>
                        {{ color }}
                    </label>
                </div>
            </div>

            <p class="mdui-typo-title mdui-text-color-theme">主色</p>
            <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
                <div v-for="color in ThemeData.primary" :key="color"
                    :class="`mdui-col mdui-text-color-${handle(color)}`">
                    <label class="mdui-radio mdui-m-b-1">
                        <input v-model="themeSettings.primary" type="radio" name="theme-primary" :value="handle(color)">
                        <i class="mdui-radio-icon"></i>
                        {{ color }}
                    </label>
                </div>
            </form>

            <p class="mdui-typo-title mdui-text-color-theme-accent">强调色</p>
            <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
                <div v-for="color in ThemeData.accent" :class="`mdui-col mdui-text-color-${handle(color)}`">
                    <label class="mdui-radio mdui-m-b-1">
                        <input v-model="themeSettings.accent" type="radio" name="theme-accent" :value="handle(color)">
                        <i class="mdui-radio-icon"></i>
                        {{ color }}
                    </label>
                </div>
            </form>

        </div>
        <div class="mdui-divider"></div>
        <div class="mdui-dialog-actions">
            <button class="mdui-btn mdui-ripple mdui-float-left" @click="(useMainStore() as any).setDefaultTheme()">恢复默认主题</button>
            <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="">确定</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ThemeData from '../json/ThemeData.json';
    import { useMainStore } from '../store';
    const themeSettings = useMainStore().settings.theme;
    const handle = (string: string) => {
        return string.toLowerCase().replace(' ', '-')
    };
    const setThemeLayout = () => {
        if (themeSettings.layout === 'dark') {
            document.getElementsByTagName('body')[0].className += ' mdui-theme-layout-dark' 
        } else {
            document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace('mdui-theme-layout-dark', ''); 
        };
    }
</script>
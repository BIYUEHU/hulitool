<template>
    <div class="mdui-dialog" id="dialog-settings">
        <div class="mdui-dialog-title">设置</div>
        <div class="mdui-dialog-content">
            <div class="mdui-textfield">
                <label class="mdui-textfield-label">ChatGPT Skey</label>
                <input class="mdui-textfield-input" v-model="settings.skey" type="text" placeholder="请输入Skey" />
            </div>
            <div class="mdui-textfield">
                <label class="mdui-textfield-label">背景图片</label>
                <input class="mdui-textfield-input" v-model="settings.background" type="text" placeholder="请输入图片URL" />
            </div>
            <div>
                <p class="mdui-typo-title">界面主题</p>
                <label class="mdui-textfield">主题色</label>
                <div class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-4">
                    <div v-for="color in ThemeData.layout" :key="color" class="mdui-col">
                        <label class="mdui-radio mdui-m-b-1">
                            <input v-model="settings.theme.layout" @change="method.setThemeLayout()" type="radio"
                                name="theme-layout" :value="color.toLowerCase()">
                            <i class="mdui-radio-icon"></i>
                            {{ color === 'Time' ? '根据时间' : color }}
                        </label>
                    </div>
                </div>
                <label class="mdui-textfield mdui-text-color-theme">主色</label>
                <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
                    <div v-for="color in ThemeData.primary" :key="color"
                        :class="`mdui-col mdui-text-color-${handle(color)}`">
                        <label class="mdui-radio mdui-m-b-1">
                            <input v-model="settings.theme.primary" type="radio" name="theme-primary"
                                :value="handle(color)">
                            <i class="mdui-radio-icon"></i>
                            {{ color }}
                        </label>
                    </div>
                </form>
                <label class="mdui-textfield mdui-text-color-accent">强调色</label>
                <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">
                    <div v-for="color in ThemeData.accent" :class="`mdui-col mdui-text-color-${handle(color)}`">
                        <label class="mdui-radio mdui-m-b-1">
                            <input v-model="settings.theme.accent" type="radio" name="theme-accent" :value="handle(color)">
                            <i class="mdui-radio-icon"></i>
                            {{ color }}
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div class="mdui-divider"></div>
        <div class="mdui-dialog-actions">
            <button class="mdui-btn mdui-ripple mdui-float-left" @click="mainStore.setDefaultTheme()">恢复默认设置</button>
            <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="" @click="tips('保存成功')">确定</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import ThemeData from '../json/ThemeData.json';
import { tips } from '../function';

const settings = inject('settings') as any;
const mainStore = inject('mainStore') as any;
const handle = (string: string) => {
    return string.toLowerCase().replace(' ', '-')
};
const method = inject('settingsMethod') as any;

</script>
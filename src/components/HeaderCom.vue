<template>
    <div>
        <!-- 标题栏 -->
        <header class="appbar mdui-appbar mdui-appbar-fixed">
            <div class="mdui-toolbar mdui-color-theme">
                <span mdui-drawer="{target: '#main-drawer'}"
                    class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white">
                    <i class="mdui-icon material-icons">menu</i>
                </span>

                <router-link to="/" class="mdui-typo-headline">HULITool</router-link>
                <div class="mdui-toolbar-spacer"></div>

                <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: '设置'}"
                    mdui-dialog="{target: '#dialog-settings'}"><i class="mdui-icon material-icons">settings</i></span>
                <router-link to="/about" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
                    mdui-tooltip="{content: '关于'}"><i class="mdui-icon material-icons">info_outline</i></router-link>
                <a href="http://imlolicon.tk" target="_blank"
                    class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white mdui-text-color-red"
                    mdui-tooltip="{content: '前往<br>糊狸博客'}"><i class="mdui-icon material-icons">favorite</i></a>
            </div>
        </header>

        <!-- 左边栏 -->
        <div class="mdui-drawer mdui-shadow-6" id="main-drawer">
            <div class="mdui-list" mdui-collapse="{accordion: true}">
                <router-link :to="item.path" class="mdui-list-item mdui-ripple" v-for="item in NavData[0]" :key="item">
                    <i class="mdui-list-item-icon mdui-icon material-icons">
                        <i style="font-style:normal" :class="item.color">{{ item.icon }}</i>
                    </i>
                    <div class="mdui-list-item-content">{{ item.name }}</div>
                </router-link>
                <div class="mdui-collapse-item">
                    <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i
                            class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-purple-700">cloud_circle</i>
                        <div class="mdui-list-item-content">在线接口</div>
                        <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                    </div>
                    <div class="mdui-collapse-item-body mdui-list" style="height: auto;">
                        <router-link :to="item.path" class="mdui-list-item mdui-ripple" v-for="item in NavData[1]"
                            :key="item">
                            <i class="mdui-list-item-icon mdui-icon material-icons">
                                <i style="font-style:normal" :class="item.color">{{ item.icon }}</i>
                            </i>
                            <div class="mdui-list-item-content">{{ item.name }}</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NavData from '../json/NavData.json';
</script>
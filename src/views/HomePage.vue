<template>
    <div id="main">
        <img v-for="item in data.bandage" :key="item[1]" :src="item[0]" :alt="item[1]">

        <h4>欢迎来到<strong style="color:aquamarine">HULITOOL*工具箱</strong></h4>

        <div>
            <button class="huli-button-blue mdui-btn mdui-btn-raised mdui-ripple"
                mdui-dialog="{target: '#sponsor'}"><strong><i class="mdui-icon material-icons">attach_money</i>
                    打赏一下</strong></button><br>
            <router-link style="margin-top: 10px;" class="huli-button-blue mdui-btn mdui-btn-raised mdui-ripple"
                to="/about"><strong><i class="mdui-icon material-icons">info_outline</i> 关于项目</strong></router-link>
        </div>

        <div class="mdui-dialog" id="sponsor" style="display: block; top: 545px; height: 189px;">
            <div class="mdui-dialog-title">Sponsor</div>
            <div class="mdui-dialog-content" style="height: 69px;">BTC地址:
                <mark mdui-tooltip="{content: '手动复制'}">{{ data.btc }}</mark>
            </div>
            <div class="mdui-dialog-actions">
                <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="">OK</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '../json/AboutData.json';
</script>

<style>
img {
    margin-right: 5px
}
</style>

<template>
    <div id="main">
        <img src="https://img.shields.io/github/package-json/v/biyuehu/hulitool">
        <img src="https://camo.githubusercontent.com/8addc1e46efd92165de0d5fa6d5fd6a3817251a50a45544710ae4eaf486e3fe5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f626979756568752f6b6f746f72692d626f743f636f6c6f723d64656570677265656e">
        <img src="https://img.shields.io/github/stars/biyuehu/hulitool">
        <h4>欢迎来到<strong style="color:aquamarine">HULITOOL*工具箱</strong></h4>

        <div>
            <button class="huli-button-blue mdui-btn mdui-btn-raised mdui-ripple"
                mdui-dialog="{target: '#sponsor'}"><strong><i
                        class="mdui-icon material-icons">attach_money</i> 打赏一下</strong></button><br>
            <router-link style="margin-top: 10px;" class="huli-button-blue mdui-btn mdui-btn-raised mdui-ripple"
                to="/about"><strong style="text-decoration: none;"><i
                        class="mdui-icon material-icons">info_outline</i> 关于项目</strong></router-link>
        </div>

        <div class="mdui-dialog" id="sponsor" style="display: block; top: 545px; height: 189px;">
            <div class="mdui-dialog-title">打赏</div>
            <div class="mdui-dialog-content" style="height: 69px;">BTC地址:
                <span mdui-tooltip="{content: '手动复制'}">{{ BTC }}</span>
            </div>
            <div class="mdui-dialog-actions">
                <button class="mdui-btn mdui-ripple" mdui-dialog-close="">取消</button>
                <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="">確定</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import mdui from 'mdui';
const BTC = 'bc1qe0kn3hkqls54rfrjkj5ezcyvtk8suxcy0lfz3r';
</script>

<style>
#main {
    margin: 10% 15%;
}

img {
    margin-right: 5px
}
</style>

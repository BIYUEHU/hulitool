<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">转义前</label>
            <textarea v-model="msg_before" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="msg_after = LockHtmlCom.encode(msg_before)"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">转义</button>
        <button @click="msg_before = LockHtmlCom.decode(msg_after)"
            class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">去转义</button>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">转义后</label>
            <textarea v-model="msg_after" rows="10" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LockHtmlCom } from '@/function';
const msg_before = ref('<body><a href="https://链接地址.com">点我跳转</a></body>'), msg_after = ref('');
</script>
<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">时间戳</label>
            <textarea v-model="msg_before" rows="5" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="msg_after = ToolTimeCom.encode(msg_before)"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">转时间</button>
        <button @click="msg_before = ToolTimeCom.decode(msg_after)"
            class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"
            mdui-tooltip="{content: '时间戳是一个时间点的数字表示,它以Unix纪元时间(1970年1月1日 0点0分0秒)到当前时间的总秒数来表示'}">转时间戳</button>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">时间</label>
            <textarea v-model="msg_after" rows="5" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ToolTimeCom } from '@/function';
const msg_before = ref(Math.round(new Date() as unknown as number / 1000)), msg_after = ref('');
</script>

<template>
    <codemirror v-model="code" :style="{ height: '400px' }" :autofocus="true" :indent-with-tab="true" :tabSize="4"
        :extensions="extensions" /><br>
    <button @click="code ? (code = CodeHtmlCom.format(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">格式化</button>
    <button @click="code ? (code = CodeHtmlCom.zip(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple" mdui-tooltip="{content: '将代码压缩成一行'}">压缩</button>
    <button @click="copyContent(proxy!, code)" class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">复制</button>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { Codemirror } from "vue-codemirror";
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark'
import { tips, copyContent, CodeHtmlCom } from '@/function';

const code = ref<string>('');
const extensions = [html(), oneDark];
const { proxy } = <ComponentInternalInstance>getCurrentInstance();
</script>


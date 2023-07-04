
<template>
    <codemirror v-model="code" :style="{ height: '400px' }" :autofocus="true" :indent-with-tab="true" :tabSize="4"
        :extensions="extensions" /><br>
    <button @click="code ? (code = CodeCssCom.format(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">格式化</button>
    <button @click="code ? (code = CodeCssCom.zip(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">压缩</button>
    <button @click="copyContent(<any>proxy, code)" class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">复制</button>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { Codemirror } from "vue-codemirror";
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark'
import { tips, copyContent, CodeCssCom } from '../../function';

const code = ref<string>('');
const extensions = [css(), oneDark];
const { proxy } = <ComponentInternalInstance>getCurrentInstance();
</script>


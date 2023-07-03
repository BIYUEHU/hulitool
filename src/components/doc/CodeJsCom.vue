
<template>
    <codemirror v-model="code" :style="{ height: '400px' }" :autofocus="true" :indent-with-tab="true" :tabSize="4"
        :extensions="extensions" /><br>
    <button @click="code ? (result = CodeJsCom.run(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">运行</button>
    <button @click="code ? (code) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">混淆</button>
    <button @click="code ? (code = CodeJsCom.format(code)) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">格式化</button>
    <button @click="code ? (code) : tips(1)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">压缩</button>
    <button @click="copyContent(<any>proxy, code)" class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">复制</button>
    <div class="mdui-card">
        <div class="mdui-card-header mdui-row">
            <div class="mdui-card-header-title">
                <h4>Output</h4>
            </div>
        </div>
        <div class="mdui-card-content">
            <span v-html="result"></span>
        </div>
    </div>
    <iframe v-show="false"></iframe>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { Codemirror } from "vue-codemirror";
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark'
import { tips, copyContent, CodeJsCom } from '../../function';

const code = ref<string>(''), result = ref<string>('');
const extensions = [javascript(), oneDark];
const { proxy } = <ComponentInternalInstance>getCurrentInstance();
</script>


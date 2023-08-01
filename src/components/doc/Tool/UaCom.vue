<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">编码前</label>
            <textarea v-model="uastr" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="uaData = ToolUaCom(uastr)"
            class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">解析</button>

        <div v-if="uaData.ua" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h4>解析结果</h4>
                </div>
            </div>
            <div class="mdui-card-content">
                <span>浏览器: {{ uaData.browser.name }} 版本: {{ uaData.browser.version }} <br></span>
                <span>引擎: {{ uaData.engine.name }} 版本: {{ uaData.engine.version }} <br></span>
                <span>系统: {{ uaData.os.name }} {{ uaData.os.version }} <br></span>
                <span v-if="uaData.cpu.architecture">CPU: {{ uaData.cpu.architecture }} <br></span>
                <br>
                <div class="mdui-card-header-subtitle"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ToolUaCom } from '@/function';
const uastr = ref<string>(navigator.userAgent), uaData = ref(ToolUaCom(uastr.value));
</script>
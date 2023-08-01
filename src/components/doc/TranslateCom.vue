<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">原文</label>
            <textarea v-model="msg" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="(msg && getData({ msg })) || tips(1)"
            class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-color-theme-accent mdui-ripple">点击翻译</button>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">译文</label>
            <textarea rows="10"
                class="mdui-textfield-input">{{ (dataRes as resType).data ? (<resType>dataRes).data : null }}</textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { tips, resType } from '@/function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const msg = ref('');
</script>
<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">原文</label>
            <textarea v-model="msg" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <div class="mdui-row-xs-1">
            <div class="mdui-col-xs-1">
                <button @click="(msg && method.getData({msg})) || method.tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击翻译</button>
            </div>
        </div>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">译文</label>
            <textarea rows="10" class="mdui-textfield-input">{{ dataRes ? dataRes.data : null }}</textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject, watch } from 'vue';
    const dataRes = ref(inject('dataRes')), method = ref(inject('method'));
</script>
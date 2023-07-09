<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">编码前</label>
            <textarea v-model="msg_before" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="msg_after = LockUnicodeCom.encode(msg_before, 0, false, allcode)"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">编码</button>
        <button @click="msg_before = LockUnicodeCom.decode(msg_after/* , type, decimal */)"
            class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">解码</button>
        <select class="mdui-select" mdui-select="\u____" v-model="type" id="demo">
            <option value="0" selected>\u____</option>
            <option value="1" disabled>&#____;</option>
        </select>
        <label style="margin-left: 10px;" class="mdui-checkbox" mdui-tooltip="{content: '默认只编码非ASCLL字符'}">
            <input type="checkbox" v-model="allcode" />
            <i class="mdui-checkbox-icon"></i>
            全部编码
        </label>
        <label v-if="type == 1" style="margin-left: 10px;" class="mdui-checkbox">
            <input type="checkbox" v-model="decimal" />
            <i class="mdui-checkbox-icon"></i>
            十进制编码
        </label>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">编码后</label>
            <textarea v-model="msg_after" rows="10" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LockUnicodeCom } from '../../function';
const msg_before = ref(`The universe said I love you,and because you are love\n宇宙说我爱你，因为你就是爱`), msg_after = ref(''),
type = ref<0 | 1>(0), decimal = ref<boolean>(false), allcode = ref<boolean>(false);
</script>
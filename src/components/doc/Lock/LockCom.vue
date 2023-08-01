<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">明文</label>
            <textarea v-model="msg_before" rows="10" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="msg_after = LockLockCom.encode(msg_before, type, key)"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">加密</button>
        <button @click="msg_before = LockLockCom.decode(msg_after, type, key)"
            class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">解密</button>
        <select class="mdui-select" mdui-select="MD5" v-model="type" id="demo">
            <option value="AES" selected>AES</option>
            <option value="DES">DES</option>
            <option value="Rabbit">Rabbit</option>
            <option value="RC4">RC4</option>
            <option value="RC4Drop">RC4Drop</option>
            <option value="TripleDES">TripleDES</option>
        </select>
        <input class="mdui-textfield-input" v-model="key" type="text" placeholder="密钥" />

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">密文</label>
            <textarea v-model="msg_after" rows="10" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LockLockCom, LockLockType } from '@/function';
const msg_before = ref('曾经沧海难为水，除却巫山不是云'), msg_after = ref(''), type = ref<LockLockType>('AES'), key = ref<string>('');
</script>
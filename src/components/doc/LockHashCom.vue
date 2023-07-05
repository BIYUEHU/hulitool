<template>
    <div>
        <div class="mdui-chip"><span class="mdui-chip-icon mdui-color-amber-accent"><i
                    class="mdui-icon material-icons">info_outline</i></span><span class="mdui-chip-title">哈希计算是不可逆的</span>
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">明文</label>
            <textarea v-model="msg" rows="5" class="mdui-textfield-input"></textarea>
        </div>

        <button @click="msg_after = LockHashCom.handle(msg, type, key)"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple">处理</button>
        <select class="mdui-select" mdui-select="MD5" v-model="type" id="demo">
            <option value="MD5" selected>MD5</option>
            <option value="SHA1">SHA1</option>
            <option value="SHA224">SHA224</option>
            <option value="SHA256">SHA256</option>
            <option value="SHA384">SHA384</option>
            <option value="SHA512">SHA512</option>
            <option value="SHA3">SHA3</option>
            <option value="RIPEMD160">RIPEMD160</option>
        </select>
        <label style="margin-left: 10px;" class="mdui-checkbox">
            <input type="checkbox" v-model="hmac" />
            <i class="mdui-checkbox-icon"></i>
            Hmac
        </label>
        <input v-if="hmac" class="mdui-textfield-input" v-model="key" type="text" placeholder="密钥" />

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">哈希值</label>
            <textarea v-model="msg_after" rows="5" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LockHashCom, LockHashType } from '../../function';
const msg = ref('解封、自由、人命​'), msg_after = ref(''), type = ref<LockHashType>('MD5'), hmac = ref<boolean>(false), key = ref<string>('');
</script>
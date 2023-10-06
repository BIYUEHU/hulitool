<template>
  <div>
    <div class="mdui-textfield mdui-textfield-not-empty">
      <label class="mdui-textfield-label">编码前</label>
      <textarea
        v-model="msg_before"
        rows="10"
        class="mdui-textfield-input"
      ></textarea>
    </div>

    <button
      @click="msg_after = LockUrlCom.encode(msg_before)"
      class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"
    >
      编码
    </button>
    <button
      @click="msg_before = LockUrlCom.decode(msg_after)"
      class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"
    >
      解码
    </button>

    <div class="mdui-textfield mdui-textfield-not-empty">
      <label class="mdui-textfield-label">编码后</label>
      <textarea
        v-model="msg_after"
        rows="10"
        class="mdui-textfield-input"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LockUrlCom } from "@/function";
const msg_before = ref("https://tool.hotaru.icu/#/doc/lock_html?mdui-dialog"),
  msg_after = ref("");
</script>

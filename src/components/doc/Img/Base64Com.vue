<template>
    <label mdui-tooltip="{content: '支持拖拽图片'}"
        class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i
            class="mdui-icon material-icons">file_upload</i>上传图片<input accept="image/*" type="file" style="display: none"
            @change="onFileChange"></label>
    <button @click="download" mdui-tooltip="{content: '将URI图片下载到本地'}"
        class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i
            class="mdui-icon material-icons">file_download</i>下载图片</button>
    <div v-if="imageData">
        <img :src="imageData" />
    </div>
    <div class="mdui-textfield mdui-textfield-not-empty">
        <label class="mdui-textfield-label">Base64</label>
        <textarea v-model="imageData" rows="20" class="mdui-textfield-input"></textarea>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { tips, generateRandomString, obj, ImgBase64Com } from '@/function';

const imageData = ref();

const onFileChange = (event: Event) => {
    const file = (event.target as obj).files[0] as Blob;

    ImgBase64Com.imgToBase64(file).then(base64 => {
        imageData.value = base64;
    });
}

const download = () => {
    if (!imageData.value) {
        tips('请先写入URI/Base64数据！', 'orange');
        return;
    }
    ImgBase64Com.downloadImg(imageData.value, `base64_${generateRandomString(5)}.png`);
}
</script>

<style scoped>
img {
    max-width: 90%;
    height: 90%;
    max-height: 250px;
    /* max-height: 400px; */
}
</style>
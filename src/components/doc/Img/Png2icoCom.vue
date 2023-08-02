<template>
    <label mdui-tooltip="{content: '支持拖拽图片'}"
        class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i
            class="mdui-icon material-icons">file_upload</i>上传图片<input accept="image/*" type="file" style="display: none"
            @change="onFileChange"></label>
    <button @click="download" mdui-tooltip="{content: '将ICON下载到本地'}"
        class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i
            class="mdui-icon material-icons">file_download</i>下载图片</button>
    <div v-if="imageData">
        <img :src="imageData" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { tips, generateRandomString, ImgPng2icoCom } from '@/function';
const file = ref<File>()
const imageData = ref('')
const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    file.value = target.files![0]
    convert()
}

const convert = async () => {
    if (!file.value) return;
    imageData.value = await ImgPng2icoCom.Png2ico(file.value);
}

const download = () => {
    if (!imageData.value) {
        tips('没上传下你妈', 'orange');
        return;
    }
    ImgPng2icoCom.downloadImg(imageData.value, `icon_${generateRandomString(5)}.ico`);
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
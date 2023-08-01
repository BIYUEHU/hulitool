<template>
    <div :style="`:root{--background-color2: red;}`">
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">十六进制</label>
            <textarea v-model="msg_before" rows="5" class="mdui-textfield-input"></textarea>
        </div>

        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">RGB</label>
            <textarea v-model="rgb.r" rows="1" type="number" class="mdui-textfield-input"></textarea>
            <textarea v-model="rgb.g" rows="1" type="number" class="mdui-textfield-input"></textarea>
            <textarea v-model="rgb.b" rows="1" type="number" class="mdui-textfield-input"></textarea>
        </div>
    </div>
</template>

<style>
:root {
    --background-color: var(--background-color2);
}
</style>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { ToolColorCom, toolColorType } from '@/function';
const msg_before = ref<string>(ToolColorCom.randomColor()),
rgb = reactive(ToolColorCom.hexToRgb(msg_before.value) as toolColorType);

document.body.style.backgroundColor = msg_before.value;
watch(msg_before, () => {
    document.body.style.backgroundColor = msg_before.value;
    const rgb2 = ToolColorCom.hexToRgb(msg_before.value);
    if (rgb2 !== null) {
        rgb.r = rgb2.r;
        rgb.g = rgb2.g;
        rgb.b = rgb2.b;
    }
});
watch(rgb, () => {
    document.body.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    msg_before.value = ToolColorCom.rgbToHex(rgb.r, rgb.g, rgb.b);
})
</script>
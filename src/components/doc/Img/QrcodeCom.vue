<template>
    <div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">二维码内容</label>
            <textarea v-model="content" rows="5" class="mdui-textfield-input"></textarea>
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">图片大小</label>
            <input v-model="size" type="number" class="mdui-textfield-input">
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">图片外边距</label>
            <input v-model="margin" type="number" class="mdui-textfield-input">
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">二维码容错级别</label>
            <label class="mdui-radio" style="margin-right:10px">
                <input type="radio" v-model="level" value="H" name="type" />
                <i class="mdui-radio-icon"></i>
                高
            </label>
            <label class="mdui-radio" style="margin-right:10px">
                <input type="radio" v-model="level" value="Q" name="type" />
                <i class="mdui-radio-icon"></i>
                较高
            </label>
            <label class="mdui-radio" style="margin-right:10px">
                <input type="radio" v-model="level" value="M" name="type" />
                <i class="mdui-radio-icon"></i>
                中
            </label>
            <label class="mdui-radio" style="margin-right:10px">
                <input type="radio" v-model="level" value="L" name="type" />
                <i class="mdui-radio-icon"></i>
                低
            </label>
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">图片背景色</label>
            <input v-model="background" class="mdui-textfield-input">
        </div>
        <div class="mdui-textfield mdui-textfield-not-empty">
            <label class="mdui-textfield-label">图片前景色</label>
            <input v-model="foreground" class="mdui-textfield-input">
        </div>
        <button @click="downLoadQRcode" mdui-tooltip="{content: '下载到本地'}"
            class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i class="mdui-icon material-icons">file_download</i>下载</button>
        <qrcode-vue :value="content" :size="size" :margin="margin" :level="level" :background="background" :foreground="foreground" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue';
import { generateRandomString } from '@/function';

const content = ref<string>('解封、自由、人命'), size = ref<number>(200),
margin = ref<number>(0), level = ref<'L' | 'M' | 'Q' | 'H'>('H'),
background = ref<string>('#ffffff'), foreground = ref<string>('#000000'); 

const downLoadQRcode = ():void => {
    const canvas = <HTMLCanvasElement>document.querySelector('canvas');
    const url = canvas.toDataURL("image/png");
    const aDom = document.createElement("a");
    aDom.download = `qrcode_${generateRandomString(5)}`;
    aDom.href = url;
    document.body.appendChild(aDom);
    aDom.click();
    aDom.remove();
}
</script>
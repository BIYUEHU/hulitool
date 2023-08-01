<template>
    <div>
        <div class="bg">
            <div class="count">您的功德是：{{ emuyu }}</div>
            <div class="container">
                <div class="text" :class="{ 'text-move': isAnimation.text }">功德+1</div>
                <img id="muyu" class="muyu" :class="{ 'muyu-click': isAnimation.muyu }" @click="click"
                    src="@/assets/emuyu.png" />
            </div>
        </div>
        <div>
            <input style="margin-bottom: 10px" class="mdui-textfield-input" v-model="autoTime" type="text" placeholder="自动点击间隔时间(0关闭) 单位:秒" />
            <button @click="setAutoTime"
                class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">设置自动时间</button>
            <button style="margin-left: 10px" @click="emuyu = 0"
                class="mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-ripple">清除功德</button>
        </div>
    </div>
</template>

<style scoped>
.bg {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #000;
    width: 90%;
    height: 60vh;
}

.count {
    color: #fff;
    text-align: center;
}

.container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.muyu {
    /* width: 128px; */
    height: 128px;
}

.muyu-click {
    animation: muyu-am ease 0.5s
}

@keyframes muyu-am {
    0% {
        transform: scale(1, 1);
    }

    30% {
        transform: scale(0.98, 0.98);
    }

    60% {
        transform: scale(1.11, 1.11);
    }

    100% {
        transform: scale(1, 1);
    }
}

.text {
    position: relative;
    font-size: 17px;
    top: -100px;
    left: 160px;
}

.text-move {
    color: #fff;
    /* font-size: 20px; */
    /* width: 200px; */
    /* position: absolute; */
    /*     top: -120px;
    left: -20px; */
    opacity: 0;
    animation: text-am ease-out 1.5s;
}

@keyframes text-am {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-35px);
        opacity: 0;
    }
}
</style>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useMainStore } from '@/store';
import { storeToRefs } from 'pinia';

const { emuyu } = storeToRefs(useMainStore());
const autoTime = ref<number | null>(0);

const isAnimation = reactive({
    muyu: false,
    text: false
});
const audio = new Audio('/emuyu.mp3');

const click = () => {
    isAnimation.muyu = true;
    isAnimation.text = true;
    audio.play();
    emuyu.value++;
    setTimeout(() => isAnimation.muyu = false, 500);
    setTimeout(() => isAnimation.text = false, 1500);
}

/* 点击器 */
let timerId: NodeJS.Timer;
const setAutoTime = () => {
    clearInterval(timerId);
    if (autoTime.value == 0) autoTime.value = null;
    if (autoTime.value) timerId = setInterval(() => click(), autoTime.value * 1000);
}
setAutoTime();
</script>
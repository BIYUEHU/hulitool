<template>
    <div class="mdui-text-center mdui-center">
        <button @click="method.getData()"
            class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple">再来一张</button>
        <br>
        <div class="mdui-text-valign" v-if="dataRes">
            <strong>
                <div class="mdui-text-color-blue">画师:{{ dataRes.data[0].author }} 画师ID:{{
                    dataRes.data[0].uid }}</div>
                <div class="mdui-text-color-green">PID:{{ dataRes.data[0].pid }} 标题:{{
                    dataRes.data[0].title }}</div>
                <div class="mdui-text-color-orange">标签:<span v-for="tag of dataRes.data[0].tags" :key="tag">{{ tag
                        }}、</span></div>
            </strong>
            <a target="_blank" :href="dataRes.data[0]?.url">
                <img style="max-width: 95%;max-height: 590px;" class="mdui-center" :src="dataRes.data[0].url" />
            </a>
            <h3 class="mdui-text-color-theme-accent">演示图片均为非R18!!!</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject } from 'vue';
    const dataRes: any = ref(inject('dataRes')), method: any = ref(inject('method'));
</script>
<template>
    <div class="mdui-text-center mdui-center">
        <button @click="getData()"
            class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" mdui-tooltip="{content: '首冲伤身哦~'}">再来一张</button>
        <br>
        <div class="mdui-text-valign" v-if="(<resType>dataRes).data">
            <strong>
                <div class="mdui-text-color-blue">画师:{{ (<[obj]>(<resType>dataRes).data)[0].author }} 画师ID:{{
                    (<[obj]>(<resType>dataRes).data)[0].uid }}</div>
                <div class="mdui-text-color-green">PID:{{ (<[obj]>(<resType>dataRes).data)[0].pid }} 标题:{{
                    (<[obj]>(<resType>dataRes).data)[0].title }}</div>
                <div class="mdui-text-color-orange">标签:<span v-for="tag of (<[obj]>(<resType>dataRes).data)[0].tags"
                        :key="tag">{{ tag }}、</span></div>
            </strong>
            <a target="_blank" :href="(<[obj]>(<resType>dataRes).data)[0]?.url">
                <img style="max-width: 95%;max-height: 590px;" class="mdui-center"
                    :src="(<[obj]>(<resType>dataRes).data)[0].url" />
            </a>
            <h4 class="mdui-text-color-theme-accent">演示图片均为非R18!!!</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { resType, obj } from '../../function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
</script>
<template>
    <div>
        <div class="mdui-textfield">
            <label class="mdui-textfield-label">最小值</label>
            <input class="mdui-textfield-input" v-model="min" type="number" />
        </div>
        <div class="mdui-textfield">
            <label class="mdui-textfield-label">最大值</label>
            <input class="mdui-textfield-input" v-model="max" type="number" />
        </div>
        <div class="mdui-textfield">
            <label class="mdui-textfield-label">生成数量</label>
            <input class="mdui-textfield-input" v-model="nums" type="number" />
        </div>
        <div>

            <label class="mdui-checkbox">
                <input type="checkbox" v-model="isrepeat" />
                <i class="mdui-checkbox-icon"></i>
                允许重复
            </label>
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button
                    @click="result = ToolRandomCom(min, max, nums , isrepeat)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击生成</button>
            </div>
        </div>
        <br>
        <div class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h4>生成结果</h4>
                </div>
            </div>
            <div class="mdui-card-content">
                <span v-for="num in result" :key="num">
                    {{ num }}<br>
                </span>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ToolRandomCom } from '../../function';
const min = ref<number>(0), max = ref<number>(50), nums = ref<number>(5), isrepeat = ref<boolean>(false), result = ref<number[]>([]);
</script>
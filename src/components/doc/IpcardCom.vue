<template>
    <div>
        <h2><strong>演示效果</strong></h2>
        <label class="mdui-textfield-label">选择角色</label>
        <select class="mdui-select" mdui-select="1" v-model="demoParam" id="demo">
            <option value="0" selected>随机</option>
            <option value="1">古河渚</option>
            <option value="2">香风智乃</option>
            <option value="3">立华奏</option>
            <option value="4">亚托利</option>
            <option value="5">神户小鸟</option>
            <option value="6">夜羽真白</option>
            <option value="7">Miku</option>
            <option value="8">博丽灵梦</option>
            <option value="9">枣铃</option>
            <option value="10">阿尔托莉雅</option>
            <option value="11">宫水三叶</option>
        </select><br>
        <img :src="url + demoParam" class="huli-image-normal">
        <div class="mdui-textfield mdui-textfield-not-empty mdui-row">
            <label class="mdui-textfield-label">内嵌代码</label>
            <div class="mdui-col-xs-9">
                <codemirror v-model="code" :style="{ height: '40px' }" :autofocus="false" aria-readonly="true"
                    :extensions="extensions" />
            </div>
            <div class="mdui-col-xs-3">
                <button @click="copy()" class="mdui-btn mdui-ripple">Copy</button>
            </div>
        </div>
        <span v-show="false">{{ code = `<img src="${url}${demoParam}" style="width:500px;max-width: 90%;" />` }}</span>
    </div>
</template>

<script setup lang="ts">
import mdui from 'mdui';
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue';
import { copyContent, obj } from '@/function';
const { proxy } = <ComponentInternalInstance>getCurrentInstance();
const demoParam = ref('0'), code = ref<string>(''), url = 'https://api.imlolicon.tk/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=';
const copy = () => copyContent(proxy!, `<img src="${url}${demoParam.value}" style="width:500px;max-width: 90%;" />`);

import { Codemirror } from "vue-codemirror";
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark'
const extensions = [html(), oneDark];

new (proxy as obj).$mdui.Select('#demo');
mdui.mutation();
</script>
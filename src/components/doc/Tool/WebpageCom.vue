<template>
    <div style="margin-top: 20px;">
        <card class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title mdui-typo">
                    <h3 v-if="template">开始制作<small>当前模板：{{ template.name }}</small></h3>
                    <h3 v-else>选择一个模板</h3>
                </div>
            </div>
            <div class="mdui-card-content">
                <div v-if="template">
                    <button @click="template = undefined"
                        class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"><i
                            class="mdui-icon material-icons">arrow_back</i>重新选择</button>
                    <button @click="ToolWebpageCom(template.api + '?' + displayParams, template.name)" mdui-tooltip="{content: '下载HTML文件到本地'}"
                        class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"><i
                            class="mdui-icon material-icons">file_download</i>下载源码</button>
                    <h4>字段填写</h4>
                    <div v-for="item in template.params">
                        <h4>{{ item.key }} <small>{{ item.note }}</small></h4>
                        <label>必要：{{ item.must ? '是' : '否' }} 类型：{{ item.type }}</label>
                        <input class="mdui-textfield-input" v-model="item.value" type="text" />
                    </div>
                    <h4>实时预览</h4>
                    <iframe :src="template.api + '?' + displayParams"
                        style="width: 90%;max-width: 1200px;height: 600px;max-height: 100%;"></iframe>
                </div>
                <table v-else class="mdui-table mdui-table-hoverable">
                    <thead>
                        <tr>
                            <th>名字</th>
                            <th>介绍</th>
                            <th>作者</th>
                            <th>来源</th>
                            <th>参数量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in WebpageData" :key="item.name" @click="choseTemplate(index)">
                            <td>{{ item.name }}</td>
                            <td>{{ item.descr }}</td>
                            <td>{{ item.author }}</td>
                            <td><a :href="item.url" target="_blank">点击跳转</a></td>
                            <td>{{ item.params.length }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </card>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ToolWebpageCom, WebpageData as WD } from '@/function';
import WebpageData from '@/json/WebpageData.json';

const template = ref<WD>();
const displayParams = computed(() => {
    let params = '';
    template.value && template.value.params.forEach(element => {
        params += `&${element.key}=${element.value}`;
    });
    return params.substring(1);
});

const choseTemplate = (index: number) => {
    template.value = WebpageData[index];
}
</script>
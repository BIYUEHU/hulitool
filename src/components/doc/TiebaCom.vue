<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-lime-a700">account_circle</i>
            <label class="mdui-textfield-label">贴吧ID</label>
            <input class="mdui-textfield-input" v-model="name" maxlength="30" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="page = 1, (name && getData({ name, page })) || tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">查一查</button>
            </div>
        </div>
        <br>
        <div v-if="(<resType>dataRes).code" class="mdui-card mdui-hoverable">
            <div v-if="(<resType>dataRes).code === 500">
                <div class="mdui-table-fluid">
                    <table class="mdui-table mdui-table-hoverable">
                        <thead>
                            <tr>
                                <th>标题</th>
                                <th>内容</th>
                                <th>吧</th>
                                <th>时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in (<tiebaData[]>(<resType>dataRes).data)" :key="item.url">
                                <td><a target="_blank" :href="item.url">{{ item.title }}</a></td>
                                <td>{{ item.content }}</td>
                                <td>{{ item.group }}</td>
                                <td>{{ item.time }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button @click="(name && getData({ name, page: page++ })) || tips(1)"
                    class="mdui-center mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">查看更多</button>
            </div>
            <div v-else-if="(<resType>dataRes).code === 502">
                {{ tips('用户不存在！', 'red'), dataRes = {} }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { tips, resType, tiebaData } from '../../function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const name = ref(''), page = ref<number>(1);
</script>
<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-lime-a700">account_circle</i>
            <label class="mdui-textfield-label">游戏ID</label>
            <input class="mdui-textfield-input" v-model="name" maxlength="30" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="(name && getData({ name })) || tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">让我查查！</button>
            </div>
        </div>
        <br>
        <div v-if="(<resType>dataRes).code" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h4>查询结果</h4>
                </div>
            </div>
            <div class="mdui-card-content">
                <div v-if="(<resType>dataRes).code === 500">
                    <span>皮肤: <img :src="(<mcskinData>(<resType>dataRes).data).skin"><br></span>
                    <span>披风: <span v-if="(<mcskinData>(<resType>dataRes).data).cape">
                            <img :src="(<mcskinData>(<resType>dataRes).data).cape!">
                        </span>
                        <span v-else>无</span><br>
                    </span>
                    <span>头颅: <span v-if="(<mcskinData>(<resType>dataRes).data).avatar">
                            <img :src="(<mcskinData>(<resType>dataRes).data).avatar!">
                        </span>
                        <span v-else>无</span><br>
                    </span>
                </div>
                <div v-else-if="(<resType>dataRes).code === 502">
                    {{ tips('用户不存在！', 'red'), dataRes = {} }}
                </div>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { tips, resType, mcskinData } from '../../function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const name = ref('');
</script>
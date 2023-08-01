<template>
    <div>
        <div>
            <label class="mdui-radio" style="margin-right:5px">
                <input type="radio" v-model="type" value="be" name="type" />
                <i class="mdui-radio-icon"></i>
                BE版
            </label>
            <label class="mdui-radio">
                <input type="radio" v-model="type" value="je" name="type" />
                <i class="mdui-radio-icon"></i>
                JAVA版
            </label>
        </div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-lime-a700">computer</i>
            <label class="mdui-textfield-label">域名/IP</label>
            <input class="mdui-textfield-input" v-model="ip" maxlength="30" type="text" />
        </div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-lime-a700">bug_report</i>
            <label class="mdui-textfield-label">端口</label>
            <input class="mdui-textfield-input" v-model="port" maxlength="6" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button
                    @click="(ip && getData({ ip, port: port ? port : (type === 'be' ? 19132 : 25565), type },)) || tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击查询</button>
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
                <div v-if="(<obj>(<resType>dataRes)).data.status === 'online'">
                    {{ tips('服务器在线', 'lightgreen') }}
                    <span><strong>状态:</strong><span class="mdui-text-color-green">在线</span><br></span>
                    <span><strong>域名/IP:</strong>{{ (<obj>(<resType>dataRes)).data.ip }}</span>
                    <span><strong>端口:</strong>{{ (<obj>(<resType>dataRes)).data.port }}<br></span>
                    <span><strong>RealIP:</strong>{{ (<obj>(<resType>dataRes)).data.real }}</span>
                    <span><strong>物理地址:</strong>{{ (<obj>(<resType>dataRes)).data.location }}<br></span>
                    <span><strong>提示信息:</strong>{{ (<obj>(<resType>dataRes)).data.motd }}</span>
                    <span v-if="(<obj>(<resType>dataRes)).data.gamemode"><strong>游戏模式:</strong>
                        {{ (<obj>(<resType>dataRes)).data.gamemode }}<br></span>
                    <span><strong>协议版本:</strong>{{ (<obj>(<resType>dataRes)).data.agreement }}</span>
                    <span><strong>游戏版本:</strong>{{ (<obj>(<resType>dataRes)).data.version }}<br></span>
                    <span><strong>在线人数:</strong>
                        {{ (<obj>(<resType>dataRes)).data.online }} / {{ (<obj>(<resType>dataRes)).data.max }}</span>
                    <span v-if="(<obj>(<resType>dataRes)).data.delay"><strong>Delay:</strong>
                        {{ (<obj>(<resType>dataRes)).data.delay }}<br></span>
                    <span v-if="(<obj>(<resType>dataRes)).data.ping !== undefined"><strong>延迟:</strong>
                        {{ (<obj>(<resType>dataRes)).data.ping }}ms<br></span>
                    <span v-if="(<obj>(<resType>dataRes)).data.icon !== undefined"><strong>图标:</strong>
                        <img v-if="typeof (<obj>(<resType>dataRes)).data.icon === 'string'"
                            :src="(<obj>(<resType>dataRes)).data.icon"><br>
                    </span>
                    <span v-if="(<obj>(<resType>dataRes)).data.modinfo !== undefined"><strong>模组信息:</strong>
                        <span v-if="(<obj>(<resType>dataRes)).data.modinfo !== false">
                            {{ (<obj>(<resType>dataRes)).data.modinfo }}</span><br>
                    </span>
                </div>
                <div v-else-if="(<obj>(<resType>dataRes)).data.status === 'offline'">
                    {{ tips('服务器离线!', 'red'), dataRes = {} }}
                    状态:<span class="mdui-text-color-red">离线</span><br>
                    <strong>域名/IP:</strong>{{ ip }}
                    <strong>端口:</strong>{{ port }}
                </div>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { tips, resType, obj } from '@/function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const type = ref('be'), ip = ref(''), port = ref();
</script>
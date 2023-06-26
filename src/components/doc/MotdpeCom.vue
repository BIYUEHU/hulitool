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
                <button @click="(ip && method.getData({ ip, port: port ? port : (type === 'be' ? 19132 : 25565), type }, )) || method.tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击查询</button>
            </div>
        </div>
        <br>
        <div v-if="dataRes" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h3>查询结果</h3>
                </div>
            </div>
            <div class="mdui-card-content">
                <div v-if="dataRes.data.status === 'online'">
                    {{ method.tips('服务器在线', 'lightgreen') }}
                    <strong>状态:</strong><span class="mdui-text-color-green">在线</span><br>
                    <strong>域名/IP:</strong>{{ dataRes.data.ip }}
                    <strong>端口:</strong>{{ dataRes.data.port }}<br>
                    <strong>RealIP:</strong>{{ dataRes.data.real }}
                    <strong>物理地址:</strong>{{ dataRes.data.location }}<br>
                    <strong>提示信息:</strong>{{ dataRes.data.motd }}
                    <span v-if="dataRes.data.gamemode"><strong>游戏模式:</strong>{{ dataRes.data.gamemode }}<br></span>
                    <strong>协议版本:</strong>{{ dataRes.data.agreement }}
                    <strong>游戏版本:</strong>{{ dataRes.data.version }}<br>
                    <strong>在线人数:</strong>{{ dataRes.data.online }} / {{ dataRes.data.max }}
                    <span v-if="dataRes.data.delay"><strong>Delay:</strong>{{ dataRes.data.delay }}<br></span>
                    <span v-if="dataRes.data.ping !== undefined"><strong>延迟:</strong>{{ dataRes.data.ping }}ms<br></span>
                    <span v-if="dataRes.data.icon !== undefined"><strong>图标:</strong>
                        <img v-if="typeof dataRes.data.icon === 'string'" :src="dataRes.data.icon"><br>
                    </span>
                    <span v-if="dataRes.data.modinfo !== undefined"><strong>模组信息:</strong>
                        <span v-if="dataRes.data.modinfo !== false">{{ dataRes.data.modinfo }}</span><br>
                    </span>
                </div>
                <div v-else-if="dataRes.data.status === 'offline'">
                    {{ method.tips('服务器离线!', 'red'), dataRes = null  }}
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
const dataRes: any = ref(inject('dataRes')), method: any = ref(inject('method'));
const type = ref('be'),ip = ref(''), port = ref();
</script>
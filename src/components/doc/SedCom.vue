<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-green-800"><svg class="icon"
                    style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1514">
                    <path
                        d="M701 568.7H587.6c-15.7 0-28.3-12.7-28.3-28.3 0-15.7 12.7-28.3 28.3-28.3H701c15.7 0 28.3 12.7 28.3 28.3 0.1 15.6-12.7 28.3-28.3 28.3zM814.4 738.8H341.9c-15.7 0-28.3-12.7-28.3-28.3 0-15.7 12.7-28.3 28.3-28.3h472.5c15.7 0 28.3 12.7 28.3 28.3 0 15.6-12.7 28.3-28.3 28.3zM776.6 474.3h-189c-15.7 0-28.3-12.7-28.3-28.3s12.7-28.3 28.3-28.3h189c15.7 0 28.3 12.7 28.3 28.3s-12.7 28.3-28.3 28.3zM398.6 587.6c-46.9 0-85-38.1-85-85s38.1-85 85-85 85 38.1 85 85-38.1 85-85 85z m0-113.3c-15.7 0-28.3 12.7-28.3 28.3 0 15.6 12.7 28.3 28.3 28.3s28.3-12.7 28.3-28.3c0.1-15.6-12.7-28.3-28.3-28.3zM871 852.2H266.3c-36.4 0-66.2-29.7-66.2-66.2V370.2c0-36.4 29.7-66.2 66.2-66.2H871c36.4 0 66.2 29.7 66.2 66.2v320.4c0 15.7-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3V370.2c0-5.2-4.2-9.4-9.4-9.4H266.3c-5.2 0-9.4 4.2-9.4 9.4V786c0 5.2 4.2 9.4 9.4 9.4H871c15.7 0 28.3 12.7 28.3 28.3 0.2 15.7-12.6 28.5-28.3 28.5zM227.2 719.8H153c-36.4 0-66.2-29.7-66.2-66.2V238c0-36.4 29.7-66.2 66.2-66.2h604.7c36.4 0 66.2 29.7 66.2 66.2v93.8c0 15.7-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3V238c0-5.2-4.2-9.4-9.4-9.4H153c-5.2 0-9.4 4.2-9.4 9.4v415.8c0 5.2 4.2 9.4 9.4 9.4h74.2c15.7 0 28.3 12.7 28.3 28.3 0 15.7-12.7 28.3-28.3 28.3z"
                        p-id="1515"></path>
                </svg></i>
            <label class="mdui-textfield-label">查询内容</label>
            <input class="mdui-textfield-input" v-model="msg" maxlength="100" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col-xs-1">
                <button @click="(msg && getData({ msg })) || tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">社工查询</button>
            </div>
        </div>
        <br>
        <div v-if="(<resType>dataRes).code" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h4>社工查询结果</h4>
                </div>
            </div>
            <div class="mdui-card-content">
                <span><strong>消耗时间:</strong>{{ (<number>(<resType>dataRes).takeTime).toFixed(2) }}秒<br></span>
                <span><strong>有效数据量:</strong>{{ (<resType>dataRes).count }}条<br></span>
                <div v-if="(<resType>dataRes).code === 500">
                    <span v-if="(<obj>(<resType>dataRes).data).qq">
                        <span><strong>QQ:</strong>{{ (<obj>(<resType>dataRes).data).qq }}<br></span>
                    </span>
                    <span v-if="(<obj>(<resType>dataRes).data).phone">
                        <span><strong>手机号:</strong>{{ (<obj>(<resType>dataRes).data).phone }}</span>
                        <span><strong>地址:</strong>{{ (<obj>(<resType>dataRes).data).location }}<br></span>
                    </span>
                    <span v-if="(<obj>(<resType>dataRes).data).id">
                        <span><strong>LOLID:</strong>{{ (<obj>(<resType>dataRes).data).id }}</span>
                        <span><strong>LOL区域:</strong>{{ (<obj>(<resType>dataRes).data).area }}<br></span>
                    </span>
                    <span v-if="(<obj>(<resType>dataRes).data).text">身份证信息:<br>
                        <span><strong>性别:</strong>{{ (<obj>(<resType>dataRes).data).gender }}</span>
                        <span><strong>出生日期:</strong>{{ (<obj>(<resType>dataRes).data).birthday }}<br></span>
                        <span><strong>年龄:</strong>{{ (<obj>(<resType>dataRes).data).age }}</span>
                        <span><strong>成年:</strong></span>
                        <span v-if="(<obj>(<resType>dataRes).data).audlt === 1">是</span>
                        <span v-else>否</span><br>
                        <span><strong>省份:</strong>{{ (<obj>(<resType>dataRes).data).province }}</span>
                        <span><strong>地址:</strong>{{ (<obj>(<resType>dataRes).data).address }}<br></span>
                        <span><strong>属相:</strong>{{ (<obj>(<resType>dataRes).data).zodiac }}</span>
                        <span><strong>星座:</strong>{{ (<obj>(<resType>dataRes).data).starsign }}<br></span>
                    </span>
                </div>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { tips, resType, obj } from '../../function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const msg = ref('');
</script>
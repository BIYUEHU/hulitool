<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-green-800"><svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1514"><path d="M701 568.7H587.6c-15.7 0-28.3-12.7-28.3-28.3 0-15.7 12.7-28.3 28.3-28.3H701c15.7 0 28.3 12.7 28.3 28.3 0.1 15.6-12.7 28.3-28.3 28.3zM814.4 738.8H341.9c-15.7 0-28.3-12.7-28.3-28.3 0-15.7 12.7-28.3 28.3-28.3h472.5c15.7 0 28.3 12.7 28.3 28.3 0 15.6-12.7 28.3-28.3 28.3zM776.6 474.3h-189c-15.7 0-28.3-12.7-28.3-28.3s12.7-28.3 28.3-28.3h189c15.7 0 28.3 12.7 28.3 28.3s-12.7 28.3-28.3 28.3zM398.6 587.6c-46.9 0-85-38.1-85-85s38.1-85 85-85 85 38.1 85 85-38.1 85-85 85z m0-113.3c-15.7 0-28.3 12.7-28.3 28.3 0 15.6 12.7 28.3 28.3 28.3s28.3-12.7 28.3-28.3c0.1-15.6-12.7-28.3-28.3-28.3zM871 852.2H266.3c-36.4 0-66.2-29.7-66.2-66.2V370.2c0-36.4 29.7-66.2 66.2-66.2H871c36.4 0 66.2 29.7 66.2 66.2v320.4c0 15.7-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3V370.2c0-5.2-4.2-9.4-9.4-9.4H266.3c-5.2 0-9.4 4.2-9.4 9.4V786c0 5.2 4.2 9.4 9.4 9.4H871c15.7 0 28.3 12.7 28.3 28.3 0.2 15.7-12.6 28.5-28.3 28.5zM227.2 719.8H153c-36.4 0-66.2-29.7-66.2-66.2V238c0-36.4 29.7-66.2 66.2-66.2h604.7c36.4 0 66.2 29.7 66.2 66.2v93.8c0 15.7-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3V238c0-5.2-4.2-9.4-9.4-9.4H153c-5.2 0-9.4 4.2-9.4 9.4v415.8c0 5.2 4.2 9.4 9.4 9.4h74.2c15.7 0 28.3 12.7 28.3 28.3 0 15.7-12.7 28.3-28.3 28.3z" p-id="1515"></path></svg></i>
            <label class="mdui-textfield-label">查询内容</label>
            <input class="mdui-textfield-input" v-model="msg" maxlength="100" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col-xs-1">
                <button @click="(msg && getData({ msg })) || lib.func.tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">社工查询</button>
            </div>
        </div>
        <br>
        <div v-if="dataRes" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h3>社工查询结果</h3>
                </div>
            </div>
            <div class="mdui-card-content">
                <strong>消耗时间:</strong>{{ dataRes.takeTime.toFixed(2) }}秒<br>
                <strong>有效数据量:</strong>{{ dataRes.count }}条<br>
                <div v-if="dataRes.code === 500">
                    <span v-if="dataRes.data.qq">
                        <strong>QQ:</strong>{{ dataRes.data.qq }}<br>
                    </span>
                    <span v-if="dataRes.data.phone">
                        <strong>手机号:</strong>{{ dataRes.data.phone }}
                        <strong>地址:</strong>{{ dataRes.data.location }}<br>
                    </span>
                    <span v-if="dataRes.data.id">
                        <strong>LOLID:</strong>{{ dataRes.data.id }}
                        <strong>LOL区域:</strong>{{ dataRes.data.area }}<br>
                    </span>
                    <span v-if="dataRes.data.text">身份证信息:<br>
                        <strong>性别:</strong>{{ dataRes.data.gender }}
                        <strong>出生日期:</strong>{{ dataRes.data.birthday }}<br>
                        <strong>年龄:</strong>{{ dataRes.data.age }}
                        <strong>成年:</strong>
                        <span v-if="dataRes.data.audlt === 1">是</span>
                        <span v-else>否</span><br>
                        <strong>省份:</strong>{{ dataRes.data.province }}
                        <strong>地址:</strong>{{ dataRes.data.address }}<br>
                        <strong>属相:</strong>{{ dataRes.data.zodiac }}
                        <strong>星座:</strong>{{ dataRes.data.starsign }}<br>
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
const dataRes: any = ref(inject('dataRes')), getData: any = ref(inject('getData')), lib: any = ref(inject('lib'));
const msg = ref('');
</script>
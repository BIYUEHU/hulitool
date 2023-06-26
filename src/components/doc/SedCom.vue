<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-green-800">local_library</i>
            <label class="mdui-textfield-label">查询内容</label>
            <input class="mdui-textfield-input" v-model="msg" maxlength="100" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col-xs-1">
                <button @click="(msg && method.getData({ msg })) || method.tips(1)"
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
const dataRes: any = ref(inject('dataRes')), method: any = ref(inject('method'))/* , lib: any = ref(inject('lib')) */;
const msg = ref('');
/*     const tryGet = (data) => {
        lib.value.mdui.confirm('确定要查询吗?')
    } */
</script>
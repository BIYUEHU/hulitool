<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-light-blue-a400"><svg class="icon"
                    style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1541">
                    <path
                        d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                        p-id="1542"></path>
                </svg></i>
            <label class="mdui-textfield-label">QQ</label>
            <input class="mdui-textfield-input" v-model="qq" maxlength="20" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col-xs-1">
                <button @click="(qq && getData({ qq })) || lib.func.tips(1)"
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
                <span v-if="dataRes.code === 500">
                    <strong>昵称:{{ dataRes.data.name }}</strong><br>
                    <strong>头像:</strong><img :src="dataRes.data.imgurl" />
                </span>
                <span v-else>{{ lib.func.tips(2), dataRes = null }}</span>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
const dataRes: any = ref(inject('dataRes')), getData: any = ref(inject('getData')), lib: any = ref(inject('lib'));
const qq = ref('');
</script>
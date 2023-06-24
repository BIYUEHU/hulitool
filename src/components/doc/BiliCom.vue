<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-pink-300">ondemand_video</i>
            <label class="mdui-textfield-label">B站BV号或链接</label>
            <input class="mdui-textfield-input" v-model="msg" maxlength="30" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="msg && method.getData({msg})"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击解析</button>
            </div>
        </div>
        <br>
        <div v-if="dataRes" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h3>解析结果</h3>
                </div>
            </div>
            <div class="mdui-card-content">
                <div v-if="dataRes[0] && dataRes[0].code === 500">
                    <strong class="mdui-text-color-blue">解析成功</strong><br>
                    <strong>BV号:</strong>{{ dataRes[0].data.bvid }}
                    <strong>AV号:</strong>{{ dataRes[0].data.aid }}
                    <strong>时长:</strong>{{ dataRes[0].data.ctime }}<br>
                    <strong>标题:</strong>{{ dataRes[0].data.title }}<br>
                    <strong>简介:</strong>{{ dataRes[0].data.descr }}<br>
                    <strong>UP主UID:</strong>{{ dataRes[0].data.owner.uid }}
                    <!-- <strong>UP主:</strong>{{ dataRes[0].data.owner.name }}<br> -->
                    <!-- <strong>封面:</strong>
                    <img :src="dataRes[0].data.pic" class="huli-image-normal">
                    <strong>UP主头像:</strong>
                    <img :src="dataRes[0].data.owner.img" class="huli-image-normal"> -->
                    <strong>视频类型:</strong>{{ dataRes[1].data.type }}
                    <strong>视频大小:</strong>{{ Math.floor(dataRes[1].data.size / 1000000) }}MB<br>
                    <strong>视频预览:</strong><video controls width="250">
                        <source :src="dataRes[1].data.url" :type="'video/' + dataRes[1].data.type">
                    </video><br>
                    <strong>视频下载:</strong><a target="_blank" :href="dataRes[1].data.url">点击此处</a><br>
                </div>
                <div v-else>
                    <strong class="mdui-text-color-red">解析失败</strong><br>
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
    const msg = ref('');
</script>
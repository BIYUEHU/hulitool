<template>
    <!-- <div class="mdui-container-fluid"> -->
    <div v-if="progress" class="mdui-progress mdui-toolbar">
        <div class="mdui-progress-indeterminate"></div>
    </div>
    <div class="mdui-m-b-2 mdui-m-t-5 mdui-container" v-if="dataDoc">
        <span class="mdui-typo">
            <h3>{{ dataDoc.name }}<small v-if="dataDoc.descr"><br>{{ dataDoc.descr }}</small></h3>
        </span>
        <div v-if="dataDoc.origin">
            <strong v-if="dataDoc.origin.from">来源:{{ dataDoc.origin.from }}<br></strong>
            <strong v-if="dataDoc.origin.doc">文档:<a target="_blank" :href="dataDoc.origin.doc">{{
                dataDoc.origin.doc
            }}</a><br>
            </strong>
            <h4 v-if="dataDoc.origin.stat && dataStat">
                <span class="mdui-text-color-green">总计调用次数:{{ dataStat.total }}</span>
                <span class="mdui-text-color-brown"> 今日调用次数:{{ dataStat.day }}</span>
            </h4>
        </div>
        <component :is="Component" v-if="Component"></component>
        <br>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, provide, defineAsyncComponent, watch, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
import * as http from '../http';
import DocData from "../json/DocData.json";

const progress = ref(false), dataStat: any = ref({ total: 0, day: 0 }),
    dataRes: any = ref(null), /* dataOther = ref(null), */
    Component = ref(null), dataDoc: any = ref(null);

/* 根据路由获取对应的Doc数据 */
const router = useRoute();
const getDoc = () => {
    return DocData.find(
        dataDoc => dataDoc.type === router.params.docType
    )
};

/* 根据Doc数据动态导入对应的Doc组件 */
const loadCom = () => {
    return import(`../components/doc/${dataDoc.value.component}.vue`);
};

/* 加载条 */
const progressView = () => progress.value = !progress.value;

/* 提示消息 */
const { proxy } = getCurrentInstance() as any;



/* 根据文档数据设置对应的Stat */
const getStat = () => {
    http.getStat(dataDoc.value.origin.stat).then((res) => {
        dataStat.value.total = res.data.data;
    });
    http.getStat(dataDoc.value.origin.stat, 1).then((res) => {
        dataStat.value.day = res.data.data;
    });
}

/* 请求具体的API获取数据 */
const getData = (dataReq?: any, auto: Boolean = true) => {
    if (!((http as any)[dataDoc.value.http]) || !auto) return false;

    progressView();
    const Promise = (http as any)[dataDoc.value.http](dataReq);

    interface obj {
        data: any
    }
    /* 判断是多个请求还是单个 */
    if (Array.isArray(Promise)) {
        const Res: any[] = [];
        for (let init = 0; init < Promise.length; init++) {
            Promise[init].then((res: obj) => {
                Res[init] = res.data;
                if (init === Promise.length - 1) {
                    dataRes.value = Res;
                    progressView()
                };
            });
        }
    } else {
        Promise.then((res: obj) => {
            dataRes.value = res.data;
            progressView();
        })
    };
    getStat();
    return true;
};


const main = () => {
    dataRes.value = Component.value = dataDoc.value = null;

    /* 向子组件传值 */
    provide('dataRes', dataRes);
    provide('getData', getData);
    provide('lib', { mdui: proxy.$mdui, func: proxy.$func });

    dataDoc.value = getDoc();

    loadCom().then(() => {
        Component.value = defineAsyncComponent(() => loadCom());
    }).catch(() => {
        console.log(`${dataDoc.value.component} 组件不存在!!!`)
    });

    getStat();
    getData(null, !!dataDoc.value.auto);
}

/* 第一次载入 */
main();
watch(
    () => router,
    async () => main(),
    { deep: true }
);
</script>
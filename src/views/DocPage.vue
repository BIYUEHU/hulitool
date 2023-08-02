<template>
    <!-- <div class="mdui-container-fluid"> -->
    <div>
        <div v-if="progress" class="mdui-progress mdui-toolbar">
            <div class="mdui-progress-indeterminate"></div>
        </div>
        <div class="mdui-m-b-2 mdui-m-t-5 mdui-container" v-if="dataDoc">
            <span class="mdui-typo">
                <h3>{{ (dataDoc as docType).name }}<small v-if="(dataDoc as docType).descr"><br>{{ (dataDoc as
                    docType).descr }}</small></h3>
            </span>
            <div v-if="(<docType>dataDoc).origin">
                <strong v-if="(dataDoc as docType).origin!.from">来源:{{ (dataDoc as docType).origin!.from
                }}<br></strong>
                <strong v-if="(dataDoc as docType).origin!.doc">文档:<a target="_blank"
                        :href="(dataDoc as docType).origin!.doc">{{
                            (dataDoc as docType).origin!.doc
                        }}</a><br>
                </strong>
                <h5 v-if="(dataDoc as docType).origin!.stat && dataStat">
                    <span class="mdui-text-color-green">总计调用次数:{{ dataStat.total }}</span>
                    <span class="mdui-text-color-brown"> 今日调用次数:{{ dataStat.day }}</span>
                </h5>
            </div>
            <component :is="Component" v-if="Component"></component>
            <br>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide, defineAsyncComponent, watch, getCurrentInstance, ComponentInternalInstance, ComponentPublicInstance } from 'vue';
import { useRoute } from 'vue-router';
import * as http from '@/http';
import DocData from "@/json/DocData.json";
import { docType, resType, obj, statType, DocPage, App, tips } from '@/function';

const { proxy } = <ComponentInternalInstance>getCurrentInstance();
const progress = ref<boolean>(false),
    dataStat = reactive<statType>({ total: 0, day: 0 }),
    Component = ref<obj>({}),
    dataRes = ref<resType | resType[] | object | []>({});
let dataDoc = reactive<docType | object>({});
/* 根据路由获取对应的Doc数据 */
const router = useRoute();
const getDoc = () => App.getDoc(<docType[]>DocData, <string>router.params.docType)

/* 加载条 */
const progressView = (): boolean => progress.value = !progress.value;

/* 根据文档数据设置对应的Stat */
const getStat = (): void => {
    http.getStat((<docType>dataDoc).origin!.stat).then((res) => {
        dataStat.total = res.data.data;
    });
    http.getStat((<docType>dataDoc).origin!.stat, 1).then((res) => {
        dataStat.day = res.data.data;
    }).catch(err => tips(`错误：${err}`, 'red'));
}

/* 请求具体的API获取数据 */
const getData = (dataReq?: obj | null, auto: Boolean = true): boolean => {
    if (!(<docType>dataDoc).http || !((<obj>http)[((<docType>dataDoc).http!)]) || !auto) return false;

    progressView();
    interface res2 {
        data: resType
    }

    const Promise = (<obj>http)[(<docType>dataDoc).http!](dataReq);
    /* 判断是多个请求还是单个 */
    if (Array.isArray(Promise)) {
        const Res: resType[] = [];
        for (let init = 0; init < Promise.length; init++) {
            Promise[init].then((res: res2) => {
                Res[init] = res.data;
                if (init === Promise.length - 1) {
                    dataRes.value = Res;
                    progressView()
                };
            }).catch((err: string) => tips(`错误：${err}`, 'red'));
        }
    } else {
        Promise.then((res: res2) => {
            dataRes.value = res.data;
            progressView();
        }).catch((err: string) => tips(`错误：${err}`, 'red'))
    };
    getStat();

    return true;
};


const main = (): void => {
    dataRes.value = Component.value = dataDoc = {};

    /* 向子组件传值 */
    provide('dataRes', dataRes);
    provide('getData', getData);

    let doc = getDoc();
    if (!doc) {
        (<ComponentPublicInstance>proxy).$router.push('/404')
        return;
    }
    dataDoc = doc;

    DocPage.loadCom((<docType>dataDoc).component!).then(() => {
        Component.value = defineAsyncComponent(() => DocPage.loadCom((<docType>dataDoc).component!));
    }).catch((err) => {
        console.log(err);
        tips(`错误：${err}`, 'red');
        (<ComponentPublicInstance>proxy).$router.push('/404');
    });

    (<docType>dataDoc).origin && getStat();
    getData(null, !!(<docType>dataDoc).auto);
}

/* 第一次载入 */
main();
watch(
    () => router,
    async () => main(),
    { deep: true }
);
</script>
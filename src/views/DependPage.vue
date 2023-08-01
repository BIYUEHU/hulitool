<template>
    <component :is="Component" v-if="Component"></component>
</template>

<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, watch, getCurrentInstance, ComponentInternalInstance, ComponentPublicInstance } from 'vue';
import { useRoute } from 'vue-router';
import DocData from "@/json/DocData.json";
import { DependPage, docType, obj, App }from '@/function';

document.body.classList.value = '';

const { proxy } = <ComponentInternalInstance>getCurrentInstance();
const Component = ref<obj>({});
let dataDoc = reactive<docType | object>({});

const router = useRoute();
const getDoc = () => App.getDoc(<docType[]>DocData, <string>router.params.pageType)

const main = (): void => {
    Component.value = dataDoc = {};

    let doc = getDoc();
    if (!doc) {
        (<ComponentPublicInstance>proxy).$router.push('/404')
        return;
    }
    dataDoc = doc;

    DependPage.loadCom((<docType>dataDoc).component!).then(() => {
        Component.value = defineAsyncComponent(() => DependPage.loadCom((<docType>dataDoc).component!));
    }).catch(() => {
        (<ComponentPublicInstance>proxy).$router.push('/404');
    });
}

/* 第一次载入 */
main();
watch(
    () => router,
    async () => main(),
    { deep: true }
);
</script>

<template>
    <codemirror v-model="code" :placeholder="options.tips ?? 'Code gose here...'"
        :style="options.style ?? { height: '400px' }" :autofocus="true" :indent-with-tab="true"
        :tabSize="options.tabsize ?? 4" :extensions="extensions" />
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { Codemirror } from "vue-codemirror";
import { obj } from '../function';

type langType = 'html' | 'css' | 'javascript' | 'json';

interface Options {
    lang: langType
    tips?: string,
    style?: any,
    tabsize?: number
}

const code = ref<string | undefined>(inject('code'));
const options = <Options>inject('options');
const modules = import.meta.glob('../../node_modules/@codemirror/**/dist/index.js');

const extensions: any[] = [];
for (const path in modules) {
    modules[path]().then((mod: unknown) => {
        if (path.match(`/@codemirror/lang-${options.lang}/dist/index.js`)) {
            extensions[0] = [(<obj>mod)[options.lang]()]
        }
    })
}

</script>


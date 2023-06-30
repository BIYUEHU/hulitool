
<template>
    <codemirror v-model="code" :style="{ height: '400px' }" :autofocus="true"
        :indent-with-tab="true" :tabSize="4" :extensions="extensions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Codemirror } from "vue-codemirror";
import { html } from '@codemirror/lang-html';
const code = ref<string>('');
const extensions = [html()];

</script>


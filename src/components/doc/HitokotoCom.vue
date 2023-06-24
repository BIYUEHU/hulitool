<template>
    <div class="mdui-text-center mdui-center">
        <div class="mdui-text-valign" v-if="dataRes">
            <h2><strong>{{ dataRes.data.msg }}</strong></h2>
            <h3 v-if="dataRes.data.from && dataRes.data.from !== ' '"
                class="mdui-text-right mdui-text-color-{{ dataOther.color }}">——{{
                dataRes.data.from }}</h3>
            <h4 class="mdui-text-right mdui-text-color-"><small>类型:{{ dataRes.data.type }}</small></h4>
        </div>
        <button @click="method.getData()"
            class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple">再来一句</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject } from 'vue';
    const dataRes = ref(inject('dataRes')), method = ref(inject('method'));
</script>
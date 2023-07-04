<template>
    <div class="mdui-text-center mdui-center">
        <div class="mdui-text-valign" v-if="(<resType>dataRes).code">
            <h2><strong>{{ (<obj>(<resType>dataRes)).data.msg }}</strong></h2>
            <h4 v-if="(<obj>(<resType>dataRes)).data.from && (<obj>(<resType>dataRes)).data.from !== ' '"
                class="mdui-text-right mdui-text-color-{{ dataOther.color }}">——{{
                    (<obj>(<resType>dataRes)).data.from }}</h4>
            <h4 class="mdui-text-right mdui-text-color-"><small>类型:{{ (<obj>(<resType>dataRes)).data.type }}</small></h4>
        </div>
        <button @click="getData()"
            class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple">再来一句</button>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { resType, obj } from '../../function';
const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
</script>
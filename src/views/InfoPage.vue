<template>
    <div id="main">
        <h1>INFO</h1>

        <h2><strong>CHANGELOG</strong></h2>
        <hr>
        <div v-for="item in data.changelog" :key="item.title">
            <h3>{{ item.title }}</h3>
            <li v-for="element in item.content" :key="element" v-html="element"></li>
        </div>

        <h2><strong>TODO</strong></h2>
        <hr>
        <div v-for="item in data.todo" :key="item.title">
            <h3>{{ item.title }}</h3>
            <li v-for="element in item.content" :key="element">
                <span v-if="element.substring(0, 1) === '~'"><del v-html="'[√]' + element.substring(1)"></del></span>
                <span v-else v-html="'[×]' + element"></span>
            </li>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from '@/json/AboutData.json';
</script>
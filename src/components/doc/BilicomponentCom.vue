<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-pink-300">child_care</i>
            <label class="mdui-textfield-label">B站UID</label>
            <input class="mdui-textfield-input" v-model="uid" maxlength="30" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="(uid && method.getData({uid})) || method.tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">查成分</button>
            </div>
        </div>
        <br>
        <div v-if="dataRes" class="mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h3>成分结果</h3>
                </div>
            </div>
            <div class="mdui-card-content">
                <div v-html="dataRes"></div>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject } from 'vue';
    const dataRes: any = ref(inject('dataRes')), method: any = ref(inject('method'));
    const uid = ref('');
</script>
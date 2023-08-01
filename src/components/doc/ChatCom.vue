<template>
    <div style="width: 90%;max-width: 700px;">
        <div class="mdui-col-xs-10 mdui-textfield">
            <input class="mdui-textfield-input" v-model="content" placeholder="消息内容" />
        </div>
        <div class="mdui-row-xs-1 mdui-col-xs-1">
            <button class="mdui-btn btn" @click="content ? send({ content }) : tips(1)"><i
                    class="mdui-icon material-icons"><svg class="icon"
                        style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4602">
                        <path
                            d="M955 125.6c-4.5-12.5-15.4-21.8-28.6-24.2-9.2-1.7-18.4 0.1-26.1 4.8L83.9 544.3c-12.8 6.8-20.6 20.6-19.8 35.1 0.8 14.3 9.9 27.3 23.2 32.9l238.5 97.9c12.4 5.2 26.8 3.4 37.5-4.9s16.1-21.3 14.4-34.8c-1.6-13.2-10.4-24.6-23-29.9l-165-67.7 573-307.3-357 421.9c-6.5 7.7-9.6 17.4-8.8 27.4L411.4 884c1.6 19.7 17.7 34.6 37.5 34.6 9.5 0 18.7-3.7 25.8-10.4l74-69.2 0.1-0.1c13.5-13.2 15.2-33.5 4.8-48.4l222.6 72c4 1.3 7.9 2 11.7 2 18.2 0 33.8-12.9 37-30.6l131.6-688.3h-0.1c1.4-6.6 0.9-13.5-1.4-20zM497.3 783.8L479.9 800l-6.5-75.9L856 271.6l-96.8 506.3L539 706.6c-19.7-6.4-41.1 4.4-47.5 24.2-5.8 17.9 2.5 37.1 18.9 45.4-4.7 1.5-9.2 4-13.1 7.6z"
                            p-id="4603"></path>
                    </svg></i>
            </button>
        </div>
        <br>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="chatgpt = []"
                    class="mdui-btn mdui-btn-block mdui-btn-raised mdui-color-red mdui-ripple">清除聊天记录</button>
            </div>
        </div>
        <br>
        <div class="mdui-col-xs-12 mdui-row-xs-1 mdui-card mdui-hoverable">
            <div class="mdui-card-header mdui-row">
                <div class="mdui-card-header-title">
                    <h4>聊天记录</h4>
                </div>
            </div>
            <div class="mdui-card-content">
                <span v-if="typeof (<resType>dataRes).created === 'number'">
                    {{ timer(<string>(<resType>dataRes).choices[0].message.content) }}
                </span>
                <div v-for="message in chatgpt" :key="message">
                    <span v-if="message[0] === 0" class="snackbar-me">
                        我: {{ message[1] }}
                    </span>
                    <span v-else class="snackbar-bot">
                        BOT: {{ messageAfter[message[1]] }}
                    </span>
                    <br>
                    <br>
                </div>
            </div>
            <br>
            <div class="mdui-card-header-subtitle"></div>
        </div>
    </div>
    
<!--     <div class="mdui-dialog" id="delete" style="display: block;top: 545px; height: 189px;">
        <div class="mdui-dialog-title">确认框</div>
        <div class="mdui-dialog-content" style="height: 69px;">确定要要删除吗?</div>
        <div class="mdui-dialog-actions">
            <button class="mdui-btn mdui-ripple" mdui-dialog-close="">CANCEL</button>
            <button class="mdui-btn mdui-ripple" mdui-dialog-confirm="">OK</button>
        </div>
    </div> -->
</template>

<style scoped>
.btn {
    border: 0px;
    background-color: white;
    margin-top: 18px;
}

.btn:hover {
    box-shadow: 0px 1px 5px rgb(229, 229, 229);
}
</style>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { resType, tips, ChatCom } from '@/function';
import { useMainStore } from '@/store';
import { storeToRefs } from 'pinia';

const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const mainStore = useMainStore();
const { settings, chatgpt } = storeToRefs(mainStore);
const apikey: string = settings.value.skey;

const content = ref(''), messageAfter: any = ref({});

interface obj {
    content: string
}

const send = ref((data: obj) => {
    if (!apikey) {
        tips('请先在设置里填写Skey!', 'red');
        return;
    }

    chatgpt.value.push([0, data.content] as never);
    getData.value({ content: data.content, apikey });
    content.value = '';
});

const update = ref((data: obj) => {
    dataRes.value = {};
    chatgpt.value.push([1, data.content] as never);
})


const timer = (iterator: string | Generator, key?: string) => {
    if (typeof iterator === 'string') {
        update.value({ content: iterator });
        key = iterator;
        iterator = ChatCom.handler(iterator)
    };
    const element = iterator.next();
    if (element.done === false) {
        messageAfter.value[key as string] = messageAfter.value[key as string] ? messageAfter.value[key as string] += element.value : element.value;
        let time = 0.2 * 1000;
        if ((<string>element.value).length > 50) {
            time = 20;
        }
        setTimeout(() => timer(iterator, key), time);
    }
}
</script>
<template>
    <div>
        <div class="mdui-textfield">
            <i class="mdui-icon material-icons mdui-text-color-pink-300"><svg class="icon"
                    style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1415">
                    <path
                        d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z"
                        fill="#EA3E3C" p-id="1416"></path>
                    <path
                        d="M527.616 849.43872a373.6064 373.6064 0 0 1-162.54976-39.00416c-112.36352-55.16288-180.00896-176.29184-172.55424-308.67456 7.41376-130.34496 85.10464-237.4656 202.752-279.552a35.85024 35.85024 0 0 1 24.15616 67.51232c-107.66336 38.49216-150.81472 136.86784-155.29984 216.13568-5.86752 103.51616 46.08 197.79584 132.34176 240.13824 124.69248 60.30336 216.91392 22.35392 260.82304-5.64224 59.8016-38.16448 97.86368-100.01408 96.95232-157.55264-1.024-63.72352-24.064-120.99584-63.27296-157.14304a145.408 145.408 0 0 0-65.5872-35.28704q2.82624 9.76896 5.64224 19.32288c13.38368 45.63968 24.94464 85.05344 25.6 114.40128a134.26688 134.26688 0 0 1-37.69344 97.76128 139.1104 139.1104 0 0 1-100.6592 40.45824 140.10368 140.10368 0 0 1-100.47488-42.24 169.12384 169.12384 0 0 1-46.2848-122.76736c1.19808-85.12512 80.11776-153.28256 162.816-175.104a324.80256 324.80256 0 0 1-6.71744-67.05152 92.0576 92.0576 0 0 1 69.18144-91.81184c46.21312-12.53376 104.448 5.19168 124.66176 37.888a35.84 35.84 0 0 1-11.70432 49.31584 35.84 35.84 0 0 1-49.26464-11.65312 62.34112 62.34112 0 0 0-48.45568-5.21216c-4.32128 1.71008-12.35968 4.90496-12.76928 23.10144a270.87872 270.87872 0 0 0 6.73792 58.51136 217.4976 217.4976 0 0 1 133.56032 57.6512c53.57568 49.38752 85.0432 125.46048 86.35392 208.71168 1.29024 81.85856-49.7664 167.86432-130.048 219.136a310.14912 310.14912 0 0 1-168.2432 48.65024z m23.6544-457.55392c-56.77056 15.6672-107.4688 63.03744-108.07296 106.42432a98.304 98.304 0 0 0 25.6512 71.43424 68.0448 68.0448 0 0 0 49.36704 20.87936 67.24608 67.24608 0 0 0 49.44896-18.944 63.19104 63.19104 0 0 0 17.23392-46.08c-0.4096-19.79392-11.7248-58.368-22.67136-95.6928-3.61472-12.42112-7.35232-25.14944-10.9568-38.02112z"
                        fill="#FFFFFF" p-id="1417"></path>
                </svg></i>
            <label class="mdui-textfield-label">歌名</label>
            <input class="mdui-textfield-input" v-model="name" maxlength="30" type="text" />
        </div>
        <div class="mdui-row-xs-1">
            <div class="mdui-col">
                <button @click="(name && getData({ name })) || tips(1)"
                    class="mdui-btn mdui-btn-block mdui-btn-dense mdui-color-theme-accent mdui-ripple">点击解析</button>
            </div>
        </div>
        <br>
        <div v-if="(<resType>dataRes).code && (<resType>dataRes).code === 500 && (<resType>dataRes).data">
            <div class="mdui-card mdui-hoverable">
                <div class="mdui-card-header mdui-row">
                    <div class="mdui-card-header-title">
                        <h4>歌曲信息</h4>
                    </div>
                </div>
                <div class="mdui-card-content">
                    <span><strong>歌名:</strong>{{ (<neteaseData[]>(<resType>dataRes).data)[init].title }}</span>
                    <span><strong>歌手:</strong>{{ (<neteaseData[]>(<resType>dataRes).data)[init].author }}<br></span>
                    <span><strong>ID:</strong>{{ (<neteaseData[]>(<resType>dataRes).data)[init].songid }}</span>
                    <span><strong>链接:</strong><a :href="(<neteaseData[]>(<resType>dataRes).data)[init].link">
                            {{ (<neteaseData[]>(<resType>dataRes).data)[init].link }}
                        </a><br></span>
                    <span><strong>封面:</strong><img style="width:90px"
                            :src="(<neteaseData[]>(<resType>dataRes).data)[init].pic" /><br></span>
                    <span><audio controls autoplay :events="audioEvents"
                            :src="(<neteaseData[]>(<resType>dataRes).data)[init].url"></audio></span>
                    <span><a target="_blank" :href="(<neteaseData[]>(<resType>dataRes).data)[init].url">点击下载</a><br></span>
                    <span><strong>歌词:</strong>
                        {{ lyrics }}
                        <span v-if="(<neteaseData[]>(<resType>dataRes).data)[init].lrc">
                            {{ (<neteaseData[]>(<resType>dataRes).data)[init].lrc.substring(0, 90) + '...' }}
                                    <a target="_blank"
                                        :href="'data:application/octet-stream;base64,' + encode((<neteaseData[]>(<resType>dataRes).data)[init].lrc)"
                                        :download="(<neteaseData[]>(<resType>dataRes).data)[init].title + '.lrc'">点击下载</a><br>
                        </span>
                        <!-- <span v-show="false">{{ lrcContent = (<neteaseData[]>(<resType>dataRes).data)[init].lrc }}</span>
                        <p v-for="lyric in lyrics" :key="lyric.time" v-if="lyric.time >= currentTime">
                            {{ lyric.text }}
                        </p> -->
                        <span v-else>无</span>
                    </span>
                    <!-- <span v-show="false">
                        {{ console.log((<neteaseData[]>(<resType>dataRes).data)[init].lrc.split('\n')) }}
                    </span> -->
                </div>
                <br>
                <div class="mdui-card-header-subtitle"></div>
            </div>
            <br>
            <div class="mdui-table-fluid">
                <table class="mdui-table mdui-table-hoverable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>歌名</th>
                            <th>歌手</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in <neteaseData[]>(<resType>dataRes).data" :key="item.songid"
                            @click="viewInfo(<number>index)">
                            <td>{{ <number>index + 1 }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.author }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else-if="(<resType>dataRes).code">
            {{ tips('解析失败', 'darkblue'), dataRes = {} }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue';
import { tips, resType, NeteaseCom, neteaseData, lrcType } from '@/function';
import { encode } from 'js-base64';

const dataRes = ref(<resType | object>inject('dataRes')), getData = ref(<Function>inject('getData'));
const name = ref<string>(''), init = ref<number>(0), lrcContent = ref<string>(''), lyrics = ref<lrcType[]>([]);
const viewInfo = (index: number) => {
    init.value = index;
}

const audioEvents = {
    timeupdate: (audio: any) => {
        // console.log(audio);
        audio;
    }
};

onMounted(async () => {
    lyrics.value = NeteaseCom.parseLrc(lrcContent.value)
})
</script>
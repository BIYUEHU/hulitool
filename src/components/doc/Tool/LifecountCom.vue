<template>
    <div style="margin-top: 20px;">
        <card class="mdui-card mdui-hoverable mdui-textfield picker">
            <el-date-picker style="width: 95%;" v-model="birthDate" :default-value="new Date(2010, 9, 1)" type="date"
                placeholder="选择你的出生日期" :disabled-date="disabledDate" />
        </card>

        <card v-if="birthDate && dateHandle" class="mdui-card mdui-hoverable mdui-textfield">
            <div class="mdui-card-header-title">
                <h4 class="mdui-text-color-theme-accent"><strong>已经过去了</strong></h4>
            </div>
            <div class="mdui-card-content container">
                <div class="mdui-row">
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.year }}<small>年</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.month }}<small>月</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.day }}<small>天</small>
                    </div>
                </div>
                <div class="mdui-row">
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.hour }}<small>时</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.minute }}<small>分</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.past.second }}<small>秒</small>
                    </div>
                </div>
            </div>
        </card>

        <card v-if="birthDate && dateHandle" class="mdui-card mdui-hoverable mdui-textfield">
            <div class="mdui-card-header-title">
                <h4 class="mdui-text-color-theme-accent"><strong>剩下的时间</strong></h4>
            </div>
            <div class="mdui-card-content container">
                <div class="mdui-row">
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.year }}<small>年</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.month }}<small>月</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.day }}<small>天</small>
                    </div>
                </div>
                <div class="mdui-row">
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.hour }}<small>时</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.minute }}<small>分</small>
                    </div>
                    <div class="mdui-col-xs-4">
                        {{ dateHandle.have.second }}<small>秒</small>
                    </div>
                </div>
            </div>
        </card>

        <card v-if="results" class="mdui-card mdui-hoverable mdui-textfield">
            <div class="mdui-card-header-title">
                <h4 class="mdui-text-color-theme-accent"><strong>人生进度</strong></h4>
            </div>
            <div class="box">
                <div v-for="(item, index) in results.blockArr" :key="index" class="block"
                    :class="[item.type, { 'retired': index === 323 && index >= results.length.past }, { 'flash': index === (results.length.past - 1) }]">
                </div>
            </div>
        </card>

        <card v-if="results" class="mdui-card mdui-hoverable mdui-textfield">
            <div class="mdui-card-header-title">
                <h4 class="mdui-text-color-theme-accent"><strong>分享小格</strong></h4>
            </div>
            <div class="mdui-card-content">
                <div class="code">{{ share() }}</div>
                <button @click="copyContent(proxy!, share())"
                    class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple">点击复制</button>
            </div>
        </card>

        <card class="mdui-card mdui-hoverable mdui-textfield">
            <div class="mdui-card-header-title">
                <h4 class="mdui-text-color-theme-accent"><strong>说明</strong></h4>
            </div>
            <div class="mdui-card-content">
                <div><b>假设我们的寿命是80岁,分为400个方块。</b></div>
                <div><span class="block past"></span> 你已经走过的生命</div>
                <div><span class="block sleep"></span> 如果你平均每天休息 8 小时，这是你余下生命里睡眠占用的时间</div>
                <div><span class="block work"></span> 如果你 65 岁退休，退休前平均每天工作 8 小时，这是你余下生命里工作占用的时间</div>
                <div><span class="block retired"></span> 65 岁，你退休了</div>
                <div><span class="block baby"></span> 如果你 28 岁生孩子，孩子18岁出门上大学，这 18 年里你平均每天能花 5 个小时陪伴孩子，这里是你余下生命里所用去的时间</div>
                <div><span class="block parents"></span> 如果你每个月能看望父母一天，在他们 80 岁前，这是你的余生里还能陪伴他们的时光</div>
                <div><span class="block surplus"></span> 除了以上之外，你剩下的所有日子</div>
            </div>
        </card>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, getCurrentInstance, ComponentInternalInstance } from 'vue';
import dayjs from 'dayjs';
import { copyContent, obj } from '@/function';
import { Base64 } from 'js-base64';

let timerId: NodeJS.Timer[] = [];
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const birthDate = ref<Date>();
const dateHandle = ref<obj | null>(null);
const results = ref<obj>();

const disabledDate = (time: Date) => {
    return time.getTime() > (new Date((new Date()).getFullYear() - 1, 0, 1)).getTime();
}

const dateHandler = () => {
    const date = dayjs(birthDate.value);
    const thisDay = dayjs();
    const deathDate = date.add(80, 'year');
    dateHandle.value = {
        past: {
            year: thisDay.diff(date, 'year', true).toFixed(1),
            month: thisDay.diff(date, 'month', true).toFixed(1),
            day: thisDay.diff(date, 'day', true).toFixed(1),
            hour: thisDay.diff(date, 'hour', true).toFixed(1),
            minute: thisDay.diff(date, 'minute', true).toFixed(1),
            second: thisDay.diff(date, 'second', true).toFixed(1)
        },
        have: {
            year: deathDate.diff(thisDay, 'year', true).toFixed(1),
            month: deathDate.diff(thisDay, 'month', true).toFixed(1),
            day: deathDate.diff(thisDay, 'day', true).toFixed(1),
            hour: deathDate.diff(thisDay, 'hour', true).toFixed(1),
            minute: deathDate.diff(thisDay, 'minute', true).toFixed(1),
            second: deathDate.diff(thisDay, 'second', true).toFixed(1)
        }
    };
    dateHandle.value!.past.minute = parseFloat(dateHandle.value!.past.minute);
    dateHandle.value!.past.second = parseFloat(dateHandle.value!.past.second);
    dateHandle.value!.have.minute = parseFloat(dateHandle.value!.have.minute);
    dateHandle.value!.have.second = parseFloat(dateHandle.value!.have.second);
    results.value = blockHandler();
}

const blockHandler = () => {
    if (!birthDate.value) return;
    const blockArr: { type: string }[] = [];
    const date = dayjs(birthDate.value);
    const thisDay = dayjs();

    const oneBlockHour = 24 * 72; // 一个方块代表的小时
    const haveChildren = 28; // 生孩子的年龄

    const pastDate = thisDay.diff(date, 'day'); // 已经过去的时间(天)

    const deathDate = date.add(80, 'year'); // 80岁的时候
    const fromDeathDate = deathDate.diff(thisDay, 'day'); // 距离80岁还能活的时间(天)

    const retiredDate = date.add(65, 'year'); // 65岁退休的时候
    const fromRetiredDate = retiredDate.diff(thisDay, 'day'); // 距离65岁还能活的时间(天)

    const babyrenDate = date.add(18 + haveChildren, 'year'); // 如果28岁生孩子，孩子18岁的时候
    const fromChildrenDate = babyrenDate.diff(thisDay, 'day'); // 距离孩子18岁还能活的时间(天)

    const parentsDate = date.add(80 - haveChildren, 'year'); // 距离父母死亡
    const fromParentsDate = parentsDate.diff(thisDay, 'day'); // 距离父母死亡还能活的时间(天)

    const past = ~~(pastDate / 72); // 已经过去的方块

    const sleep = ~~((8 * fromDeathDate) / oneBlockHour); // 碎觉所需的方块
    const work =
        fromRetiredDate <= 0
            ? 0
            : ~~((8 * fromRetiredDate) / oneBlockHour); // 工作所需的方块
    const baby =
        fromChildrenDate <= 0
            ? 0
            : ~~((5 * fromChildrenDate) / oneBlockHour); // 陪伴孩子
    const parents =
        fromParentsDate <= 0
            ? 0
            : ~~(((fromParentsDate / 31) * 24) / oneBlockHour); // 陪伴父母
    let surplus = 400 - (sleep + past + work + baby + parents);
    if (surplus <= 0) surplus = 0;

    const data = {
        past,
        sleep,
        work,
        baby,
        parents,
        surplus
    };
    Object.keys(data).forEach(e => {
        for (let i = 0; i < data[e as keyof typeof data]; i++) {
            blockArr.push({
                type: e
            });
        }
    });
    return {
        blockArr,
        length: data
    };
}

const share = () => {
    return `${window.location.href.split('?')[0]}?s=${Base64.encode(birthDate.value!.getTime().toString())}`;
}

const setTimer = () => {
    clearAllTimer();
    if (!dateHandle.value) return;
    timerId.push(setInterval(() => {
        dateHandle.value!.past.minute += 1
    }, 60 * 1000));
    timerId.push(setInterval(() => {
        dateHandle.value!.past.second += 1
    }, 1000));
    timerId.push(setInterval(() => {
        dateHandle.value!.have.minute -= 1
    }, 60 * 1000));
    timerId.push(setInterval(() => {
        dateHandle.value!.have.second -= 1
    }, 1000));
}

const clearAllTimer = () => {
    timerId.forEach(id => clearInterval(id));
    timerId = [];
}

if (typeof proxy!.$route.query.s === 'string') {
    try {
        const date = new Date(parseInt(Base64.decode(proxy!.$route.query.s)));
        birthDate.value = date;
        dateHandler();
    } catch { }
}

watch(birthDate, () => dateHandler());
watch(dateHandle, () => setTimer());

</script>

<style scoped>
card {
    display: block;
    margin-bottom: 20px;
}

.picker {
    display: flex;
    justify-content: center;
}

.container {
    text-align: center;
    font-size: 20px;
}

@keyframes flash {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.block {
    display: inline-block;
    margin: 2px;
}

.past {
    background-color: #98c3b9;
}

.sleep {
    background-color: #c1e8f9;
}

.work {
    background-color: #ab9f93;
}

.baby {
    background-color: #e3a6ab;
}

.parents {
    background-color: #7ea1b7;
}

.surplus {
    background-color: #e2e2e2;
}

.retired {
    background-color: #f8c039;
}

.box .flash {
    animation: flash ease 2s infinite;
    background-color: #4fa38c;
}

.box {
    font-size: 0;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

@media (max-width: 610px) {
    .box {
        width: 300px;
        height: 300px;
    }

    .block {
        width: 11px;
        height: 11px;
    }
}

@media (min-width: 610px) {
    .box {
        width: 380px;
        height: 380px;
    }

    .block {
        width: 15px;
        height: 15px;
    }
}

@media (min-width: 1200px) {
    .box {
        width: 460px;
        height: 460px;
    }

    .block {
        width: 19px;
        height: 19px;
    }
}

.code {
    width: 97%;
    margin: 10px auto;
    padding: 5px;
    background-color: #f1f1f1;
}
</style>
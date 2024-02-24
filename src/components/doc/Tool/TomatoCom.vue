<template>
  <div style="margin-top: 20px">
    <card class="mdui-card mdui-hoverable">
      <div class="mdui-card-header-title">
        <h4 class="mdui-text-color-theme-accent">
          <strong>番茄工作法</strong>
        </h4>
      </div>
      <div class="mdui-card-content container">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">番茄时长（分钟）</label>
          <input
            class="mdui-textfield-input"
            v-model="tomatoDuration"
            maxlength="6"
            type="number"
          />
        </div>
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">休息时长(分钟)</label>
          <input
            class="mdui-textfield-input"
            v-model="restDuration"
            maxlength="6"
            type="number"
          />
        </div>
        <label style="margin-left: 10px" class="mdui-checkbox">
          <input type="checkbox" v-model="autoTomato" />
          <i class="mdui-checkbox-icon"></i>
          自动开始下一个番茄
        </label>
      </div>
      <div>
        <button
          @click="startTomato"
          v-if="!state"
          class="child mdui-btn mdui-btn-dense mdui-color-theme-accent mdui-btn-raised mdui-ripple"
        >
          <i class="mdui-icon material-icons">access_alarm</i>开始专注
        </button>
        <button
          @click="stopTomato()"
          v-else
          class="child mdui-btn mdui-btn-dense mdui-btn-raised mdui-ripple"
        >
          <i class="mdui-icon material-icons">stop</i>停止番茄
        </button>
      </div>
    </card>

    <card class="mdui-card mdui-hoverable mdui-textfield">
      <div class="mdui-card-header-title">
        <h4 class="mdui-text-color-theme-accent"><strong>统计版</strong></h4>
      </div>
      <div class="mdui-card-content container">
        <div>
          <span>已完成：{{ tomatoes }}</span>
        </div>
        <div>
          <span>状态：{{ STATE[state] }}</span>
        </div>
        <h1
          class="time"
          v-if="state"
          :style="{ color: state === 1 ? 'orange' : 'lightgreen' }"
        >
          <strong></strong>{{ displayTime }}
        </h1>
      </div>
    </card>

    <card class="mdui-card mdui-hoverable mdui-textfield">
      <div class="mdui-card-header-title">
        <h4 class="mdui-text-color-theme-accent">
          <strong>什么是番茄？</strong>
        </h4>
      </div>
      <div class="mdui-card-content container">
        <i>番茄工作法是简单易行的时间管理方法。</i>
        <i
          >使用番茄工作法，选择一个待完成的任务，将番茄时间设为25分钟，专注工作，中途不允许做任何与该任务无关的事，直到番茄时钟响起，然后进行短暂休息一下（5分钟就行），然后再开始下一个番茄。每4个番茄时段多休息一会儿。</i
        >
        <i> 番茄工作法极大地提高了工作的效率，还会有意想不到的成就感。</i>

        <h5>番茄工作法流程</h5>
        <li>
          每天开始的时候规划这一天要完成的几项任务，将任务逐项写在列表里（或记在软件的清单里）
        </li>
        <li>设定你的番茄钟（定时器、软件、闹钟等），时间是25分钟。</li>
        <li>开始完成第一项任务，直到番茄钟响铃或提醒（25分钟到）。</li>
        <li>停止工作，并在列表里该项任务后画个X。</li>
        <li>休息3~5分钟，活动、喝水、方便等等。</li>
        <li>
          开始下一个番茄钟，继续该任务。一直循环下去，直到完成该任务，并在列表里将该任务划掉。
        </li>
        <li>每四个番茄钟后，休息25分钟。</li>

        <h5 class="mdui-text-color-red">注意事项</h5>
        <li>在某个番茄钟的过程里，如果突然想起要做什么事情</li>
        <li>
          非得马上做不可的话，停止这个番茄钟并宣告它作废（哪怕还剩5分钟就结束了），去完成这件事情，之后再重新开始同一个番茄钟；
        </li>
        <li>
          不是必须马上去做的话，在列表里该项任务后面标记一个逗号（表示打扰），并将这件事记在另一个列表里（比如叫“计划外事件”），然后接着完成这个番茄钟。
        </li>
      </div>
    </card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

enum STATE {
  STOP,
  WORK,
  REST,
}

const tomatoDuration = ref(25);
const restDuration = ref(5);
const autoTomato = ref(true);
const tomatoes = ref(0);
const state = ref<STATE>(0);
const timer = ref();
const timeRemaining = ref(0);
const displayTime = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

const startTomato = () => {
  state.value = STATE.WORK;
  timeRemaining.value = tomatoDuration.value * 60;
  updateTimer();
};

const stopTomato = (complete: boolean = false) => {
  clearInterval(timer.value);
  complete && state.value === STATE.WORK && tomatoes.value++;
  if (autoTomato.value && complete) {
    if (state.value === STATE.REST) {
      startTomato();
      return;
    }
    if (state.value === STATE.WORK) startRest();
    return;
  }
  state.value = STATE.STOP;
};

const updateTimer = () => {
  timer.value = setInterval(() => {
    timeRemaining.value--;
    if (timeRemaining.value <= 0) {
      stopTomato(true);
    }
  }, 1000);
};

const startRest = () => {
  state.value = STATE.REST;
  timeRemaining.value = restDuration.value * 60;
  updateTimer();
};
</script>

<style scoped>
.time {
  text-align: center;
  font-size: 5rem;
  font-style: inherit;
  margin-bottom: 100px !important;
}
</style>

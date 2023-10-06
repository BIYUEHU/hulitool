<template>
  <div id="body" class="mdui-theme-primary-pink mdui-loaded">
    <div class="mdui-progress" style="position: fixed" v-show="progress">
      <div class="mdui-progress-indeterminate"></div>
    </div>
    <div
      style="position: fixed"
      class="mdui-toolbar mdui-text-color-white-icon"
    >
      <div class="mdui-toolbar-spacer"></div>
      <span
        @click="
          mdui.alert(`使用 '|' 间隔符可进行多个TAG查询<br>如: 少女|白丝|长发 `)
        "
        class="mdui-btn mdui-btn-icon"
        mdui-tooltip="{content:'Help'}"
        ><i class="mdui-icon material-icons">live_help</i></span
      >
      <a
        href="https://pic.imgdb.cn/item/63facaf0f144a0100780a66f.png"
        target="_blank"
        class="mdui-btn mdui-btn-icon"
        mdui-tooltip="{content:'BGImage'}"
        ><i class="mdui-icon material-icons">image</i></a
      >
      <a href="/" class="mdui-btn mdui-btn-icon" mdui-tooltip="{content:'Home'}"
        ><i class="mdui-icon material-icons">home</i></a
      >
    </div>

    <div style="padding-top: 20vh">
      <div class="mdui-container-fluid mdui-typo">
        <div
          class="app-title mdui-typo-display-3 mdui-text-center mdui-text-color-white mdui-hidden-sm-down"
        >
          Pixiv Search
        </div>
        <div
          class="app-title mdui-typo-display-2 mdui-text-center mdui-text-color-white mdui-hidden-md-up mdui-hidden-xs"
        >
          Pixiv Search
        </div>
        <div
          class="app-title mdui-typo-display-1 mdui-text-center mdui-text-color-white mdui-hidden-sm-up"
        >
          Pixiv Search
        </div>
        <div class="mdui-row mdmdui-textfield-invalidui-row-gapless mdui-m-t-5">
          <div
            id="pixiv-div"
            class="mdui-textfield-has-bottom mdui-center mdui-col-lg-5 mdui-col-md-6 mdui-col-sm-10 mdui-col-xs-11"
            style="float: none"
          >
            <input
              @blur="keyword && getImgsData()"
              v-model="keyword"
              class="mdui-textfield-input mdui-text-color-white mdui-p-r-4"
              type="text"
              placeholder="Seach Pixiv images"
            />
            <div
              class="mdui-textfield-error"
              style="text-shadow: 1px 1px 2px #bbb"
            >
              Cannot find in need
            </div>
            <button
              style="position: absolute; right: 0; top: 0"
              @click="keyword = ''"
              class="mdui-btn mdui-btn-icon mdui-ripple mdui-btn-dense"
            >
              <i class="mdui-icon material-icons mdui-text-color-white-icon"
                >close</i
              >
            </button>
          </div>
        </div>
        <div
          class="mdui-row mdui-row-gapless mdui-m-t-5"
          v-show="resultData.length > 0"
        >
          <div
            class="mdui-textfield-has-bottom mdui-center mdui-col-lg-5 mdui-col-md-6 mdui-col-sm-10 mdui-col-xs-11"
            style="float: none"
          >
            <div class="mdui-text-color-white">
              <h3 class="app-title" style="display: inline">result</h3>
              <button
                @click="resultData = []"
                class="mdui-btn mdui-ripple mdui-btn-dense mdui-float-right"
              >
                Clear
              </button>
            </div>
            <div class="mdui-m-t-1">
              <table
                class="mdui-table mdui-table-hoverable"
                style="background-color: rgba(255, 255, 255, 0.9)"
              >
                <thead>
                  <tr v-for="item in resultData">
                    <th>
                      <a target="_blank" :href="item.url"
                        ><img
                          :style="{ 'max-height': '300px', width: item.width }"
                          :src="item.url"
                      /></a>
                    </th>
                    <th>
                      <span>PID: {{ item.pid }}<br /></span>
                      <span>Title: {{ item.title }}<br /></span>
                      <span>Author: {{ item.author }}<br /></span>
                      <span>R18: {{ item.r18 ? "Yes" : "No" }}</span>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="footer"
      class="mdui-typo-caption mdui-p-b-1 mdui-text-color-white-secondary mdui-text-center"
    >
      Made with 🦊 by
      <a
        target="_blank"
        class="mdui-text-color-theme"
        style="text-decoration: none"
        href="https://github.com/biyuehu"
        >Himeno</a
      >
      | Api Calls {{ stat }} times
    </div>
    <div
      class="mdui-tooltip"
      style="
        transform-origin: center top;
        top: 28px;
        left: 1534px;
        margin-left: -26px;
        margin-top: 38px;
      "
    >
      背景图
    </div>
    <div
      class="mdui-tooltip"
      style="
        transform-origin: center top;
        top: 28px;
        left: 1586px;
        margin-left: -25.5px;
        margin-top: 38px;
      "
    >
      Github
    </div>
    <div id="sc-translator-shadow" style="all: initial"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import mdui from "mdui";
import axios from "axios";
import { resType, seimgData, tips, ToolPixivPage } from "@/function";

const stat = ref<number>(NaN),
  keyword = ref<string>(""),
  progress = ref<boolean>(false),
  resultData = ref<seimgData[]>([]);
axios
  .get("https://api.hotaru.icu/api/stat", {
    params: {
      op: "query",
      name: "seimg_ialapi",
    },
  })
  .then((res) => {
    stat.value = <number>(<resType>res.data).data;
  })
  .catch((err) => tips(`错误：${err}`, "red"));

const getImgsData = () => {
  progress.value = true;
  try {
    axios
      .get("https://hotaru.icu/api/seimg/v2/", {
        params: {
          format: "json",
          r18: 2,
          tag: keyword.value,
        },
      })
      .then((res) => {
        const data: resType = res.data;
        if (data.code === 500 && (<seimgData[]>data.data)[0].pid !== null) {
          resultData.value.push((<seimgData[]>data.data)[0]);
        } else if (
          data.code === 500 &&
          (<seimgData[]>data.data)[0].pid === null
        ) {
          showError(false);
        } else {
          ToolPixivPage.showMessage(`Error: ${data.message}`);
        }
        progress.value = false;
      })
      .catch((err) => tips(`错误：${err}`, "red"));
  } catch (err) {
    ToolPixivPage.showMessage(`Error: ${err}`);
  }
};

const showError = (state: boolean) =>
  ToolPixivPage.showError(<Element>document.querySelector("#pixiv-div"), state);
</script>

<style scoped>
#body {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

#body::-webkit-scrollbar,
#body::-webkit-scrollbar-track-piece {
  background: #fafafa;
}

#body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

#body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}

#body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

#body::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.3);
}

#body:before {
  content: "";
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(https://pic.imgdb.cn/item/63facaf0f144a0100780a66f.png)
    no-repeat fixed;
  background-position: 13% 43%;
  background-size: cover;
  filter: brightness(0.8);
}

input:disabled {
  cursor: wait;
}

#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

.app-title {
  font-weight: 100 !important;
  text-shadow: 2px 2px 4px #000;
}

.mdui-textfield-input {
  border-bottom: 1px solid rgba(255, 255, 255, 0.42);
}

.mdui-textfield-input:not([disabled]):hover {
  cursor: text;
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  -webkit-box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.87);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.87);
}

.copy-td {
  overflow: hidden;
}

.copy-magnet {
  overflow: visible !important;
}

.copy-magnet::after {
  content: "";
  display: block;
  position: absolute;
  left: -100px;
  top: -100px;
  right: -100px;
  bottom: -100px;
}
</style>

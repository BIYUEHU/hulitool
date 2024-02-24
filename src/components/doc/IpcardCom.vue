<template>
  <div>
    <h2><strong>演示效果</strong></h2>
    <label class="mdui-textfield-label">选择角色</label>
    <form>
      <label v-for="(value, index) in charters" :key="index" class="mdui-radio">
        <input
          type="radio"
          name="charters"
          v-model="demoParam"
          :value="index"
        />
        <i class="mdui-radio-icon"></i>
        <span style="margin-right: 15px">{{ value }} </span>
      </label>
    </form>
    <br />
    <img :src="url + demoParam" class="huli-image-normal" />
    <div class="mdui-textfield mdui-textfield-not-empty mdui-row">
      <label class="mdui-textfield-label">内嵌代码</label>
      <div class="mdui-col-xs-9">
        <codemirror
          v-model="code"
          :style="{ height: '40px' }"
          :autofocus="false"
          aria-readonly="true"
          :extensions="extensions"
        />
      </div>
      <div class="mdui-col-xs-3">
        <button @click="copy()" class="mdui-btn mdui-ripple">Copy</button>
      </div>
    </div>
    <span v-show="false"
      >{{ code = `<img src="${url}${demoParam}" ${style} />` }}</span
    >
  </div>
</template>

<script setup lang="ts">
import mdui from "mdui";
import { ref, getCurrentInstance, ComponentInternalInstance, watch } from "vue";
import { copyContent, obj } from "@/function";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

const charters = [
  "随机",
  "香風智乃（Kafuu Chino）",
  "古河渚（Furukawa Nagisa）",
  "棗鈴（Natsume Rin）",
  "神戸小鳥（Kanbe Kotori）",
  "風又ねり（Kazamata Neri）",
  "博麗霊夢（Hakurei Reimu）",
  "姫野星奏（Himeno Sena）",
  "水上由岐（Minakami Yuki）",
  "月社妃（Tsukiyashiro Kisaki）",
];

const { proxy } = <ComponentInternalInstance>getCurrentInstance();
const demoParam = ref("0");
const code = ref<string>("");
const url =
  "https://api.hotaru.icu/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=";
const copy = () =>
  copyContent(
    proxy!,
    `<img src="${url}${demoParam.value}" style="width:500px;max-width: 90%;" />`
  );
const style = `style="width: 500px; max-width: 90%"`;
const extensions = [html(), oneDark];

watch(demoParam, (newValue) => {
  console.log(newValue);
});

new (proxy as obj).$mdui.Select("#demo");
mdui.mutation();
</script>

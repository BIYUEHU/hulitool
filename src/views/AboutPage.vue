<template>
  <div id="main">
    <img
      v-for="item in data.bandage"
      :key="item[1]"
      :src="item[0]"
      :alt="item[1]"
    />

    <h1><strong style="color: aquamarine">HULITOOL</strong></h1>
    <span
      >该项目是本人的第一个 Vue + TypeScript + Vite + Pinia 项目实践，主要用于
      Vue 练手。</span
    >
    <li>
      HULITOOL 完全为纯前端项目无后端（但用到了不少
      <a target="_blank" href="https://api.hotaru.icu">HotaruApi</a> 接口
      ），因此网站部署于 GithubPages 服务
    </li>
    <li>
      目前仅有少部分功能仍未实现，稍后也会时不时添加新功能具体查看
      <router-link to="./info">TODO</router-link>
    </li>
    <li><router-link to="./info">更新日志</router-link></li>
    <span
      ><small
        >如果工具页面无法正常加载请关闭浏览器的广告屏蔽功能或加入白名单</small
      ></span
    >
    <h2>技术栈&依赖包</h2>
    <hr />
    <a
      target="_blank"
      style="margin-right: 5px"
      v-for="item in data.package"
      :key="item"
      :href="`https://www.npmjs.com/package/${item}`"
      >{{ item }}</a
    >

    <h2>关于</h2>
    <hr />
    <span>喜欢的话可以来Github点个<mark>star</mark></span>
    <li>
      仓库地址:
      <a target="_blank" href="https://github.com/biyuehu/hulitool"
        >biyuehu/hulitool</a
      >
    </li>
    <li>博客: <a target="_blank" href="https://hotaru.icu">HotaruBlog</a></li>
  </div>
  <span style="margin: 0 25%; position: relative"
    >Copyright ❤️ by
    <a target="_blank" href="https://hotaru.icu">Himeno</a></span
  >
</template>

<script setup lang="ts">
import data from "@/json/AboutData.json";
</script>

<style scoped>
img {
  margin-right: 5px;
}
</style>

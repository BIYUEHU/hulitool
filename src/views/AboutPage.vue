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
      >该项目是本人的第一个<strong>Vue+TypeScript+Vite+Pinia</strong>项目实战，主要为了练习一下Vue框架开发</span
    >
    <li>
      HULITOOL完全为纯前端项目无后端(但用到了不少<a
        target="_blank"
        href="https://api.hotaru.icu"
        >HOTARUAPI</a
      >接口)，因此网站通过<strong>GithubPages</strong>服务运行
    </li>
    <li>
      目前仅有少部分功能仍未实现，稍后也会时不时添加新功能具体查看<router-link
        to="./info"
        >TODO</router-link
      >
    </li>
    <li>变动记录: <router-link to="./info">CHANGELOG</router-link></li>
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
    <li>博客: <a target="_blank" href="https://hotaru.icu">imlolicon</a></li>
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

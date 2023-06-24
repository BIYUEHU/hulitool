<template>
    <div>
        <h2><strong>演示效果</strong></h2>
        <label class="mdui-textfield-label">选择角色</label>
        <select mdui-select v-model="demoParam" class="mdui-select" id="demo">
            <option value="0" selected>随机</option>
            <option value="1">古河渚</option>
            <option value="2">香风智乃</option>
            <option value="3">立华奏</option>
            <option value="4">亚托利</option>
            <option value="5">神户小鸟</option>
            <option value="6">夜羽真白</option>
            <option value="7">Miku</option>
            <option value="8">博丽灵梦</option>
            <option value="9">枣岭</option>
            <option value="10">阿尔托莉雅</option>
            <option value="11">宫水三叶</option>
        </select><br>
        <img :src="'https://api.imlolicon.tk/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=' + demoParam" class="huli-image-normal">
        <div class="mdui-textfield mdui-textfield-not-empty mdui-row">
            <label class="mdui-textfield-label">内嵌代码</label>
            <div class="mdui-col-xs-9">
                <highlightjs language='html'
                    :code="`&#x3C;img src=&#x22;https://api.imlolicon.tk/api/ipcard?apikey=b699b2d60915d83f3723272855240c4c&img=${demoParam}&#x22; style=&#x22;width:500px;max-width: 90%;&#x22;&#x3E;`" />
            </div>
            <div class="mdui-col-xs-3">
                <br><br>
                <button @click="seccendCopy" class="mdui-btn mdui-ripple">Copy</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, getCurrentInstance } from 'vue';
    const { proxy } = getCurrentInstance();
    const demoParam = ref('0'), demoHtml = ref('');
    const seccendCopy = () => {
        proxy.$copyText(`<img src="https://api.imlolicon.tk/api/ipcard?img=${demoParam}" style="width:500px;max-width: 90%;">`).then(
            proxy.$Func.copyOnSuccess,
            proxy.$Func.copyOnError
        )
    }

    new proxy.$mdui.Select('#demo');/* 
            this.demoHtml = `<img src="https://api.imlolicon.tk/api/ipcard?img=${demoParam}" style="width:500px;max-width: 90%;">` */
</script>
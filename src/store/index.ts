
import { defineStore } from 'pinia';

const settings = {
    skey: "",
    background: "",
    theme: {
        layout: "auto",
        primary: "cyan",
        accent: "blue"
    }
}

/* 定义容器 */
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            chatgpt: [],
            settings: JSON.parse(JSON.stringify(settings))
        }
    },
    persist: {
        storage: localStorage
    },

    getters: {},

    actions: {
        setDefaultTheme() {
            this.settings = JSON.parse(JSON.stringify(settings));
        }
    }
});

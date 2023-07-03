
import { defineStore } from 'pinia';

const settings = {
    background: "",
    theme: {
        layout: "auto",
        primary: "cyan",
        accent: "light-green"
    }
}

/* 定义容器 */
export const useMainStore = defineStore('main', {
    state: () => {
        return {
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

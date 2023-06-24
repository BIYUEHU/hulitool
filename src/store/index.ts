
import { defineStore } from 'pinia';

const settings = {
    theme: {
        layout: "auto",
        primary: "blue-grey",
        accent: "red"
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
            this.settings = settings;
        }
    }
});

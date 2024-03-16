import Vuex from 'vuex';
import modalStore from "@/store/modalStore.js";
import userStore from "@/store/userStore.js";

export default new Vuex.Store({
    modules: {
        modalStore, userStore
    }
})
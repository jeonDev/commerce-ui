import {createRouter, createWebHashHistory} from "vue-router";
import Main from "@/components/main/Main.vue";

const routes = [
    { path: '/', component: Main}
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})

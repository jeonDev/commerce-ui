import {createRouter, createWebHashHistory} from "vue-router";
import Main from "@/components/main/Main.vue";
import Signup from "@/components/member/Signup.vue";
import Login from "@/components/member/Login.vue";

const routes = [
    { path: '/', component: Main},
    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})

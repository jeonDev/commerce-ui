import {createRouter, createWebHistory} from "vue-router";
import Main from "@/components/main/Main.vue";
import Signup from "@/components/member/Signup.vue";
import Login from "@/components/member/Login.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";
import AdminProductManage from "@/components/admin/AdminProductManage.vue";
import MyPage from "@/components/member/MyPage.vue";

const routes = [
    { path: '/', component: Main},
    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
    { path: '/mypage', component: MyPage},

    { path: '/product', component: ProductList},
    { path: '/product/:productInfoSeq', component: ProductDetail},

    { path: '/admin/product/manage', component: AdminProductManage}
]


export default createRouter({
    history: createWebHistory(),
    routes
})

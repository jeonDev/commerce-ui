import {createRouter, createWebHistory} from "vue-router";
import Main from "@/components/main/Main.vue";
import Signup from "@/components/member/Signup.vue";
import Login from "@/components/member/Login.vue";
import ProductList from "@/components/product/ProductList.vue";
import ProductDetail from "@/components/product/ProductDetail.vue";
import AdminProductManage from "@/components/admin/AdminProductInfoManage.vue";
import MyPage from "@/components/member/MyPage.vue";
import Order from "@/components/order/Order.vue";
import AdminOrderList from "@/components/admin/AdminOrderList.vue";
import Logout from "@/components/member/Logout.vue";
import AdminProductStockManage from "@/components/admin/AdminProductManage.vue";

const routes = [
    { path: '/', component: Main},
    { path: '/login', component: Login},
    { path: '/logout', component: Logout},
    { path: '/signup', component: Signup},
    { path: '/mypage', component: MyPage},

    { path: '/product', component: ProductList},
    { path: '/product/:productInfoSeq', component: ProductDetail},

    { path: '/order/:product', name: 'order', component: Order},

    { path: '/admin/product/manage', component: AdminProductManage},
    { path: '/admin/product/stock/manage', component: AdminProductStockManage},
    { path: '/admin/order/list', component: AdminOrderList}
]


export default createRouter({
    history: createWebHistory(),
    routes
})

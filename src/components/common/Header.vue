<template>
  <b-nav card-header tabs>
    <b-nav-item
        v-for="item in routeList"
        :key="item.url"
        :active="isNavActive(item.url)"
    >
      <router-link class="nav-router" :to="item.url">{{ item.title }}</router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      routers: [
        {url: '/', title: '메인', authority: ''},
        {url: '/login', title: '로그인', authority: ''},
        {url: '/signup', title: '회원가입', authority: ''},
        {url: '/mypage', title: '마이페이지', authority: 'ROLE_USER'},
        {url: '/product', title: '상품목록', authority: ''},
        {url: '/admin/product/manage', title: '상품관리 - 관리자', authority: 'ROLE_ADMIN'},
      ]
    }
  },
  computed: {
    routeList() {
      return this.routers.filter(item => item.authority === '' || item.authority === sessionStorage.getItem('authority'));
    }
  },
  methods: {
    isNavActive(uri) {
      return this.$route.path === uri;
    }
  }
}
</script>

<style scoped>
.nav-router{
  color: #26577C;
  text-decoration: none;
  font-size: 15px;
  padding:5px;
}
</style>
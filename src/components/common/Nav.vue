<template>
  <b-nav class="d-flex justify-content-end">
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
        {url: '/login', title: '로그인', loginYn: 'N'},
        {url: '/signup', title: '회원가입', loginYn: 'N'},
        {url: '/mypage', title: '마이페이지', loginYn: 'Y'},
        {url: '/logout', title: '로그아웃', loginYn: 'Y'}
      ]
    }
  },
  computed: {
    routeList() {
      const authYn = sessionStorage.getItem("token");
      return this.routers.filter(item => (item.loginYn === 'N' && authYn == null)
          || (item.loginYn === 'Y' && authYn));
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
  color: dimgrey;
  text-decoration: none;
  font-size: 12px;
  padding:5px;
}
.nav-router:hover {
  color: orangered;
}
</style>
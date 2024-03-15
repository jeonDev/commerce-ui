<template>
  <b-nav card-header tabs>
    <b-nav-item
        v-for="item in routers"
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
        {url: '/', title: '메인'},
        {url: '/login', title: '로그인'},
        {url: '/signup', title: '회원가입'},
        {url: '/product', title: '상품목록'},
      ]
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
<template>
  <div>

  </div>
</template>

<script>
export default {

  methods: {
    async logout() {
      // TODO: api 호출 -> refreshToken Cookie 제거
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("authority");
      location.href = '/login';
    }
  },
  created() {
    this.logout()
  }
}
</script>
<style scoped>

</style>
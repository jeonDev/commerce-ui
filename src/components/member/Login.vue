<template>
  <div class="container w-50 m-auto">
    <div class="m-2">
      <b-form-input
          type="text"
          placeholder="아이디"
          v-model="request.id"
      />
    </div>
    <div class="m-2">
      <b-form-input
          type="password"
          placeholder="패스워드"
          v-model="request.password"
      />
    </div>
    <div class="m-2">
      <b-button
          variant="success"
          @click="loginApiCall"
      >로그인</b-button>
    </div>
  </div>
</template>

<script>


import {loginApi} from "@/api/MemberApi.js";
import {modalSetting} from "@/utils/utils.js";

export default {
  data() {
    return {
      request: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    async loginApiCall() {
      const res = await loginApi(this.request);
      if(res.code === '0000') {
        const accessToken = res.data.accessToken;
        const authority = res.data.authority;
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("authority", authority);
      }
      modalSetting('로그인',
          res.code,
          res.message);
    }
  }
}
</script>
<style scoped>

</style>
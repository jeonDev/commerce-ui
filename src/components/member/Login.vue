<template>
  <div class="container w-50 m-auto">
    <div class="m-2">
      <b-form-input
          type="text"
          placeholder="아이디"
          v-on:keyup.enter="loginApiCall"
          v-model="request.id"
      />
    </div>
    <div class="m-2">
      <b-form-input
          type="password"
          placeholder="패스워드"
          v-on:keyup.enter="loginApiCall"
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
import {isNullOrEmpty, modalSetting} from "@/utils/utils.js";

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

      if (isNullOrEmpty(this.request.id) || isNullOrEmpty(this.request.password)) {
        return;
      }

      const res = await loginApi(this.request);
      modalSetting('로그인',
          res.code,
          res.message);
      if(res.code === '0000') {
        const accessToken = res.data.accessToken;
        const authority = res.data.authority;
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("authority", authority);
        location.href = '/';
      }
    }
  }
}
</script>
<style scoped>

</style>
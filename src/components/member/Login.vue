<template>
  <div>
    <b-form-input
        type="text"
        placeholder="아이디"
        v-model="request.id"
    />
    <b-form-input
        type="password"
        placeholder="패스워드"
        v-model="request.password"
    />
    <b-button
        variant="success"
        @click="loginApiCall"
    >로그인</b-button>
    {{request}}
  </div>
</template>

<script>


import {loginApi} from "@/api/MemberApi.js";

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
    }
  }
}
</script>
<style scoped>

</style>
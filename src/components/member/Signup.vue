<template>
  <div>
    <b-form-input
        type="text"
        placeholder="아이디"
        v-model="request.id"
    />
    <b-form-input
        type="text"
        placeholder="이름"
        v-model="request.name"
    />
    <b-form-input
        type="password"
        placeholder="패스워드"
        v-model="request.password"
    />
    <b-form-input
        type="tel"
        placeholder="전화번호"
        v-model="request.tel"
    />
    <b-form-input
        type="text"
        placeholder="주소"
        v-model="request.addr"
    />
    <b-form-input
        type="text"
        placeholder="상세주소"
        v-model="request.addrDetail"
    />
    <b-form-input
        type="text"
        placeholder="우편번호"
        v-model="request.zipCode"
    />
    <b-button
        variant="success"
        @click="signupApiCall"
      >회원가입</b-button>
  </div>
</template>

<script>

import {signUpApi} from "@/api/MemberApi.js";

export default {
  data() {
    return {
      request: {
        "id": "",
        "name": "",
        "password": "",
        "tel": "",
        "addr": "",
        "addrDetail": "",
        "zipCode": ""
      }
    }
  },
  methods: {
    async signupApiCall() {
      const res = await signUpApi(this.request);
    }
  }
}
</script>

<style scoped>

</style>
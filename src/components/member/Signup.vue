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
          type="text"
          placeholder="이름"
          v-model="request.name"
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
      <b-form-input
          type="tel"
          placeholder="전화번호"
          v-model="request.tel"
      />
    </div>
    <div class="m-2">
      <b-form-input
          type="text"
          placeholder="주소"
          v-model="request.addr"
      />
    </div>
    <div class="m-2">
      <b-form-input
          type="text"
          placeholder="상세주소"
          v-model="request.addrDetail"
      />
    </div>
    <div class="m-2">
      <b-form-input
          type="text"
          placeholder="우편번호"
          v-model="request.zipCode"
      />
    </div>
    <div class="m-2">
      <b-button
          variant="success"
          @click="signupApiCall"
        >회원가입</b-button>
    </div>
  </div>
</template>

<script>

import {signUpApi} from "@/api/MemberApi.js";
import {modalSetting} from "@/utils/utils.js";

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
      modalSetting(res.code, res.message, () => {});
    }
  }
}
</script>

<style scoped>

</style>
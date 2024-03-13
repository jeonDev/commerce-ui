<template>
  <div>
    <input
        :value="request.id"
        @input="e => request.id = e.target.value"
    />
    <input
        :value="request.name"
        @input="e => request.name = e.target.value"
    />
    <input
        type="password"
        :value="request.password"
        @input="e => request.password = e.target.value"
    />
    <input
        :value="request.tel"
        @input="e => request.tel = e.target.value"
    />
    <input
        :value="request.addr"
        @input="e => request.addr = e.target.value"
    />
    <input
        :value="request.addrDetail"
        @input="e => request.addrDetail = e.target.value"
    />
    <input
        :value="request.zipCode"
        @input="e => request.zipCode = e.target.value"
    />
    <button
      @click="signupApiCall"
      >회원가입</button>
    {{request}}
  </div>
</template>

<script>
import signUp from "@/api/MemberApi.js";

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
      const res = await signUp(this.request);

    }
  }
}
</script>

<style scoped>

</style>
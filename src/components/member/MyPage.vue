<template>
  <div class="container w-50 m-auto">
    {{data.name}} : {{data.point}}
  </div>
</template>

<script>


import {getMyUserInfo} from "@/api/MemberApi.js";

export default {
  data() {
    return {
      data: {
        name: '',
        point: 0
      }
    }
  },
  methods: {
    async getUserInfo() {
      const res = await getMyUserInfo();
      this.data = res.data;
    }
  },
  created() {
    this.getUserInfo();
  }
}
</script>
<style scoped>

</style>
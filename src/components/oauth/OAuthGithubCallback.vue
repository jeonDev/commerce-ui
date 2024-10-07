<template>
  <div>

  </div>
</template>

<script>

import {githubCallback} from "@/api/MemberApi.js";
import {useRoute} from "vue-router";

export default {
  methods: {
    async callback() {
      const route = useRoute();
      const code = route.query.code;
      const result = await githubCallback({code:code});
      console.log(result);
      if (result.code === '0000') {
        // TODO: 성공 처리
      } else {
        // TODO: 실패 처리
      }
      location.href = '/'
    }
  }, created() {
    this.callback()
  }
}
</script>
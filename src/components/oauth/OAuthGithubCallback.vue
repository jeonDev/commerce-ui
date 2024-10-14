<template>
  <div>

  </div>
</template>

<script>

import {githubCallback} from "@/api/MemberApi.js";
import {useRoute} from "vue-router";
import {modalSetting} from "@/utils/utils.js";

export default {
  methods: {
    async callback() {
      const route = useRoute();
      const code = route.query.code;
      const res = await githubCallback({code:code});
      if (res.code === '0000') {
        const accessToken = res.data.accessToken;
        const authority = res.data.authority;
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("authority", authority);
        location.href = '/';
      } else {
        modalSetting('연동 실패',
            res.code,
            res.message,
            () => location.href = '/login'
        );
      }
    }
  }, created() {
    this.callback()
  }
}
</script>
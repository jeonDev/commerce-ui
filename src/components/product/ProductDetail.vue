<template>
  <div class="container">

  </div>
</template>

<script>
import {productDetailApi} from "@/api/ProductApi.js";

export default {
  data() {
    return {
      response: []
    }
  },
  methods: {
    async productDetailGetApiCall(productInfoSeq) {
      const res = await productDetailApi(productInfoSeq);
      this.response = res.data;
    },
  },
  created() {
    this.productDetailGetApiCall(this.$route.params.productInfoSeq)
  }
}

</script>

<style scoped>

</style>
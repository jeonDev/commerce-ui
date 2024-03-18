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
    async productDetailGetApiCall() {
      const res = await productDetailApi();
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
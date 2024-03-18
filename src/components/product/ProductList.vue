<template>
  <div class="container">
    <!--  상품 목록  -->
    <div>
      <div
          class="border"
          v-for="item in response"
          @click="moveDetailPage(item.productInfoSeq)"
      >
        <div>
          {{item.productName}}
        </div>
        <div>
          {{item.productDetail}}
        </div>
        <div>
          {{item.discountPrice}} {{item.price}}
        </div>
        <div v-for="opt in item.productOptions">
          {{opt}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {productListApi} from "@/api/ProductApi.js";

export default {
  data() {
    return {
      response: []
    }
  },
  methods: {
    async productListGetApiCall() {
      const res = await productListApi();
      this.response = res.data;
    },
    moveDetailPage(productInfoSeq) {
      this.$router.push({path:`/product/${productInfoSeq}`})
    }
  },
  created() {
    this.productListGetApiCall();
  }
}
</script>

<style scoped>

</style>
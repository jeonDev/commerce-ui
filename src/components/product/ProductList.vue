<template>
  <div class="container">
    <!--  상품 목록  -->
    <div>
      <div
          class="border p-2 m-2 bg-body-secondary"
          v-for="item in response"
          @click="moveDetailPage(item.productInfoSeq)"
      >
        <div>
          상품명 : {{item.productName}}
        </div>
        <div>
          <span>
            가격 : {{item.price}}
          </span>
          <span v-if="item.discountPrice" style="font-size: 12px; color: orangered">
            (할인 가격 : {{item.discountPrice}})
          </span>
        </div>
        <div class="d-flex" v-if="item.productOptions.length > 0">
          <div>
            옵션 :
          </div>
          <div v-for="opt in item.productOptions">
            {{opt}}
          </div>
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
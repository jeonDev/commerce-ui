<template>
  <div class="container">
    <div class="d-flex justify-content-between border p-2 bg-body-secondary">
      <div>
        <div>
          <span>
            상품명 :
          </span>
          <span>
          {{productInfo.productName}}
          </span>
        </div>
        <div>
          <span>
            가격 :
          </span>
          <span>
            {{productInfo.price}}
          </span>
        </div>
        <div>
          <b-button>
            구매하기
          </b-button>
        </div>
      </div>
      <div>
        {{productInfo.productDetail}}
      </div>
    </div>
  </div>
</template>

<script>
import {productDetailApi} from "@/api/ProductApi.js";

export default {
  data() {
    return {
      productInfo: []
    }
  },
  methods: {
    async productDetailGetApiCall(productInfoSeq) {
      const res = await productDetailApi(productInfoSeq);
      if (res.code === '0000') {
        this.productInfo = res.data;
      } else {
        // TODO: Error Modal
      }
    },
  },
  created() {
    this.productDetailGetApiCall(this.$route.params.productInfoSeq)
  }
}

</script>

<style scoped>

</style>
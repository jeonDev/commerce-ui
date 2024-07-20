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
        <div v-if="productInfo.productOptions.length > 0">
          <b-form-select
              v-model="productSeq"
          >
            <b-form-select-option value=null>선택</b-form-select-option>
            <b-form-select-option
                v-for="item in productInfo.productOptions"
                :value="item.productSeq"
            >
              {{item.productOption}}
            </b-form-select-option>
          </b-form-select>
        </div>
        <div>
          <b-button
              @click="moveOrderPage"
          >
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
import {modalSetting} from "@/utils/utils.js";

export default {
  data() {
    return {
      productInfo: {
        productName: '',
        price: 0,
        productOptions: [],
        productDetail: ''
      },
      productSeq: null
    }
  },
  methods: {
    async productDetailGetApiCall(productInfoSeq) {
      const res = await productDetailApi(productInfoSeq);
      if (res.code === '0000') {
        this.productInfo = res.data;
      } else {
        modalSetting("조회", res.code, res.message)
      }
    },
    moveOrderPage() {
      if (this.productSeq == null) return;
      this.$router.push({path:`/order/${this.productSeq}`})


    }
  },
  created() {
    this.productDetailGetApiCall(this.$route.params.productInfoSeq)
  }
}

</script>

<style scoped>

</style>
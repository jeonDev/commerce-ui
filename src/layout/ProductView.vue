<template>
    <!--  상품 목록  -->
  <div>
    <div
        class="border p-2 m-2 bg-body-secondary"
        v-for="item in productList"
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
      <div class="d-flex" v-if="item.productOptions != null && item.productOptions.length > 0">
        <div>
          옵션 :
        </div>
        <div class="me-1" v-for="opt in item.productOptions">
          {{opt.productOption}}
        </div>
      </div>
      <div>
        {{item.productStockSummaryName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: Array
  },
  methods: {
    moveDetailPage(productInfoSeq) {
      this.$router.push({path:`/product/${productInfoSeq}`})
    }
  }
}
</script>


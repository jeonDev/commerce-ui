<template>
  <div class="container">
    <div>
      <ProductView
          :product-list="response"
      />
    </div>
  </div>
</template>

<script>
import {productListApi} from "@/api/ProductApi.js";
import ProductView from "@/layout/ProductView.vue";

export default {
  components: {ProductView},
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
  },
  created() {
    this.productListGetApiCall();
  }
}
</script>
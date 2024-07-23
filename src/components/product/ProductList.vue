<template>
  <div class="container">
    <div>
      <ProductView
          :product-list="response.list"
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
      response: [],
      page: {
        pageNumber: 0,
        pageSize: 10
      }
    }
  },
  methods: {
    async productListGetApiCall() {
      const res = await productListApi(this.page);
      this.response = res.data;
    },
  },
  created() {
    this.productListGetApiCall();
  }
}
</script>
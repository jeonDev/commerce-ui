<template>
  <div>
    <div>
      {{response}}
    </div>
  </div>
</template>

<script>
import {modalSetting} from "@/utils/utils.js";
import {adminProductListApi} from "@/api/ProductApi.js";

export default {
  data() {
    return {
      request: {
        "productName": "",
        "productDetail": "",
        "price": "",
        "productOptions": []
      },
      page: {
        pageNumber: 0,
        pageSize: 10
      },
      response: []
    }
  },
  methods: {
    async adminProductListGetApiCall() {
      const res = await adminProductListApi(this.request);
      modalSetting('등록 결과', res.code, res.message)
      this.response = res.data;
    }
  },
  created() {
    this.adminProductListGetApiCall();
  }
}
</script>

<style scoped>

</style>
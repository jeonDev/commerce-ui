<template>
  <div>
    <div class="d-flex justify-content-end">
      <b-button
          variant="outline-success"
          @click="movePageToManage('')"
      >
        상품 등록
      </b-button>
    </div>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th>No.</b-th>
          <b-th>상품명</b-th>
          <b-th>가격</b-th>
          <b-th>재고 관리</b-th>
          <b-th>상품 관리</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr
            v-for="(item, idx) in response.list"
        >
          <b-td>{{idx + 1}}</b-td>
          <b-td>{{item.productName}}</b-td>
          <b-td>{{item.price}}</b-td>
          <b-td>
            <b-button
                variant="outline-dark"
                @click="movePageToStockManage(item.productInfoSeq)"
            >
              재고 관리
            </b-button>
          </b-td>
          <b-td>
            <b-button
                variant="outline-dark"
                @click="movePageToManage(item.productInfoSeq)"
            >
              상품 관리
            </b-button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
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
    movePageToManage(productInfoSeq) {
      console.log(productInfoSeq)
      this.$router.push({
        path: `/admin/product/manage/${productInfoSeq}`,
      })

       console.log(productInfoSeq);
    },
    movePageToStockManage(productInfoSeq) {
      console.log(productInfoSeq)
    },
    async adminProductListGetApiCall() {
      const res = await adminProductListApi(this.request);
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
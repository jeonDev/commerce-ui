<template>
  <div>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th>No.</b-th>
          <b-th>상품</b-th>
          <b-th>금액</b-th>
          <b-th>납부금액</b-th>
          <b-th>상태</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr
            v-for="(item, idx) in response.list"
        >
          <b-td>{{idx + 1}}</b-td>
          <b-td>
            {{item.orderDetailInfos[0].productName}} 외 {{item.orderDetailInfos.length}}건
          </b-td>
          <b-td>{{item.buyAmount}}</b-td>
          <b-td>{{item.paidAmount}}</b-td>
          <b-td>{{item.orderStatus}}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import {orderViewGetApi} from "@/api/Order.js";

export default {
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
    async orderViewGetApiCall() {
      const res = await orderViewGetApi(this.page);
      this.response = res.data;
    },
  },
   created() {
    this.orderViewGetApiCall();
   }
}
</script>

<style scoped>

</style>
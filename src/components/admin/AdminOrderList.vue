<template>
  <div>
    {{response}}
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
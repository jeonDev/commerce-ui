<template>
  <div class="container">
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="이름"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="수령인"
            v-model="request.name"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="휴대전화"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="휴대전화"
            v-model="request.tel"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="주소"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="주소"
            v-model="request.addr"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="상세주소"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="상세주소"
            v-model="request.addrDetail"
        />
      </b-form-group>
    </div>

    <div>
      <div v-for="item in orderProduct">
        <div>
          {{item.productName}} {{item.productOptionCode}}
        </div>
        <div>
          {{item.price * item.cnt}}
        </div>
        <div>
          {{item.cnt}}
        </div>
      </div>
    </div>

    <div class="text-center">
      <b-button
          variant="outline-success"
          @click="payment"
      >
        결제
      </b-button>
    </div>
  </div>
</template>

<script>

import {productApi} from "@/api/ProductApi.js";
import {modalSetting} from "@/utils/utils.js";
import {orderApi} from "@/api/Order.js";

export default {
  data() {
    return {
      request: {
        name: '',
        tel: '',
        addr: '',
        addrDetail: ''
      },
      orderProduct: []
    }
  },
  methods: {
    async payment() {
      const buyProducts = this.orderProduct.map(item => {
        return {
          productSeq : item.productSeq,
          cnt : 2
        }
      });
      const res = await orderApi({
        buyProducts: buyProducts,
        isPayment: true
      })

      modalSetting("주문 결과", res.code, res.message);
    },
    async productDetailGetApiCall() {
      const product = JSON.parse(this.$route.params.product);
      for (let i = 0; i < product.length; i++) {
        const productSeq = product[i].productSeq;
        const cnt = product[i].cnt;
        const res = await productApi(productSeq);

        if (res.code === '0000') {
          this.orderProduct.push(res.data);
          this.orderProduct.map(item => {
            if (item.productSeq === productSeq) {
              item.cnt = cnt;
            }
          })
        } else {
          modalSetting("조회", res.code, res.message)
        }
      }
    }
  },
  created() {
    this.productDetailGetApiCall();
  }
}
</script>
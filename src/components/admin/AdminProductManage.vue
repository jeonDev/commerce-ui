<template>
  <div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="상품명"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="상품명"
            v-model="request.productName"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="상세 설명"
          label-for="input-sm"
      >
        <b-form-textarea
            id="input-sm"
            size="sm"
            placeholder="상품설명"
            v-model="request.productDetail"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="가격"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            type="number"
            placeholder="가격"
            v-model="request.price"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="옵션"
          label-for="input-sm"
      >
        <div class="d-flex">
          <div class="d-flex justify-content-start" v-for="(item, idx) in request.productOptionsCodes">
            <b-form-input
                id="input-sm"
                size="sm"
                type="text"
                placeholder="옵션"
                :disabled="request.productOptionsCodes.length > (idx + 1)"
                v-model="request.productOptionsCodes[idx]"
            />
          </div>
          <div>
            <b-button
                @click="addProductOptions"
            >
              추가
            </b-button>
          </div>

        </div>
      </b-form-group>
    </div>
    <div>
      <b-button
          @click="addProduct"
      >
        등록
      </b-button>
    </div>
  </div>
</template>

<script>
import {isNullOrEmpty} from "@/utils/utils.js";
import {adminProductAdd} from "@/api/ProductApi.js";

export default {
  data() {
    return {
      request: {
        "productName": "",
        "productDetail": "",
        "price": "",
        "productOptionsCodes": []
      }
    }
  },
  methods: {
    addProductOptions() {
      const length = this.request.productOptionsCodes.length;
      if (length > 0
          && isNullOrEmpty(this.request.productOptionsCodes[length - 1])) {
        return;
      }
      this.request.productOptionsCodes.push('');
    },
    addProduct() {
      adminProductAdd(this.request);
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="container w-50 m-auto">
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="아이디"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="아이디"
            disabled
            v-model="data.id"
        />
      </b-form-group>
    </div>
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
            placeholder="이름"
            v-model="data.name"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="전화번호"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="전화번호"
            v-model="data.tel"
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
            v-model="data.addr"
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
            v-model="data.addrDetail"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="우편번호"
          label-for="input-sm"
      >
        <b-form-input
            id="input-sm"
            size="sm"
            placeholder="우편번호"
            v-model="data.zipCode"
        />
      </b-form-group>
    </div>
    <div class="m-2">
      <b-form-group
          label-cols="2"
          label-cols-lg="2"
          label-size="sm"
          label="포인트"
          label-for="input-sm"
      >
        <div class="d-flex">
          <b-form-input
              id="input-sm"
              size="sm"
              placeholder="포인트"
              disabled
              v-model="data.point"
          />
          <div class="p-2"/>
          <b-button
              size="sm"
              variant="outline-success"
              style="white-space: nowrap"
              @click="isPointShow = true"
          >
            충전
          </b-button>
          <b-button
              size="sm"
              variant="outline-success"
              style="white-space: nowrap"
              @click="pointAdjustmentHistory"
          >
            충전내역 확인
          </b-button>
        </div>
      </b-form-group>
    </div>

    <div class="text-center">
      <b-button
          variant="success"
          @click="myUserInfoUpdate"
      >
        수정
      </b-button>
      <b-button
          variant="warning"
          @click="terminate"
      >
        회원탈퇴
      </b-button>
    </div>

    <b-modal
        hide-footer
        title="충전"
        v-model="isPointShow"
    >
      <div class="d-flex justify-content-end">
        <b-form-input
            type="number"
            id="input-sm"
            size="sm"
            placeholder="충전금액"
            v-model="point"
        />
        <div class="p-2"></div>
        <b-button
            class="w-25 bg-success"
            @click="addPoint"
        >충전</b-button>
      </div>
    </b-modal>

    <b-modal
        hide-footer
        title="충전내역"
        v-model="isPointHistoryShow"
    >
      <div v-for="item in pointHistory">
        {{item.point}} {{item.createDt}} {{item.pointProcessStatus}}
      </div>
    </b-modal>

  </div>
</template>

<script>


import {getMyUserInfo, updateUserInfo} from "@/api/MemberApi.js";
import {pointAdjustment, selectPointHistory} from "@/api/PointApi.js";
import {modalSetting} from "@/utils/utils.js";

export default {
  data() {
    return {
      data: {
        id: '',
        name: '',
        tel: '',
        addr: '',
        addrDetail: '',
        zipCode : '',
        point: 0
      },
      isPointShow: false,
      isPointHistoryShow: false,
      point: 0,
      pointHistory: []
    }
  },
  methods: {
    async getUserInfo() {
      const res = await getMyUserInfo();
      this.data = res.data;
    },
    async myUserInfoUpdate() {
      const res = await updateUserInfo(this.data);
      if (res.code === '0000') this.getUserInfo();
    },
    async addPoint() {
      // TODO: 포인트 충전
      const res = await pointAdjustment({
        pointProcessStatus: '0',
        point: this.point
      });

      this.isPointShow = false;
      if (res.code === '0000') {
        this.getUserInfo();
        this.point = 0;
      }
      modalSetting('충전 결과', res.code, res.message)

    },
    async pointAdjustmentHistory() {
      this.isPointHistoryShow = true;
      const res = await selectPointHistory();
      if (res.code === '0000') this.pointHistory = res.data.list;
    },
    async terminate() {
      // TODO: 회원 탈퇴

    }
  },
  created() {
    this.getUserInfo();
  }
}
</script>
<style scoped>

</style>
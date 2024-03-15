<template>
  <b-modal
      hide-footer
      :title="modalStore.title"
      v-model="modalStore.isShow"
      @hide="modalStore.callback"
  >
    <div>
      [{{modalStore.code}}] {{modalStore.message}}
    </div>
    <div class="d-flex justify-content-end mt-5" v-if="modalStore.isSuccessBtn">
      <b-button
          class="w-25 m-1 bg-success"
          @click="modalStore.successCallback"
      >확인</b-button>
    </div>
  </b-modal>
</template>

<script>

export default {
  computed: {
    modalStore() {
      return this.$store.state.modalStore;
    }
  }
}

</script>
<template>
  <b-modal
      hide-footer
      v-model="modalStore.isShow"
      @hide="modalStore.callback"
  >
    [{{modalStore.code}}] {{modalStore.message}}
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
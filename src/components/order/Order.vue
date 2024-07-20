<template>
  <div class="container">

  </div>
</template>

<script>

export default {
  data() {
    return {
      response: []
    }
  },
  methods: {
  },
  created() {
    console.log(this.$route.params.productSeq);
  }
}
</script>
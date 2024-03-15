<template>
  <div id="app">
    <Modal/>
    <header>
      <Header/>
    </header>
    <section>
      <router-view/>
    </section>
    <footer>

    </footer>
  </div>
</template>

<script setup>
import Header from "@/components/common/Header.vue";
import Modal from "@/components/layout/Modal.vue";

</script>

<style scoped>
</style>

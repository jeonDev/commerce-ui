<template>
  <div id="app">
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

</script>

<style scoped>
</style>

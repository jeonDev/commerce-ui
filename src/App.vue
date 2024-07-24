<template>
  <div id="app">
    <Modal/>
    <b-card no-body>
      <nav>
        <Nav/>
      </nav>
      <header>
        <b-card-header header-tag="nav">
          <Header/>
        </b-card-header>
      </header>

      <section>
        <b-card-body>
          <router-view/>
        </b-card-body>
      </section>

      <footer>

      </footer>
    </b-card>


  </div>
</template>

<script setup>
import Header from "@/components/common/Header.vue";
import Nav from "@/components/common/Nav.vue";
import Modal from "@/components/layout/Modal.vue";

</script>

<style scoped>
</style>

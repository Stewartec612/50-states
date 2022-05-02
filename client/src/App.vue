<template>
  <!--template for how your home screen will be layed out -->

  <page-header></page-header>



  <router-view></router-view>


  <page-footer></page-footer>

</template>

<script>

import pageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter";
import StateList from "@/components/StateList";

export default {
  name: 'App',
  components: {
    StateList,
    PageFooter,
    pageHeader
  },
  mounted() {
    this.$stateService.getAllStates().then(states => console.log(states)) }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aliceblue;
}
</style>

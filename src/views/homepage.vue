<template>
  <div id="homepage">
    <div class="title"></div>
    <chartsmap></chartsmap>
    <div class="title"></div>
    <chartspie></chartspie>
    <div class="title"></div>
    <chartsradar></chartsradar>
  </div>

</template>

<script>
import axios from 'axios'
import chartsmap from './chartsMap'
import chartspie from './chartsPie'
import chartsradar from './chartsRadar'
export default {
  components: {
      chartsmap,
      chartspie,
      chartsradar
    },
  data() {
    return {
      count: ""
    };
  },
  mounted() {

  },

  beforeCreate() {},

  watch: {},

  methods: {


  }
};
</script>

<style scoped>
@import url("../css/homepage.css");
</style>

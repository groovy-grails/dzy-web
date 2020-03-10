<template>
  <div id="homepage">
    <div class="title"></div>
    <chartsmap></chartsmap>
    <div class="title"></div>
    <chartspie></chartspie>
    <div class="title"></div>
    <chartsradar></chartsradar>
    <div class="title"></div>
    <chartswordcloud></chartswordcloud>
    <div class="title"></div>
  </div>

</template>

<script>
import axios from 'axios'
import chartsmap from './chartsMap'
import chartspie from './chartsPie'
import chartsradar from './chartsRadar'
import chartswordcloud from './chartsWordCloud'
export default {
  components: {
      chartsmap,
      chartspie,
      chartsradar,
      chartswordcloud
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
    gotowd(){
      this.$router.push({
        name: 'chartsWordCloud'
      })
    },

  }
};
</script>

<style scoped>
@import url("../css/homepage.css");
</style>

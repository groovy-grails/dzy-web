<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
    
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
  },
  mounted() {
    }
};
</script>

<style>

</style>

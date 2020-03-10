<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="reporterIndex">
      <img slot="icon" v-bind:src="messagecomputed=='reporterIndex'?this.atabs[0][1]:this.atabs[0][0]">
      首页
    </mt-tab-item>
    <!-- <mt-tab-item id="business">
      <img slot="icon" v-bind:src="messagecomputed=='business'?this.atabs[1][1]:this.atabs[1][0]">
      办事导航
    </mt-tab-item>
    <mt-tab-item id="soldiershall">
      <img slot="icon" v-bind:src="messagecomputed=='soldiershall'?this.atabs[2][1]:this.atabs[2][0]">
      军人讲堂
    </mt-tab-item> -->

    <mt-tab-item id="reporterMy">
      <img slot="icon" v-bind:src="messagecomputed=='reporterMy'?this.atabs[3][1]:this.atabs[3][0]">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        //选中的tabbar值message为外面页面传入的值selected
        message: this.selected,
        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
        atabs: [
          [require("@/assets/home1.png"), require("@/assets/home2.png")],
          [require("@/assets/tab02_2.png"), require("@/assets/tab02_1.png")],
          [require("@/assets/tab03_2.png"), require("@/assets/tab03_1.png")],
          [require("@/assets/my1.png"), require("@/assets/my2.png")]
        ]
      }
    },
    props: {
      selected: String
    },

    computed:{
      messagecomputed:{
        set(){
           let path = this.$route.path;
            console.log(this.message+" set computed message:"+path.replace("/",""))
            this.message=path.replace("/","");
            return path.replace("/","");
          },
        get(){
         let path = this.$route.path;
          console.log(this.message+" get computed message:"+path.replace("/",""))
          this.message=path.replace("/","");
          return path.replace("/","");
        },
      }
    },

    watch: {
      message: function (val, oldVal) {
        console.log(oldVal+"->"+val)
        switch (val) {
          case 'reporterIndex':
            if(this.$route.path!='/reporterIndex'){
              this.$router.replace('/reporterIndex');
            }
            break;
          /*case 'business':
            if(this.$route.path!='/business'){
              this.$router.replace('/business');
            }
            break;
          case 'soldiershall':
            if(this.$route.path!='/soldiershall'){
              this.$router.replace('/soldiershall');
            }
            break;*/
          case 'reporterMy':
            if(this.$route.path!='/reporterMy'){
              this.$router.replace('/reporterMy');
            }
            break;
        }
      }
    },
    methods:{
    },
  }
</script>

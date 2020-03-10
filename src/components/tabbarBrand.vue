<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="brandIndex">
      <img slot="icon" :src="index(messagecomputed)">
      首页
    </mt-tab-item>
    <!-- <mt-tab-item id="clueList">
      <img slot="icon" :src="messagecomputed=='clueList'?this.atabs[1][1]:this.atabs[1][0]">
      线索库
    </mt-tab-item> -->
    <!-- <mt-tab-item id="soldiershall">
      <img slot="icon" :src="messagecomputed=='soldiershall'?this.atabs[2][1]:this.atabs[2][0]">
      军人讲堂
    </mt-tab-item> -->

    <mt-tab-item id="brandMy">
      <img slot="icon" :src="messagecomputed=='brandMy'?this.atabs[3][1]:this.atabs[3][0]">
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
        url: '',
        atabs: [
          [require("@/assets/home1.png"), require("@/assets/home2.png")],
          [require("@/assets/ku1.png"), require("@/assets/ku2.png")],
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
          this.url=path.replace("/","");
          switch(this.url)
          {
            case 'brandIndex':
            case 'brandIndex/fTrial':
            case 'brandIndex/sTrial':
            case 'brandIndex/complete':
              this.message = 'brandIndex';      
          }
          return path.replace("/","");
        },
      }
    },

    watch: {
      message: function (val, oldVal) {
        console.log(oldVal+"->"+val)
        switch (val) {
          case 'brandIndex':
            if(this.$route.path!='/brandIndex'){
              this.$router.replace('/brandIndex');
            }
            break;
          /*case 'clueList':
            if(this.$route.path!='/clueList'){
              this.$router.replace('/clueList');
            }
            break;*/
          /*case 'soldiershall':
            if(this.$route.path!='/soldiershall'){
              this.$router.replace('/soldiershall');
            }
            break;*/
          case 'brandMy':
            if(this.$route.path!='/brandMy'){
              this.$router.replace('/brandMy');
            }
            break;
        }
      }
    },
    methods:{
      index(url) {   
        switch(this.url){
          case 'brandIndex':
          case 'brandIndex/fTrial':
          case 'brandIndex/sTrial':
          case 'brandIndex/complete':
            return this.atabs[0][1];
          default:      
            return this.atabs[0][0];
        }
      }
    },
  }
</script>


<template>
  <div class="page-tabbar">
    <div class="page-wrap">
	<!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="homepage">
            <div>
            <div> <mt-header title="首页"></mt-header></div>
            <div style="height:2rem" class="swipe">
            <mt-swipe :auto="4000">
            <mt-swipe-item class="swipe"><img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573932574287&di=9f1e1da20b07e4215d2b236bb71163d0&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20114%2F266%2Fw640h426%2F20181213%2Fadd0-hqackac0833859.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item class="swipe"><img class="img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3730631104,104388313&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            </div>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="business">
          <mt-cell title="标题文字"></mt-cell>
          <mt-cell title="标题文字" value="说明文字"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="classroom">
         <mt-cell title="标题文字"></mt-cell>
         <mt-cell title="标题文字" value="说明文字"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="my">
          <div class="page-part">
		   <!-- cell -->
           <mt-cell title="标题文字"></mt-cell>
           <mt-cell title="标题文字" value="说明文字"></mt-cell>
          </div>
          <router-link to="/">
		   <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
 
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="homepage">
        <img slot="icon" src="../assets/indexImg.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="business">
       <img slot="icon" src="../assets/indexImg.png">
        办事导航
      </mt-tab-item>
      <mt-tab-item id="classroom">
        <img slot="icon" src="../assets/indexImg.png">
        军人讲堂
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/indexImg.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
	import tabbar from '../components/tabbar'
	
	
    export default {
		components:{tabbar},
        data() {
            return {
				selected:"homepage"
            }
        },
		
        mounted() {
			

        },
        methods: {
			
        },
    };
</script>



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Tabbar,Navbar, TabItem } from 'mint-ui'   //Tabbar底部选项卡
import { Swipe, SwipeItem } from 'mint-ui';  //轮播
import { Field, Radio,Popup,Picker,DatetimePicker  } from 'mint-ui';
import { Cell } from 'mint-ui';     //列表
import { Header } from 'mint-ui';   //导航
import baseCss from './css/base.css'
import publicCss from './css/public.css'
import rem from './rem.js'
import afnNetWorking from './util/AFNetWorking.js'
import fun from './util/function.js'
import * as filters from './util/filters.js' // 引入过滤器
import api from "./config/api.js"
import $ from 'jquery'
import VueTouch from 'vue-touch'
import Router from 'vue-router'
// import { Uploader } from 'vant';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import './util/wordcloud/highcharts.js'
import './util/wordcloud/wordcloud.js'
import './util/wordcloud/exporting.js'
import './util/wordcloud/export-data.js'
import './util/wordcloud/accessibility.js'

import '../node_modules/echarts/map/js/world.js' // 引入世界地图



Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.api = api
Vue.prototype.$fun = fun
Vue.prototype.$afnNetWorking = afnNetWorking
Vue.use(MintUI)
Vue.use(baseCss)
Vue.use(publicCss)
Vue.use(rem)
// Vue.use(Uploader);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
// Vue.use(Navigation, { router })

Vue.config.productionTip = false

// import global from './util/global'
// Vue.prototype.global = global;
/* eslint-disable no-new */

Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
     threshold: 100 //手指左右滑动距离
}




new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth == true){  //需要登录权限进入的路由
  	var islogin = fun.isLogin();
    if(!islogin){  //取不到登录信息
    console.log(to.name)
    	sessionStorage.setItem('loginDirect',to.name)//用于登录成功后返回登录前的界面
      return  next("/");
    }else{  //取得到登录信息，进行下一步
      return next();
    }
  }else{  //不需要登录权限
    return next();
  }
})

setInterval(function() {
  let formData=fun.getUsernamePassword();
  //console.log(formData)
  if(formData){
    let formDataObj=JSON.parse(formData);
    afnNetWorking({
      url:api.userlogin,
      method:'post',
      data:formDataObj
    }).then(res=> {
         if(res.status==200){
               console.log('refresh cookie');
         }else{
               console.log('login:'+res.status);
         }
    }).catch(error=>{
           console.log('login:'+error);
    });
  }
}, 1000*1800);

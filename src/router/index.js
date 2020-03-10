import Vue from "vue";
import Router from "vue-router";
import homepage from "@/views/homepage"; //首页
import my from "@/views/my"; //我的
import index from "@/views/index";
import login from "@/views/login";
import register from "@/views/register";

import chartsMap from "@/views/chartsMap";
import chartsPie from "@/views/chartsPie";
import chartsRadar from "@/views/chartsRadar";
import chartsGuage from "@/views/chartsGuage";
import chartsWordCloud from "@/views/chartsWordCloud";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
      meta: {
        keepAlive: true //此组件需要被缓存
      }
    },
    {
      path: "/register",
      name: "register",
      component: register,
      meta: {
        keepAlive: true //此组件需要被缓存
      }
    },
    {
      path: "/",
      name: "homepage",
      component: homepage,
      meta: {
        keepAlive: true //此组件需要被缓存
      }
    },
    {
      path: "/my",
      name: "my",
      component: my,
      meta: {
        keepAlive: true //此组件需要被缓存
      }
    },

    

    {
      path: "/chartsPie", //设置-修改手机号
      name: "chartsPie",
      component: chartsPie,
    },
    {
      path: "/chartsRadar", //设置-修改手机号
      name: "chartsRadar",
      component: chartsRadar,
    },
    {
      path: "/chartsGuage", //设置-修改手机号
      name: "chartsGuage",
      component: chartsGuage,
    },
    {
      path: "/chartsWordCloud", //设置-修改手机号
      name: "chartsWordCloud",
      component: chartsWordCloud,
    },
    {
      path: "/chartsMap", //设置-修改手机号
      name: "chartsMap",
      component: chartsMap,
    },

  ]
});

/**
 *import chartsMap from "@/views/chartsMap";
  * import chartsPie from "@/views/chartsPie";
import chartsRadar from "@/views/chartsRadar";
import chartsGuage from "@/views/chartsGuage";
import chartsWordCloud from "@/views/chartsWordCloud";
 */

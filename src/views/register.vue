<template>
	  <div class="  ">
    		   <div class="zctit">新用户注册</div>
           <div class="zcjd"><img src="../assets/zc01.png"></div>

              <div class="loink">
                 <div class="loink1">
                 <img src="../assets/l01.png"> <input type="text" placeholder="请输入手机号" v-model="formData.userName" class="loininpt">
                 </div>
                 <div class="loink1">
                 <img src="../assets/l02.png"> <input type="text" placeholder="密码" v-model="formData.passWord" class="loininpt">
                 </div>
                 <div class="loink1">
                 <img src="../assets/l03.png"><div class="zcyz"> <input type="text" placeholder="验证码" class="loininpt1"> <input type="button" value="获取验证码" class="inpt02 fright"></div>
                 </div>
                 <div class="inpt01" @click="next()">下一步</div>

           </div>
    </div>

</template>
<script>
	import {FetchHttp} from "@/util/httpAjax";
	import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                formData:{
                        userName:"",
                        passWord:""
                      }
            };
        },
        mounted() {

        },
        methods: {
            next(){
                      	this.$router.push({
                          name: 'registernext',
                          params:this.formData
                        })
            }
        }
    };
</script>

<style scoped>
	@import url("../css/public.css");
   	@import url("../css/register.css");
</style>


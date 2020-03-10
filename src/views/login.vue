<template>
	  <div class="logdiv" ref="fullpage">
    		   <div class="loin"></div>
           <div class="loink">
              <div class="loink1">
              <img src="../assets/l01.png"> <input type="text" placeholder="请输入手机号" v-model="formData.username" class="loininpt">
              </div>
              <div class="loink1">
              <img src="../assets/l02.png"> <input  type="password" placeholder="密码" v-model="formData.password" class="loininpt">
              </div>
              <div class="inpt01" @click="login()">登录</div>
              <div class="loint">
                 <p>忘记密码?</p><p class="tright" @click="register()">注册</p>
              </div>
           </div>
    </div>

</template>
<script>
	import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                formData:{
                        username:"",
                        password:""
                      },
              clientHeight: '',
              count:"",//倒计时
            };
        },
        mounted() {
            // 获取浏览器可视区域高度
            this.clientHeight =   `${document.documentElement.clientHeight}`;
            window.onresize = function temp() {
              this.clientHeight = `${document.documentElement.clientHeight}`;
            };
        },
        beforeCreate(){
              var islogin = this.$fun.isLogin();
              if(islogin){
                this.$router.replace({name: 'homepage'})
              }else{
                  this.$fun.clearLoinInfo();
              }
        },
        watch: {
              // 如果 `clientHeight` 发生改变，这个函数就会运行
              clientHeight: function () {
                this.changeFixed(this.clientHeight)
              }
        },
        methods: {
              register(){
                    this.$router.push({
                      name: 'register'
                    })
              },
             login() {
               //console.log(this.$afnNetWorking)
               this.$afnNetWorking({
                 url:this.api.userlogin,
                 method:'post',
                 data:this.formData
               }).then(res=> {
                 //console.log(res.request.getResponseHeader("Set-Cookie"))
                    if(res.status==200){
                          console.log('2222222222'+res.data);
                          Toast({
                               message: '登录成功',
                               position: 'middle',
                               iconClass: 'icon icon-success',
                               duration: 2000
                         });
                         this.$fun.saveUsernamePassword(this.formData);
                         //跳转判断
                         var loginDirect =sessionStorage.getItem('loginDirect');
                         console.log(loginDirect)
                         if(loginDirect){
                           sessionStorage.removeItem(loginDirect);
                           this.$router.replace({ name: loginDirect}) ;
                         }else{
                           this.$router.replace({ name: 'homepage'}) ;
                         }
                    }else{
                          Toast({
                                 message: res.data.status,
                                 position: 'middle',
                                 duration: 2000
                           });
                    }
               }).catch(error=>{
								 alert('###########'+error+'##########')
                      console.log('xxx'+error);
               });

             },
            changeFixed(clientHeight){
             //动态修改样式
              this.$refs.fullpage.style.height = clientHeight+'px';
            }
        }
    };
</script>
<style scoped>
	 	@import url("../css/public.css");
   	@import url("../css/login.css");
</style>

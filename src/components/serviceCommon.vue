<template>
  <div>
  <div class="tyaz">
  			<div class="tyaz_tit">
  				<h1>服务事项</h1>
  				<h2 @click="appointment(1)">共{{totalService}}项服务<img src="../assets/z_l.gif"></h2>
  			</div>
  			<div class="tyaz_qh">
  				<h1 :class="{click: hot}" @click="clickTab(0)">热门服务</h1>
  				<h1 :class="{click: attention}" @click="clickTab(1)">我的关注</h1>
  				<h1 :class="{click: recently}" @click="clickTab(2)">最近浏览</h1>
  			</div>
  			<div class="tyaz_nr" :style="hotStyle">
  				<ul>
  					<li  v-for="(item,index) in serviceList" :key="item.id" @click="showCotent(item.id)">
  						<h1>{{item.serviceName}}</h1>
  					</li>
  				</ul>
  			</div>
  			<div class="tyaz_nr" :style="attentionStyle">
  				<ul>
  					<li @click="showCotent('71')">
  						<h1>退役军人残疾等级评定审核</h1>
  						<h2>2019-11-22</h2>
  					</li>
  					<li @click="showCotent('72')">
  						<h1>深圳市退役军人事务局选送节目参加移交广东省安置的军队离退休干部庆祝新中国成立70周年文艺汇演</h1>
  						<h2>2019-10-29</h2>
  					</li>
  					<li @click="showCotent('73')">
  						<h1>退役士兵离队前和返乡后需办理手续与离队时经费结算</h1>
  						<h2>2019-10-22</h2>
  					</li>
  				</ul>
  			</div>
  			<div class="tyaz_nr" :style="recentlyStyle">
  				<ul>
  					<li @click="showCotent('71')">
  						<h1>退役军人残疾等级评定审核</h1>
  						<h2>2019-11-22</h2>
  					</li>
  					<li @click="showCotent('72')">
  						<h1>深圳市退役军人事务局选送节目参加移交广东省安置的军队离退休干部庆祝新中国成立70周年文艺汇演</h1>
  						<h2>2019-10-29</h2>
  					</li>
  					<li @click="showCotent('73')">
  						<h1>习近平对深化国防和军队改革期间军队转业干部安置工作作出重要指示</h1>
  						<h2>2019-12-01</h2>
  					</li>
  				</ul>
  			</div>
  		</div>
  		<div class="tyaz">
  			<div class="tyaz_tit">
  				<h1>办事查询</h1>
  				<h2>共18项办事<img src="../assets/z_l.gif"></h2>
  			</div>
  			<div class="tyaz_pic">
  				<h1>
  					<p>3</p><img src="../assets/an01.png"><br />受理中
  				</h1>
  				<h1>
  					<p>12</p><img src="../assets/an02.png"><br />审核中
  				</h1>
  				<h1>
  					<p>1</p><img src="../assets/an03.png"><br />审批中
  				</h1>
  				<h1>
  					<p>5</p><img src="../assets/an04.png"><br />办结
  				</h1>
  				<h1>
  					<p>6</p><img src="../assets/an05.png"><br />已送达
  				</h1>
  			</div>
  		</div>
  		<hr />
  		<div class="tyaz">
  			<div class="tyaz_tit b_top20">
  				<h1>政策法规</h1>
  				<h2 @click="appointment(2,parseInt(titleTag)+1)">共{{totalPolicy}}项政策法规<img src="../assets/z_l.gif"></h2>
  			</div>
  			<div class="tyaz_nr">
  				<ul>
  					<li  v-for="(item,index) in policyList" :key="item.polId" @click="showPolicy(item.polId)">
  						<h1 class="w514">{{item.polTitle}}</h1>
  						<h2>{{item.pubdate.substring(0,10)}}</h2>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
    </div>
  </template>
<script>
  export default {
    data() {
      return {
        titleTag:this.tag,
        hot: true,
        attention: false,
        recently: false,
        hotStyle:'display:block',
        attentionStyle:'display:none',
        recentlyStyle:'display:none',
        serviceList:[],
        totalService:0,
        policyList:[],
        totalPolicy:0
      }
    },
    props: {
      tag:Number
    },
    mounted() {
      this.getServiceList();
      this.getPolicyList();
    },
    methods: {
      //预约
      appointment(tag,subTag) {
      	this.$router.push({
      		name:'serversList',
          query:{
          	tag:tag,
            subTag:subTag
          }
      	})
      },
    	//显示内容
    	showCotent(ids){
        console.log(ids)
    		this.$router.push({
    			name: 'hotDetail',
    			query:{
    				serviceId:ids
    			}
    		})
    	},
    	//政策法规
    	showPolicy(ids){
        console.log("ids="+ids);
    		this.$router.push({
    			name: 'activesDetail',
    			query:{
    				type:"policy",
    			  id:ids
    			}
    		})
    	},

      //获取服务事项
      getServiceList() {
      	this.$afnNetWorking({
      		url: this.api.getservices,
      		method: 'get',
      		params: {
      			newsType: '01'
      		}
      	}).then(res => {
      		if (res.data.code == '200') {
            this.totalService=res.data.data.total;
      			let items = res.data.data.list;
            for(let i=0;i<3&&i<items.length;i++){
                this.serviceList.push(items[i]);
            }
      		}
      	}).catch(error => {
      		console.log('xxx' + error);
      	})
      },
      //获取政策法规
      getPolicyList() {
      	this.$afnNetWorking({
      		url: this.api.getpolicys,
      		method: 'get',
      		params: {
      			classifyId: parseInt(this.titleTag)+1
      		}
      	}).then(res => {
      		if (res.data.code == '200') {
            //console.log(res.data);
            this.totalPolicy=res.data.data.total;
            let items = res.data.data.list;
            for(let i=0;i<3&&i<items.length;i++){
                this.policyList.push(items[i]);
            }
      		}
      	}).catch(error => {
      		console.log('xxx' + error);
      	})
      },
    	//tab切换
    	clickTab(tag) {
    		switch (tag) {
    			case 0:
    				{
    					this.hot = true,
    					this.attention = false,
    					this.recently = false,
    					this.hotStyle='display:block',
    					this.attentionStyle='display:none',
    					this.recentlyStyle='display:none'
    				}
    				break;
    			case 1:
    				{
    					this.hot = false,
    					this.attention = true,
    					this.recently = false,
    					this.hotStyle='display:none',
    					this.attentionStyle='display:block',
    					this.recentlyStyle='display:none'
    				}
    				break;
    			case 2:
    				{
    					this.hot = false,
    					this.attention = false,
    					this.recently = true,
    					this.hotStyle='display:none',
    					this.attentionStyle='display:none',
    					this.recentlyStyle='display:block'
    				}
    				break;
    			default:
    				break;
    		}
    	},
    }
  }
</script>
<style scoped>
	@import url("../plugin/public.css");
	@import url("../plugin/serviceCommon.css");

</style>

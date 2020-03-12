<template>
    <div class='chart com' id='chart_guage'>
      <div class="inner">
        <div class="top">
          <div class="year">
            <div class="item left">
              <span>2016</span>
              <i></i>
            </div>
            <div class="item">
              <span>2017</span>
            </div>
            <div class="item">
              <span>2018</span>
            </div>
            <div class="item">
              <span>2019</span>
            </div>
            <div class="item right">
              <span>2020</span>
            </div>
          </div>
          <div class="season_some">
            <div class="item left">
              <span>第1季度</span>
              <i></i>
            </div>
            <div class="item">
              <span>第2季度</span>
              <i></i>
            </div>
            <div class="item">
              <span>第3季度</span>
              <i></i>
            </div>
            <div class="item right">
              <span>第4季度</span>
              <i></i>
            </div>
            <div class="item1">
              <span>地区</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="panel">
            <div class="mid"><span>$168万</span></div>
            <div class="abs"><div>销售总额</div></div>
          </div>
          <div class="panel">
            <div class="mid"><span>0.36万</span></div>
            <div class="abs"><div>销量总数</div></div>
          </div>
          <div class="panel">
            <div class="mid"><span>$152万</span></div>
            <div class="abs"><div>利润总额</div></div>
          </div>
          <div class="panel">
            <div class="mid"><span>$466</span></div>
            <div class="abs"><div>平均价格</div></div>
          </div>
          <div class="panel">
            <div class="mid"><span>0.25</span></div>
            <div class="abs"><div>平均折扣</div></div>
          </div>
          <div class="panel">
            <div class="mid"><span>10%</span></div>
            <div class="abs"><div>利润率</div></div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      count: "",
      dataList:[

               ]
    };
  },
  mounted() {

  },

  beforeCreate() {},

  watch: {},

  methods: {
    getData(){
      let jsonObj={}
      let nameString=""
      let i=0,ft=jsonObj.features
      for(i=0;i<ft.length;i++){
        nameString+="{name:\""+ft[i].properties.name+"\",value:"+Math.ceil(10000*Math.random())+"}"+",\r\n"
      }
      console.log(nameString)
    },


  }
};
</script>

<style scoped>
@import url("../css/homepage.css");
</style>

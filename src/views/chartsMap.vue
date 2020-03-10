<template>
    <div class='chart' id='chart'></div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
  },
  components: {},
  data() {
    return {
      count: "",
      dataList:[
               {name:"Somalia",value:3892},
               {name:"Liechtenstein",value:985},
               {name:"Morocco",value:4333},
               {name:"W. Sahara",value:3090},
               {name:"Serbia",value:9300},
               {name:"Afghanistan",value:1759},
               {name:"Angola",value:3741},
               {name:"Albania",value:3086},
               {name:"Aland",value:613},
               {name:"Andorra",value:2308},
               {name:"United Arab Emirates",value:5877},
               {name:"Argentina",value:6153},
               {name:"Armenia",value:1116},
               {name:"American Samoa",value:8388},
               {name:"Fr. S. Antarctic Lands",value:3437},
               {name:"Antigua and Barb.",value:3597},
               {name:"Australia",value:8140},
               {name:"Austria",value:5902},
               {name:"Azerbaijan",value:7368},
               {name:"Burundi",value:9091},
               {name:"Belgium",value:500},
               {name:"Benin",value:8864},
               {name:"Burkina Faso",value:8065},
               {name:"Bangladesh",value:9648},
               {name:"Bulgaria",value:1660},
               {name:"Bahrain",value:3294},
               {name:"Bahamas",value:9471},
               {name:"Bosnia and Herz.",value:1130},
               {name:"Belarus",value:7526},
               {name:"Belize",value:6320},
               {name:"Bermuda",value:6171},
               {name:"Bolivia",value:4357},
               {name:"Brazil",value:5071},
               {name:"Barbados",value:1413},
               {name:"Brunei",value:2611},
               {name:"Bhutan",value:7326},
               {name:"Botswana",value:3468},
               {name:"Central African Rep.",value:2484},
               {name:"Canada",value:2854},
               {name:"Switzerland",value:1314},
               {name:"Chile",value:7863},
               {name:"China",value:7420},
               {name:"Côte d'Ivoire",value:2625},
               {name:"Cameroon",value:3396},
               {name:"Dem. Rep. Congo",value:2953},
               {name:"Congo",value:9950},
               {name:"Colombia",value:5271},
               {name:"Comoros",value:3917},
               {name:"Cape Verde",value:9424},
               {name:"Costa Rica",value:1573},
               {name:"Cuba",value:8366},
               {name:"Curaçao",value:3784},
               {name:"Cayman Is.",value:8060},
               {name:"N. Cyprus",value:210},
               {name:"Cyprus",value:1376},
               {name:"Czech Rep.",value:6906},
               {name:"Germany",value:2191},
               {name:"Djibouti",value:5199},
               {name:"Dominica",value:7553},
               {name:"Denmark",value:8513},
               {name:"Dominican Rep.",value:5497},
               {name:"Algeria",value:567},
               {name:"Ecuador",value:593},
               {name:"Egypt",value:341},
               {name:"Eritrea",value:6687},
               {name:"Spain",value:1096},
               {name:"Estonia",value:6370},
               {name:"Ethiopia",value:3305},
               {name:"Finland",value:2273},
               {name:"Fiji",value:5997},
               {name:"Falkland Is.",value:9707},
               {name:"France",value:9369},
               {name:"Faeroe Is.",value:4220},
               {name:"Micronesia",value:1065},
               {name:"Gabon",value:2615},
               {name:"United Kingdom",value:9271},
               {name:"Georgia",value:8226},
               {name:"Ghana",value:2789},
               {name:"Guinea",value:3855},
               {name:"Gambia",value:8733},
               {name:"Guinea-Bissau",value:2757},
               {name:"Eq. Guinea",value:1598},
               {name:"Greece",value:7613},
               {name:"Grenada",value:6555},
               {name:"Greenland",value:4415},
               {name:"Guatemala",value:5538},
               {name:"Guam",value:6014},
               {name:"Guyana",value:2571},
               {name:"Heard I. and McDonald Is.",value:8748},
               {name:"Honduras",value:5513},
               {name:"Croatia",value:1171},
               {name:"Haiti",value:9961},
               {name:"Hungary",value:6716},
               {name:"Indonesia",value:3669},
               {name:"Isle of Man",value:6989},
               {name:"India",value:8811},
               {name:"Br. Indian Ocean Ter.",value:909},
               {name:"Ireland",value:7074},
               {name:"Iran",value:9633},
               {name:"Iraq",value:1203},
               {name:"Iceland",value:545},
               {name:"Israel",value:8739},
               {name:"Italy",value:809},
               {name:"Jamaica",value:8655},
               {name:"Jersey",value:8064},
               {name:"Jordan",value:3362},
               {name:"Japan",value:8121},
               {name:"Siachen Glacier",value:9333},
               {name:"Kazakhstan",value:7786},
               {name:"Kenya",value:3837},
               {name:"Kyrgyzstan",value:5285},
               {name:"Cambodia",value:8316},
               {name:"Kiribati",value:436},
               {name:"Korea",value:6989},
               {name:"Kuwait",value:4009},
               {name:"Lao PDR",value:4393},
               {name:"Lebanon",value:571},
               {name:"Liberia",value:1096},
               {name:"Libya",value:668},
               {name:"Saint Lucia",value:5519},
               {name:"Sri Lanka",value:2312},
               {name:"Lesotho",value:2297},
               {name:"Lithuania",value:921},
               {name:"Luxembourg",value:3886},
               {name:"Latvia",value:4289},
               {name:"Moldova",value:5471},
               {name:"Madagascar",value:1031},
               {name:"Mexico",value:6747},
               {name:"Macedonia",value:9489},
               {name:"Mali",value:6157},
               {name:"Malta",value:6873},
               {name:"Myanmar",value:666},
               {name:"Montenegro",value:7126},
               {name:"Mongolia",value:8039},
               {name:"N. Mariana Is.",value:1745},
               {name:"Mozambique",value:3504},
               {name:"Mauritania",value:3766},
               {name:"Montserrat",value:7435},
               {name:"Mauritius",value:2265},
               {name:"Malawi",value:6027},
               {name:"Malaysia",value:4270},
               {name:"Namibia",value:435},
               {name:"New Caledonia",value:7772},
               {name:"Niger",value:2794},
               {name:"Nigeria",value:6833},
               {name:"Nicaragua",value:3295},
               {name:"Niue",value:9560},
               {name:"Netherlands",value:9282},
               {name:"Norway",value:3522},
               {name:"Nepal",value:6115},
               {name:"New Zealand",value:7626},
               {name:"Oman",value:2349},
               {name:"Pakistan",value:9035},
               {name:"Panama",value:3789},
               {name:"Peru",value:6850},
               {name:"Philippines",value:9125},
               {name:"Palau",value:7318},
               {name:"Papua New Guinea",value:9552},
               {name:"Poland",value:6469},
               {name:"Puerto Rico",value:9500},
               {name:"Dem. Rep. Korea",value:1285},
               {name:"Portugal",value:4283},
               {name:"Paraguay",value:6587},
               {name:"Palestine",value:7593},
               {name:"Fr. Polynesia",value:9777},
               {name:"Qatar",value:506},
               {name:"Romania",value:3914},
               {name:"Russia",value:4620},
               {name:"Rwanda",value:752},
               {name:"Saudi Arabia",value:2330},
               {name:"Sudan",value:5292},
               {name:"S. Sudan",value:7362},
               {name:"Senegal",value:1263},
               {name:"Singapore",value:7404},
               {name:"S. Geo. and S. Sandw. Is.",value:2598},
               {name:"Saint Helena",value:9639},
               {name:"Solomon Is.",value:2466},
               {name:"Sierra Leone",value:3877},
               {name:"El Salvador",value:4312},
               {name:"St. Pierre and Miquelon",value:5639},
               {name:"São Tomé and Principe",value:3733},
               {name:"Suriname",value:6699},
               {name:"Slovakia",value:1621},
               {name:"Slovenia",value:5235},
               {name:"Sweden",value:4455},
               {name:"Swaziland",value:6224},
               {name:"Seychelles",value:8596},
               {name:"Syria",value:6709},
               {name:"Turks and Caicos Is.",value:3959},
               {name:"Chad",value:7655},
               {name:"Togo",value:3334},
               {name:"Thailand",value:7368},
               {name:"Tajikistan",value:6301},
               {name:"Turkmenistan",value:9664},
               {name:"Timor-Leste",value:8437},
               {name:"Tonga",value:9335},
               {name:"Trinidad and Tobago",value:8426},
               {name:"Tunisia",value:8613},
               {name:"Turkey",value:6253},
               {name:"Tanzania",value:8913},
               {name:"Uganda",value:6010},
               {name:"Ukraine",value:7329},
               {name:"Uruguay",value:4845},
               {name:"United States",value:7052},
               {name:"Uzbekistan",value:7858},
               {name:"St. Vin. and Gren.",value:8359},
               {name:"Venezuela",value:2392},
               {name:"U.S. Virgin Is.",value:4117},
               {name:"Vietnam",value:1193},
               {name:"Vanuatu",value:6227},
               {name:"Samoa",value:7737},
               {name:"Yemen",value:882},
               {name:"South Africa",value:4398},
               {name:"Zambia",value:5653},
               {name:"Zimbabwe",value:4613},
               {name:"",value:7837},
               {name:"",value:6414}
               ]
    };
  },
  mounted() {
     this.getWorld();
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
    getWorld () {
          var that = this
          that.drawChart()
          /*axios.get('../static/world.json').then(function (res) {
          	let namemap = res.data.namemap
            let dataArr = res.data.dataArr
            that.drawChart(namemap, dataArr)
          })*/
          
        },
        drawChart (name, data) {
          let thisVue=this
          // 基于准备好的dom，初始化echarts实例
          let chart = this.$echarts.init(document.getElementById('chart'))
          // 监听屏幕变化自动缩放图表
          window.addEventListener('resize', function () {
            chart.resize()
          })
          // 绘制图表
          chart.setOption({
            // 图表主标题
            title: {
              text: '世界地图', // 主标题文本，支持使用 \n 换行
              top: 20, // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
              left: 'center', // 值: 'left', 'center', 'right' 同上
              textStyle: { // 文本样式
                fontSize: 24,
                fontWeight: 600,
                color: '#fff'
              }
            },
            // 提示框组件
            tooltip: {
              trigger: 'item', // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
              // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
              // 使用函数模板  传入的数据值 -> value: number | Array
              formatter: function (val) {
                return val.data.name + ': ' + val.data.value
              }
            },
            // 视觉映射组件
            visualMap: {
              type: 'continuous', // continuous 类型为连续型  piecewise 类型为分段型
              show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
              // 指定 visualMapContinuous 组件的允许的最小/大值。'min'/'max' 必须用户指定。
              // [visualMap.min, visualMax.max] 形成了视觉映射的『定义域』
              min: 0,
              max: 10000,
              text: ['High', 'Low'],
              // 文本样式
              textStyle: {
                fontSize: 14,
                color: '#fff'
              },
              realtime: false, // 拖拽时，是否实时更新
              calculable: true, // 是否显示拖拽用的手柄
              // 定义 在选中范围中 的视觉元素
              inRange: {
                color: ['#ffffff', '#FFFFCE', '#FFF0AC', '#FFD1A4', '#FFAF60', '#FF8000','#D94600','#A23400','#642100'] // 图元的颜色
              }
            },
            series: [
              {
                type: 'map', // 类型
                // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
                name: '世界地图',
                mapType: 'world', // 地图类型
                // 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
                roam: true,
                // 图形上的文本标签
                label: {
                  show: false // 是否显示对应地名
                },
                // 地图区域的多边形 图形样式
                itemStyle: {
                  areaColor: '#7B68EE', // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用
                  borderWidth: 0.5, // 描边线宽 为 0 时无描边
                  borderColor: '#000', // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                  borderType: 'solid' // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
                },
                // 高亮状态下的多边形和标签样式
                emphasis: {
                  label: {
                    show: true, // 是否显示标签
                    color: '#fff' // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                  },
                  itemStyle: {
                    areaColor: '#FF6347' // 地图区域的颜色
                  }
                },
                // 自定义地区的名称映射
                name: '信息量',
                type: 'map',
                label: {
                          show: false
                      },
                // 地图系列中的数据内容数组 数组项可以为单个数值
                data: thisVue.dataList,
                nameMap:{}
              }
            ]
          })
          // 定时显示提示框和高亮效果
          let index = -1,len=this.dataList.length
          setInterval(function () {
            // 隐藏提示框
            chart.dispatchAction({
              type: 'hideTip',
              seriesIndex: 0,
              dataIndex: index
            })
            // 显示提示框
            chart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: index + 1
            })
            // 取消高亮指定的数据图形
            chart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: index
            })
            // 高亮指定的数据图形
            chart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: index + 1
            })
            index++
            if (index > len - 1) {
              index = -1
            }
          }, 2000)

        }

  }
};
</script>

<style scoped>
</style>

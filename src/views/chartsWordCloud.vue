<template>
    <figure class="highcharts-figure">
        <div id="container"></div>

    </figure>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      count: ""
    };
  },
  mounted() {
     this.getWorld();
  },

  beforeCreate() {},

  watch: {},

  methods: {

    getWorld () {
          var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
          var lines = text.split(/[,\. ]+/g),
              data = Highcharts.reduce(lines, function (arr, word) {
                  var obj = Highcharts.find(arr, function (obj) {
                      return obj.name === word;
                  });
                  if (obj) {
                      obj.weight += 1;
                  } else {
                      obj = {
                          name: word,
                          weight: 1
                      };
                      arr.push(obj);
                  }
                  return arr;
              }, []);

          Highcharts.chart('container', {
              accessibility: {
                  screenReaderSection: {
                      beforeChartFormat: '<h5>{chartTitle}</h5>' +
                          '<div>{chartSubtitle}</div>' +
                          '<div>{chartLongdesc}</div>' +
                          '<div>{viewTableButton}</div>'
                  }
              },
              series: [{
                  type: 'wordcloud',
                  data: data,
                  name: 'Occurrences'
              }],
              title: {
                  text: 'Wordcloud of Lorem Ipsum'
              }
          });

          $("text.highcharts-credits").hide();
        }

  }
};
</script>

<style scoped>
@import url("../css/homepage.css");

.highcharts-figure, .highcharts-data-table table {
    min-width: 320px;
    max-width: 1522px;
     margin: 50px 50px 0;
     border: 1px solid #eeeeee;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 500px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}


</style>

<template>
  <div id="myChart" class="city-map" ref="chart"></div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      var echarts = require('echarts')
      // var myChart = echarts.init(document.getElementById('main'))
      var myChart = echarts.init(this.$refs.chart)
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>

<style lang='less' scoped>
.city-map {
  width: 800px;
  height: 500px;
}
</style>

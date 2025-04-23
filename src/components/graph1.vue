<template lang="">
  <div class="chart-container">
    <div ref="chart" style="width: 100%; height: 100%;"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import graphData from '../data/graph1.json'

const chart = ref(null)

onMounted(() => {
  const myChart = echarts.init(chart.value)
  
  const option = {
    title: {
      // text: '水利工程基本信息'
    },
    tooltip: {},
    legend: {
      data: ['数据'],
      right: "right"
    },
    xAxis: {
      type: 'category',
      data: graphData.xAxis.data,
    },
    yAxis: {
      type: 'value',
      data: graphData.yAxis.data,
    },
    series: [
      {
        name: '数据',
        type: 'bar',
        data: graphData.series[0].data,
        itemStyle: {
          opacity: 1
        }
      }
    ]
  }
  
  myChart.setOption(option)
  
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
</script>
<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>

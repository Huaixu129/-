<template>
    <div ref="chartContainer" style="width: 900px; height: 500px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'RiverAreaChart',
    mounted() {
      const chartDom = this.$refs.chartContainer;
      const myChart = echarts.init(chartDom);
  
      const option = {
        title: {
          text: '中国主要流域面积柱状图',
          left: 'center',
          padding: [20, 0, 10, 0]
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          data: ['流域面积（万km²）'],
          top: '10%'
        },
        xAxis: {
          data: [
            '长江流域', '黄河流域', '珠江流域', '淮河流域',
            '海河流域', '松辽流域', '东南诸河流域',
            '西南诸河流域', '内陆河流域', '其他（小流域）'
          ],
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
          name: '面积（万km²）'
        },
        series: [
          {
            name: '流域面积（万km²）',
            type: 'bar',
            data: [
              { value: 180, itemStyle: { color: '#A0C0C0' } },
              { value: 79.5, itemStyle: { color: '#A07040' } },
              { value: 45.4, itemStyle: { color: '#F0D080' } },
              { value: 27, itemStyle: { color: '#608060' } },
              { value: 31.8, itemStyle: { color: '#A0C0C0' } },
              { value: 124, itemStyle: { color: '#A07040' } },
              { value: 24, itemStyle: { color: '#F0D080' } },
              { value: 85, itemStyle: { color: '#608060' } },
              { value: 337, itemStyle: { color: '#A0C0C0' } },
              { value: 20.0, itemStyle: { color: '#A07040' } }
            ]
          }
        ]
      };
  
      myChart.setOption(option);
      // 监听窗口变化，自动适配大小
      window.addEventListener('resize', () => myChart.resize());
    }
  };
  </script>
  
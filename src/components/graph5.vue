<template>
  <div class="chart-wrapper">
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart = null;

onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value, null, {
      renderer: 'canvas',
      useDirtyRect: true
    });

    const colorPalette = ['#A0C0C0', '#A07040', '#F0D080', '#608060'];

    const option = {
      title: {
        text: '各省份水利工程总数TOP10',
        left: 'center',
        top: '5%',
        textStyle: {
          fontSize: 14,
          color: '#333'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params) {
          // 获取第一个数据项的名称和值
          var name = params[0].name;
          var value = params[0].value;
          // 格式化为"万"单位，保留1位小数
          var formattedValue = (value / 10000).toFixed(1);
          return name + ': ' + formattedValue + ' 万';
        }
      },
      grid: {
        left: '1%',
        right: '20%',
        top: '15%',
        bottom: '6%',
        containLabel: true
      },
      yAxis: {
        type: 'category',
        data: ['湖南', '广东', '江西', '四川', '湖北', '安徽', '云南', '广西', '河南', '浙江'],
        axisLabel: {
          fontSize: 12
        }
      },
      xAxis: {
        type: 'value',
        name: '总数（万）',
        nameLocation: 'end',
        nameGap: 15,
        nameTextStyle: {
          padding: [5, 0, 0, 0],
          align: 'right'
        },
        axisLabel: {
          fontSize: 12,
          formatter: function(value) {
            return (value / 10000).toFixed(0);
          }
        },
        splitLine: {
          show: true
        }
      },
      series: [{
        name: '水利工程总数',
        type: 'bar',
        data: [503200, 436600, 409000, 386000, 356600, 345800, 326300, 319200, 297100, 282800],
        itemStyle: {
          color: function (params) {
            return colorPalette[params.dataIndex % colorPalette.length];
          }
        },
        label: {
          show: true,
          position: 'right',
          fontSize: 12,
          formatter: function(params) {
            // 格式化为"万"单位，保留1位小数
            return (params.value / 10000).toFixed(1) + '万';
          }
        },
        barWidth: '60%',  // 增加柱子宽度，使图表显得更大
        barCategoryGap: '10%'  // 减小类目间距，使图表更紧凑
      }],
      dataZoom: [{
        type: 'slider',
        show: true,
        yAxisIndex: 0,
        filterMode: 'filter',
        width: 15,
        right: 15,
        start: 0,
        end: 70,
        bottom: '12%'
      }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
  }
});

onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', myChart.resize);
    myChart.dispose();
  }
});
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;  /* 从左侧开始对齐 */
  align-items: flex-end;        /* 向底部对齐 */
  overflow: visible;  /* 允许内容溢出容器 */
}

.chart-container {
  width: 100%;
  height: 100%;
  overflow: visible; /* 允许内容溢出容器 */
}
</style>

<template lang="">
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>
<script setup>
import mapJson from "../assets/map/china.json";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import locIcon from '../assets/img/loc.svg';
import router from '../router';

const chartContainer = ref(null);

onMounted(() => {
  echarts.registerMap("china", mapJson);
  renderChart();
});

const renderChart = () => {
  const chart = echarts.init(chartContainer.value);

  const options = {
    geo: {
      map: "china",
      roam: true,
      zoom: 1,
      aspectScale: 0.75,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      scaleLimit: {
        min: 1,
        max: 10
      },
      itemStyle: {
        borderColor: "rgba(34, 147, 136, 0.4)",
        borderWidth: 1.5,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
        areaColor: "rgba(232, 218, 172, 1)",
      },
      emphasis: {
        itemStyle: {
          areaColor: "#e0c58f",
          shadowColor: "#333",
          shadowBlur: 20,
        },
        label: {
          show: true,
          color: "#fff",
          fontWeight: "bold",
        },
      },
      label: {
        show: true,
        color: "#3a3d49",
        fontSize: 10,
      },
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: `image://${locIcon}`,
        symbolSize: 20,
        data: [
          {name: '北京', value: [116.405285, 39.904989]},
          {name: '上海', value: [121.472644, 31.231706]},
        ],
        emphasis: {
          itemStyle: {
            color: '#fff'
          }
        }
      }
    ]
  };

  chart.setOption(options);
  chart.on('click', 'series.scatter', (params) => {
    router.push({ path: '/detail', query: { province: params.name } });
  });

  // 自适应
  window.addEventListener("resize", () => {
    chart.resize();
  });
};
</script>
<style lang=""></style>

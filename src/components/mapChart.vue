<template lang="">
  <div ref="chartContainer" style="width: 80%; height: 80%; margin-left: 7%"></div>
</template>
<script setup>
import mapJson from "../assets/map/china.json";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

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
      itemStyle: {
        borderColor: "rgba(34, 147, 136, 1)",
        borderWidth: 1.5,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowBlur: 10,
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "#a2d4ab", // 淡绿色中心
            },
            {
              offset: 1,
              color: "#218b82", // 青绿色外圈
            },
          ],
          global: false,
        },
      },
      emphasis: {
        itemStyle: {
          areaColor: "#54b8a1",
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
        show: false,
      },
    },
    series: [
      {
        type: "map",
        map: "china",
        roam: false,
        zoom: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        label: {
          show: true,
          color: "#e8f5e9",
          fontSize: 12,
        },
        itemStyle: {
          borderColor: "#136e67",
          areaColor: "transparent",
        },
        emphasis: {
          itemStyle: {
            areaColor: "#56c6a9",
          },
          label: {
            color: "#fff",
          },
        },
      },
    ],
  };

  chart.setOption(options);

  // 自适应
  window.addEventListener("resize", () => {
    chart.resize();
  });
};
</script>
<style lang=""></style>

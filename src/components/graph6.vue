<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

const chartContainer = ref(null);
let myChart = null;

onMounted(() => {
  if (chartContainer.value) {
    myChart = echarts.init(chartContainer.value);

    const option = {
      title: {
        text: "中国主要流域面积柱状图",
        left: "center",
        textStyle: {
          fontSize: 14,
          color: "#333",
          fontFamily: "点书小隶体, sans-serif"
        },
        padding: [10, 0, 10, 0],
      },
      tooltip: {
        trigger: "item",
        textStyle: {
          fontFamily: "点书小隶体, sans-serif"
        }
      },
      legend: {
        data: ["流域面积（万km²）"],
        top: "15%",
        left: "center",
        textStyle: {
          fontFamily: "点书小隶体, sans-serif"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%",
        top: "25%",
        containLabel: true,
      },
      xAxis: {
        name: "流域",
        nameTextStyle: {
          fontFamily: "点书小隶体, sans-serif"
        },
        data: [
          "长江",
          "黄河",
          "珠江",
          "淮河",
          "海河",
          "松辽",
          "东南诸河",
          "西南诸河",
          "内陆河",
          "其他",
        ],
        axisLabel: {
          rotate: 45,
          fontSize: 11,
          interval: 0,
          fontFamily: "点书小隶体, sans-serif"
        },
      },
      yAxis: {
        name: "面积",
        nameTextStyle: {
          padding: [0, 0, 0, 5],
          fontSize: 12,
          fontFamily: "点书小隶体, sans-serif"
        },
        axisLabel: {
          fontSize: 11,
          fontFamily: "点书小隶体, sans-serif"
        }
      },
      series: [
        {
          name: "流域面积（万km²）",
          type: "bar",
          data: [
            { value: 180, itemStyle: { color: "#A0C0C0" } },
            { value: 79.5, itemStyle: { color: "#A07040" } },
            { value: 45.4, itemStyle: { color: "#F0D080" } },
            { value: 27, itemStyle: { color: "#608060" } },
            { value: 31.8, itemStyle: { color: "#A0C0C0" } },
            { value: 124, itemStyle: { color: "#A07040" } },
            { value: 24, itemStyle: { color: "#F0D080" } },
            { value: 85, itemStyle: { color: "#608060" } },
            { value: 337, itemStyle: { color: "#A0C0C0" } },
            { value: 20.0, itemStyle: { color: "#A07040" } },
          ],
        },
      ],
    };

    myChart.setOption(option);

    // 监听窗口变化，自动适配大小
    const resizeHandler = () => myChart.resize();
    window.addEventListener("resize", resizeHandler);

    // 保存事件处理器以便在组件卸载时移除
    chartContainer.value._resizeHandler = resizeHandler;
  }
});

onBeforeUnmount(() => {
  if (myChart) {
    // 移除事件监听器
    if (chartContainer.value && chartContainer.value._resizeHandler) {
      window.removeEventListener("resize", chartContainer.value._resizeHandler);
    }
    myChart.dispose();
    myChart = null;
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

<template>
  <div ref="chartRef" style="width: 100%; height: 100%"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

const chartRef = ref(null);
let myChart = null;

onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value);
    const option = {
      color: ["#58815C", "#6B9B7F", "#F8CF72", "#DECB8D", "#A2B49D"],
      title: {
        text: "中国水利工程分类统计",
        subtext: "数据来源：《中国科学技术史 水利卷》",
        left: "center",
        top: 10,
        padding: [1, 0, 3, 0], // 上右下左
        textStyle: {
          fontSize: 14,
          fontFamily: "点书小隶体, sans-serif",
        },
        subtextStyle: {
          fontSize: 10,
          fontFamily: "点书小隶体, sans-serif",
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params.name}：${params.value}%<br/>范围：${params.data.d}% ~ ${params.data.e}%`;
        },
        position: function (point, params, dom, rect, size) {
          // 获取容器的宽度和高度
          const containerWidth = size.viewSize[0];
          const containerHeight = size.viewSize[1];

          // 计算 tooltip 的默认位置
          let x = point[0] - dom.offsetWidth - 10;
          let y = point[1] - dom.offsetHeight / 2;

          // 确保 tooltip 不会超出容器的左边界
          if (x < 0) {
            x = point[0] + 10;
          }

          // 确保 tooltip 不会超出容器的右边界
          if (x + dom.offsetWidth > containerWidth) {
            x = containerWidth - dom.offsetWidth - 10;
          }

          // 确保 tooltip 不会超出容器的上边界
          if (y < 0) {
            y = 10;
          }

          // 确保 tooltip 不会超出容器的下边界
          if (y + dom.offsetHeight > containerHeight) {
            y = containerHeight - dom.offsetHeight - 10;
          }

          return [x, y];
        },
        textStyle: {
          fontFamily: "点书小隶体, sans-serif",
        }
      },
      legend: {
        orient: "vertical",
        left: "left",
        top: "bottom",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
          fontFamily: "点书小隶体, sans-serif",
        },
      },
      series: [
        {
          name: "水利工程类型",
          type: "pie",
          radius: ["45%", "75%"], // 略微放大
          center: ["60%", "55%"], // 向右偏移以给图例留空间
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: [
            { name: "灌溉工程", value: 65, d: 60, e: 70 },
            { name: "防洪/堤防", value: 17.5, d: 15, e: 20 },
            { name: "漕运和运河工程", value: 12.5, d: 10, e: 15 },
            { name: "城市供排水工程", value: 7.5, d: 5, e: 10 },
            { name: "其他（水力机械、盐运工程等）", value: 2.5, d: 0, e: 5 },
          ],
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", myChart.resize);
  }
});

onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener("resize", myChart.resize);
    myChart.dispose();
  }
});
</script>

<style>
.chart-container {
  font-family: "点书小隶体", sans-serif;
}
</style>

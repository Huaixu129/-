<template lang="">
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>
<script setup>
import mapJson from "../assets/map/china.json";
import { onMounted, ref, inject, watch } from "vue";
import * as echarts from "echarts";
import locIcon from '../assets/img/loc.svg';
import router from '../router';
import waterProjects from '../data/water_projects_with_dynasty.json';

const chartContainer = ref(null);
const chart = ref(null);
// 注入当前朝代状态
const currentDynasty = inject('currentDynasty');
// 注入悬浮项目状态
const hoveredProject = inject('hoveredProject');

onMounted(() => {
  echarts.registerMap("china", mapJson);
  chart.value = echarts.init(chartContainer.value);
  renderChart();
  
  // 自适应
  window.addEventListener("resize", () => {
    chart.value.resize();
  });
});

// 监听朝代变化并重新渲染地图
watch(currentDynasty, () => {
  renderChart();
});

const renderChart = () => {
  if (!chart.value) return;

  // 筛选当前朝代的水利工程
  const filteredProjects = waterProjects.filter(project => 
    project.dynasty === currentDynasty.value
  );
  
  // 格式化数据为地图所需格式
  const mapData = filteredProjects.map(project => ({
    name: project.name,
    value: project.coordinates,
    province: project.province,
    dynasty: project.dynasty
  }));

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
        data: mapData,
        emphasis: {
          itemStyle: {
            color: '#fff'
          }
        }
      }
    ]
  };

  chart.value.setOption(options);
  chart.value.on('click', 'series.scatter', (params) => {
    console.log('点击参数:', params);
    if (params && params.name) {
      router.push({ path: '/detail', query: { province: params.name } });
    } else {
      console.error('无效的点击参数:', params);
    }
  });
  
  // 添加鼠标悬浮事件
  chart.value.on('mouseover', 'series.scatter', (params) => {
    if (params && params.name) {
      hoveredProject.value = params.name;
    }
  });
  
  // 添加鼠标离开事件
  chart.value.on('mouseout', 'series.scatter', () => {
    hoveredProject.value = null;
  });
};
</script>
<style lang=""></style>

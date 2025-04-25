<template lang="">
  <div ref="chartContainer" style="width: 100%; height: 100%; position: relative;">
    <div 
      v-show="showTooltip" 
      class="custom-tooltip" 
      :style="{ left: tooltipPosition.x + 'px', top: tooltipPosition.y + 'px' }"
    >
      <div class="tooltip-title">{{ tooltipInfo.name }}</div>
      <div class="tooltip-content">朝代：{{ tooltipInfo.dynasty }}</div>
    </div>
  </div>
</template>
<script setup>
import mapJson from "../assets/map/china.json";
import { onMounted, ref, inject, watch, reactive } from "vue";
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

// 自定义tooltip状态
const showTooltip = ref(false);
const tooltipPosition = reactive({ x: 0, y: 0 });
const tooltipInfo = reactive({ name: '', dynasty: '' });

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
    tooltip: {
      show: false  // 禁用内置tooltip
    },
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
      tooltip: {
        show: false
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: `image://${locIcon}`,
        symbolSize: 20,
        data: mapData,
        emphasis: {
          scale: true,
          scaleSize: 25,
          itemStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          show: false
        }
      }
    ]
  };

  chart.value.setOption(options);
  
  // 点击事件
  chart.value.on('click', 'series.scatter', (params) => {
    console.log('点击参数:', params);
    if (params && params.name) {
      router.push({ path: '/detail', query: { province: params.name } });
    } else {
      console.error('无效的点击参数:', params);
    }
  });

  // 添加鼠标悬浮事件 - 使用自定义tooltip
  chart.value.on('mouseover', 'series.scatter', (params) => {
    if (params && params.name) {
      hoveredProject.value = params.name;
      
      // 显示自定义tooltip
      tooltipInfo.name = params.name;
      tooltipInfo.dynasty = params.data.dynasty;
      tooltipPosition.x = params.event.offsetX + 15;
      tooltipPosition.y = params.event.offsetY + 15;
      showTooltip.value = true;
      
      console.log("显示tooltip:", params.name, tooltipPosition.x, tooltipPosition.y);
    }
  });
  
  // 添加鼠标移动事件 - 更新tooltip位置
  chart.value.on('mousemove', 'series.scatter', (params) => {
    if (showTooltip.value) {
      tooltipPosition.x = params.event.offsetX + 15;
      tooltipPosition.y = params.event.offsetY + 15;
    }
  });
  
  // 添加鼠标离开事件
  chart.value.on('mouseout', 'series.scatter', () => {
    hoveredProject.value = null;
    showTooltip.value = false;
  });
  
  // 添加全局鼠标移动监听，确保在非标点区域鼠标移动时隐藏tooltip
  chart.value.getZr().on('mousemove', (e) => {
    // 获取鼠标下是否有图表元素
    const findResult = chart.value.containPixel('series', [e.offsetX, e.offsetY]);
    if (!findResult) {
      showTooltip.value = false;
    }
  });
};
</script>
<style>
.custom-tooltip {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 4px 8px;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  min-width: 60px;
  text-align: center;
}

.tooltip-title {
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 12px;
  color: #333;
}

.tooltip-content {
  padding: 0;
  color: #333;
  font-size: 12px;
}
</style>

<template lang="">
  <div ref="chartContainer" class="chart-container">
    <!-- 使用绝对定位的tooltip -->
    <div 
      v-if="showTooltip" 
      class="tooltip-container"
      :style="{
        left: tooltipPosition.x + 'px',
        top: tooltipPosition.y + 'px'
      }"
    >
      <div class="tooltip-inner">
        <div class="tooltip-title">{{ tooltipInfo.name }}</div>
        <div class="tooltip-content">朝代：{{ tooltipInfo.dynasty }}</div>
      </div>
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
  
  console.log("地图组件已挂载");
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
  
  // 移除所有旧事件
  chart.value.off('mouseover');
  chart.value.off('mouseout');
  chart.value.off('mousemove');
  if (chart.value.getZr()) {
    chart.value.getZr().off('mousemove');
  }
  
  // 重新添加事件处理
  chart.value.on('click', 'series.scatter', (params) => {
    if (params && params.name) {
      router.push({ path: '/detail', query: { province: params.name } });
    }
  });

  chart.value.on('mouseover', 'series.scatter', (params) => {
    if (params && params.name) {
      // 更新悬浮项目状态
      hoveredProject.value = params.name;
      
      // 更新tooltip内容
      tooltipInfo.name = params.name;
      tooltipInfo.dynasty = params.data.dynasty;
      
      // 计算tooltip位置
      tooltipPosition.x = params.event.offsetX + 20;
      tooltipPosition.y = params.event.offsetY - 10;
      
      // 显示tooltip
      showTooltip.value = true;
      
      console.log('显示tooltip:', params.name, tooltipPosition.x, tooltipPosition.y);
    }
  });
  
  chart.value.on('mouseout', 'series.scatter', () => {
    // 清除悬浮项目状态
    hoveredProject.value = null;
    
    // 隐藏tooltip
    showTooltip.value = false;
    
    console.log('隐藏tooltip');
  });
  
  chart.value.on('mousemove', 'series.scatter', (params) => {
    if (showTooltip.value) {
      // 更新tooltip位置
      tooltipPosition.x = params.event.offsetX + 20;
      tooltipPosition.y = params.event.offsetY - 10;
    }
  });
  
  // 处理地图空白区域点击
  chart.value.getZr().on('click', function(event) {
    const pointInPixel = [event.offsetX, event.offsetY];
    if (!chart.value.containPixel('series', pointInPixel)) {
      // 点击了非标记点区域
      showTooltip.value = false;
    }
  });
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
}

.tooltip-container {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
}

.tooltip-inner {
  background-color: rgba(50, 50, 50, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  min-width: 120px;
}

.tooltip-title {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 3px;
}

.tooltip-content {
  color: #ddd;
  font-size: 12px;
}
</style>

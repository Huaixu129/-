<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { loadChartByName } from '../utils/chartLoader';

const props = defineProps({
  projectName: {
    type: String,
    required: true
  }
});

const chartContainer = ref(null);
let chart = null;

const initChart = async () => {
  if (chartContainer.value && props.projectName) {
    // 等待DOM更新完成
    await nextTick();
    
    // 确保容器大小正确设置
    if (chart) {
      chart.dispose();
    }
    
    // 加载图表
    chart = loadChartByName(props.projectName, chartContainer.value);
    
    // 确保图表适应容器大小并居中
    if (chart) {
      chart.resize();
    }
  }
};

onMounted(async () => {
  await initChart();
  
  // 添加ResizeObserver监听容器大小变化
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      if (chart) {
        chart.resize();
      }
    });
    
    if (chartContainer.value) {
      resizeObserver.observe(chartContainer.value);
    }
    
    // 在组件销毁时取消观察
    onBeforeUnmount(() => {
      resizeObserver.disconnect();
    });
  }
});

// 监听项目名称变化，重新加载图表
watch(() => props.projectName, async (newName) => {
  if (chartContainer.value && newName) {
    await initChart();
  }
});

// 在组件销毁前清理
onBeforeUnmount(() => {
  if (chart) {
    chart.dispose();
  }
  window.removeEventListener('resize', handleResize);
});

// 处理窗口大小变化
const handleResize = () => {
  if (chart) {
    chart.resize();
  }
};

// 监听窗口大小变化
window.addEventListener('resize', handleResize);
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: visible;
}
</style> 
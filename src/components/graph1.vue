<template lang="">
  <div class="container">
    <img src="../assets/img/bg1.png" alt="bg" />
    <div class="cell1">{{ projectInfo.设计者 || '设计者' }}</div>
    <div class="cell2">{{ projectInfo.修建时间 || '修建时间' }}</div>
    <div class="cell3">{{ projectInfo.规模描述 || '规模描述' }}</div>
  </div>
</template>
<script>
import { ref, inject, watch } from 'vue';
import overviewData from '../data/overview.json';

export default {
  setup() {
    // 注入悬浮项目状态
    const hoveredProject = inject('hoveredProject', ref(null));
    const projectInfo = ref({});

    // 监听悬浮项目变化
    watch(hoveredProject, (newValue) => {
      if (newValue && overviewData[newValue]) {
        projectInfo.value = overviewData[newValue];
      } else {
        projectInfo.value = {};
      }
    });

    return {
      projectInfo
    };
  }
};
</script>
<style>
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: flex-end; /* 贴紧下边界 */
  height: 100vh; /* 设置容器高度为视口高度 */
  padding-bottom: 25px; /* 距离下边界的距离 */
  position: absolute; /* 设置绝对定位 */
  z-index: 1; /* 设置 z-index */
}

.cell1 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */
  height: 125px; /* 设置高度 */
  text-align: center; /* 文本水平居中 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  top: 70px; /* 第一个 cell 的顶部位置 */
  left: 22px; /* 第一个 cell 的左侧位置 */
}

.cell2 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */
  height: 125px; /* 设置高度 */
  text-align: center; /* 文本水平居中 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  top: 70px; /* 第二个 cell 的顶部位置 */
  left: 134px; /* 第二个 cell 的左侧位置 */
}

.cell3 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */    
  height: 125px; /* 设置高度 */
  text-align: center; /* 文本水平居中 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  top: 70px; /* 第三个 cell 的顶部位置 */
  left: 244px; /* 第三个 cell 的左侧位置 */
}
</style>
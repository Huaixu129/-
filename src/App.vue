<template lang="">
  <router-view />
  <div class="bg-[url('assets/img/image.png')] dashboard-container">
    <div class="dashboard-item title">
      <T
        class="bg-yellow-400/3 box-border p-1 mt-0 mb-3 shrink-0"
      />
    </div>
    <div class="dashboard-item chart-left-top">
      <graph1/>
    </div>
    <div class="dashboard-item images">
      <graph2 class="h-1/2 box-border pb-4" />
    </div>
    <div class="dashboard-item map">
      <mapChart class="bg-yellow-400/1 grow" /> 
    </div>
    <div class="dashboard-item timeline">
      <timeAxis class="bg-yellow-400/1 p-3 grow" @dynasty-change="onDynastyChange" />
    </div>
    <div class="dashboard-item chart-right-top">
      <graph4 class="h-1/3 box-border pb-4" />
    </div>
    <div class="dashboard-item chart-right-middle">
      <graph5 class="h-1/3 box-border pb-4" />
    </div>
    <div class="dashboard-item chart-right-bottom">
      <graph6 class="h-1/3 box-border pb-4" />
    </div>
    <div class="dashboard-item chart-bottom">
      <graph3 class="pb-1" />
    </div>
  </div>
</template>

<script setup>
import graph1 from "./components/graph1.vue";
import graph2 from "./components/graph2.vue";
import graph3 from "./components/graph3.vue";
import graph4 from "./components/graph4.vue";
import graph5 from "./components/graph5.vue";
import graph6 from "./components/graph6.vue";
import mapChart from "./components/mapChart.vue";
import T from "./components/T.vue";
import timeAxis from "./components/timeAxis.vue";
import { ref, provide } from 'vue';

// 当前朝代状态
const currentDynasty = ref('春秋');

// 当前悬浮的水利工程
const hoveredProject = ref(null);

// 朝代变更处理函数
const onDynastyChange = (dynasty) => {
  currentDynasty.value = dynasty;
};

// 悬浮项目变更处理函数
const onProjectHover = (projectName) => {
  hoveredProject.value = projectName;
};

// 提供当前朝代给其他组件
provide('currentDynasty', currentDynasty);
// 提供当前悬浮项目给其他组件
provide('hoveredProject', hoveredProject);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "点书小隶体", sans-serif;
  padding: 20px;
}

.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(18, 1fr);
  gap: 15px;
  height: 100vh;
  width: 100%;
  /* border: 2px solid #d86a5a; */
  padding: 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100vw;
}

.dashboard-item {
  /* border: 2px solid #d86a5a; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
}

.title {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}

.chart-left-top {
  grid-column: 1 / 2;
  grid-row: 1 / 8;
    border: 2px solid #d86a5a;

}

.images {
  grid-column: 1 / 2;
  grid-row: 8 / 15;

}

.map {
  grid-column: 2 / 3;
  grid-row: 3 / 14;
}

.timeline {
  grid-column: 2 / 3;
  grid-row: 13/15;
}

.chart-right-top {
  grid-column: 3 / 4;
  grid-row: 1 / 7;
}

.chart-right-middle {
  grid-column: 3 / 4;
  grid-row: 7 / 13;
}

.chart-right-bottom {
  grid-column: 3 / 4;
  grid-row: 13 / 20;
}

.chart-bottom {
  grid-column: 1 / 3;
  grid-row: 15 / 20;
}

.dashboard-item {
  /* border: 2px solid #d86a5a; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  /* 新增以下属性确保布局稳定 */
  position: relative;
  overflow: hidden;
  min-width: 0;  /* 防止内容溢出 */
  min-height: 0; /* 防止内容溢出 */
}

/* 为每个组件容器添加固定尺寸 */
.dashboard-item > * {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持内容比例 */
}
</style>

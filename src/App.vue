<template lang="">
  <div class="bg-[url('assets/img/image.png')] bg-cover bg-center w-screen h-screen text-black p-5 flex overflow-hidden">
    <!-- 添加router-view确保路由内容可以显示 -->
    <router-view></router-view>
    
    <!-- 左侧区域：宽度为屏幕的25% -->
    <div
      class="w-[25%] h-[70%] mr-5 bg-yellow-100/1 p-3 flex flex-col"
    >
      <graph1 class="h-1/2 box-border pb-4"/>
      <graph2 class="h-1/2 box-border pb-4" />
    </div>

    <!-- 中间区域：宽度为屏幕的50% -->
    <div
      class="w-[50%] h-[70%] mr-5 bg-yellow-100/1 p-3 flex flex-col"
    >
      <T
        class=" bg-yellow-400/3 box-border p-3 mt-0 mb-3 basis-[20%] shrink-0"
      />
      <mapChart class=" bg-yellow-400/1 p-3 grow" />
    </div>

    <!-- 底部区域：占据左侧和中间区域下方30%高度 -->
    <div
      class="w-[71.5%] h-[25%] absolute bottom-5 bg-yellow-100/1 p-3 flex flex-col"
    >
      <graph3 class="pb-1" />
    </div>

    <!-- 右侧区域：宽度为屏幕的25% -->
    <div class="w-[25%] bg-yellow-100/1 p-3 flex flex-col">
      <graph4 class="h-1/3 box-border pb-4" />
      <graph5 class="h-1/3 box-border pb-4" />
      <graph6 class="h-1/3 box-border pb-4" />
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

</script>
<style lang=""></style>

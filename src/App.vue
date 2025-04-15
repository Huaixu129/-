<template lang="">
  <div
    class="bg-[url('assets/img/image.png')] bg-cover bg-center w-screen h-screen text-black p-5 flex overflow-hidden"
  >
    <!-- 左侧区域：宽度为屏幕的25% -->
    <div
      class="w-[25%] h-[70%] mr-5 opacity-30 bg-yellow-100 p-3 flex flex-col"
    >
      <graph1 class="h-1/2 box-border pb-4"/>
      <graph2 class="h-1/2 box-border pb-4" />
    </div>

    <!-- 中间区域：宽度为屏幕的50% -->
    <div
      class="w-[50%] h-[70%] mr-5 opacity-30 bg-yellow-100 p-3 flex flex-col"
    >
      <T
        class="opacity-50 bg-yellow-400 box-border p-3 mt-0 mb-3 basis-[22.22%] shrink-0"
      />
      <mapChart class="opacity-50 bg-yellow-400 p-3 grow" />
    </div>

    <!-- 底部区域：占据左侧和中间区域下方30%高度 -->
    <div
      class="w-[71.5%] h-[25%] absolute bottom-5 opacity-30 bg-yellow-100 p-3 flex flex-col"
    >
      <graph3 class="pb-1" />
    </div>

    <!-- 右侧区域：宽度为屏幕的25% -->
    <div class="w-[25%] opacity-30 bg-yellow-100 p-3 flex flex-col">
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

// import { ref, onMounted } from "vue";

// // 为每个图表创建独立的数据状态
// const graph1Data = ref(null)
// const graph2Data = ref(null)
// const graph3Data = ref(null)
// const graph4Data = ref(null)
// const graph5Data = ref(null)
// const graph6Data = ref(null)
// const loading = ref({
//   graph1: false,
//   graph2: false,
//   graph3: false,
//   graph4: false,
//   graph5: false,
//   graph6: false,
// })
// const error = ref({
//   graph1: null,
//   graph2: null,
//   graph3: null,
//   graph4: null,
//   graph5: null,
//   graph6: null,
// })

// // 封装通用数据获取方法
// const fetchChartData = async (chartName, fileName) => {
//   try {
//     loading.value[chartName] = true
//     const response = await fetch(`/data/${fileName}`)
//     if (!response.ok) throw new Error(`${chartName}数据加载失败`)
//     return await response.json()
//   } catch (err) {
//     error.value[chartName] = err.message
//     console.error(`${chartName}获取数据失败:`, err)
//     return null
//   } finally {
//     loading.value[chartName] = false
//   }
// }

// // 组件挂载时获取所有数据
// onMounted(async () => {
//   graph1Data.value = await fetchChartData('graph1', 'graph1.json')
//   graph2Data.value = await fetchChartData('graph2', 'graph2.json')
//   graph3Data.value = await fetchChartData('graph3', 'graph3.json')
//   graph4Data.value = await fetchChartData('graph4', 'graph4.json')
//   graph5Data.value = await fetchChartData('graph5', 'graph5.json')
//   graph6Data.value = await fetchChartData('graph6', 'graph6.json')
// })
</script>
<style lang=""></style>

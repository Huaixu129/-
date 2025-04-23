<template>
  <div class="detail-container">
    <!-- 顶部标题栏 -->
    <div class="title-bar flex items-center px-4">
      <button @click="goBack" class="back-button mr-4">返回主页</button>
      <h1 class="text-xl font-bold">{{ province }} 水利工程详情</h1>
    </div>

    <!-- 下方五格区域 -->
    <div class="content-area flex flex-col justify-between h-[90%]">
      <!-- 上三格 -->
      <div class="flex justify-between h-[48%]">
        <div class="box w-[32%]"></div>
        <div class="box w-[32%]"></div>
        <div class="box w-[32%]"></div>
      </div>

      <!-- 下两格 -->
      <div class="flex justify-between h-[48%]">
        <div class="box w-[48%]"></div>
        <div class="box w-[48%]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  province: {
    type: String,
    required: true
  }
});

const router = useRouter();

const goBack = () => {
  router.push('/');
}; // 调试用
</script>

<style scoped>
.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  z-index: 100;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.title-bar {
  height: 10%;
  background-color: #eef2f3;
  border-bottom: 1px solid #ccc;
}

.back-button {
  padding: 6px 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background: #3aa876;
}

.content-area {
  height: 90%;
  padding-top: 20px;
}

.box {
  height: 100%;
  border: 2px solid red;
  background-color: #f9f9f9;
}
</style>

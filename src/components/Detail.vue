<template>
  <div class="detail-container custom-font">
    <!-- 顶部标题栏 -->
    <div class="title-bar flex items-center px-4">
      <div class="absolute left-14">
        <button @click="goBack" class="back-button"></button>
      </div>
      <div class="w-full flex justify-center">
        <div class="transform translate-x-5">
          <h1 class="text-5xl font-bold">{{ province }}</h1>
        </div>
      </div>
    </div>

    <!-- 下方五格区域 -->
    <div class="content-area flex flex-col justify-between h-[90%]">
      <!-- 上三格 -->
      <div class="flex justify-between h-[48%]">
        <div class="box w-[32%]">
        </div>
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
import { ref, onMounted } from 'vue';

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

<style>
@font-face {
  font-family: "点书小隶体";
  src: url("../assets/font/点书小隶体.ttf") format("truetype");
}

.custom-font {
  font-family: "点书小隶体", sans-serif;
}

.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/img/bg.png');
  background-size: cover;
  background-position: center;
  z-index: 100;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: "点书小隶体", sans-serif;
}

.title-bar {
  height: 10%;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
  border-radius: 8px;
}

.back-button {
  padding: 6px 12px;
  background: transparent;
  color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.back-button:hover {
  background: transparent;
}

.content-area {
  height: 90%;
  padding-top: 20px;
}

.box {
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: transparent;
  border-radius: 8px;
  padding: 10px;
}

.detail-title {
  font-family: "点书小隶体", sans-serif;
}

.detail-content {
  font-family: "点书小隶体", sans-serif;
}
</style>

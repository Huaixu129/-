<template lang="">
  <div class="image-container">
    <div class="project-title">
      {{ hoveredProject ? hoveredProject : '水利工程示意图' }}
    </div>
    <img :src="currentImageSrc" alt="水利工程示意图" class="project-image" @error="handleImageError" />
  </div>
</template>
<script setup>
import { computed, inject, ref } from 'vue';
import initialImg from '../WPhoto/初始图片.png';

// 注入当前悬浮的项目名称
const hoveredProject = inject('hoveredProject');
const imageError = ref(false);

// 计算当前应该显示的图片路径
const currentImageSrc = computed(() => {
  if (hoveredProject.value) {
    try {
      // 重置错误状态
      imageError.value = false;
      // 使用动态导入方式获取图片
      return new URL(`../WPhoto/${hoveredProject.value}.png`, import.meta.url).href;
    } catch (error) {
      console.error('加载图片失败:', error);
      imageError.value = true;
      return initialImg;
    }
  } else {
    // 默认显示初始图片
    return initialImg;
  }
});

// 图片加载错误处理
const handleImageError = () => {
  imageError.value = true;
};
</script>
<style>
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  position: relative;
}

.project-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  background-color: transparent;
  padding: 5px 10px;
  z-index: 1;
  font-family: "点书小隶体", sans-serif;
}

.project-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border: 2px dashed #999;
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-top: 30px; /* 为标题留出空间 */
}
</style>
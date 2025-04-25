<template lang="">
  <div class="image-container">
    <div class="image-frame">
      <div class="image-title" v-if="hoveredProject.value">
        {{ hoveredProject.value }}
      </div>
      <img :src="currentImageSrc" alt="水利工程图片" class="project-image" />
    </div>
  </div>
</template>
<script setup>
import { computed, inject } from 'vue';
import initialImg from '../WPhoto/初始图片.png';

// 注入当前悬浮的项目名称
const hoveredProject = inject('hoveredProject');

// 计算当前应该显示的图片路径
const currentImageSrc = computed(() => {
  if (hoveredProject.value) {
    try {
      // 使用动态导入方式获取图片
      // 注意：这种方式需要webpack或vite的支持
      return `/src/WPhoto/${hoveredProject.value}.png`;
    } catch (error) {
      console.error('加载图片失败:', error);
      return initialImg;
    }
  } else {
    // 默认显示初始图片
    return initialImg;
  }
});
</script>
<style>
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 8px;
}

.image-frame {
  border: 2px dashed rgba(128, 128, 128, 0.6);
  border-radius: 5px;
  padding: 15px;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-title {
  font-size: 16px;
  color: rgba(200, 200, 200, 0.9);
  margin-bottom: 10px;
  text-align: center;
}

.project-image {
  max-width: 100%;
  max-height: 85%;
  object-fit: contain;
}
</style>
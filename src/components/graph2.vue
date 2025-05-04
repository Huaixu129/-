<template lang="">
  <div class="image-container">
    <div class="project-title">
      {{ hoveredProject ? hoveredProject : '水利工程示意图' }}
    </div>
    <div class="image-wrapper">
      <img :src="currentImageSrc" alt="水利工程示意图" class="project-image" @error="handleImageError" />
    </div>
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
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 0;
  position: relative;
}

.project-title {
  width: 100%;
  height: 40px; /* 固定标题高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  background-color: transparent;
  z-index: 2; /* 确保标题在图片上方 */
  font-family: "点书小隶体", sans-serif;
  margin-bottom: 5px;
  position: relative; /* 确保标题在正常文档流中 */
}

.image-wrapper {
  width: 95%;
  height: calc(100% - 100px); /* 减去标题高度和间距 */
  border: 3px dashed #777; /* 更粗更明显的灰色虚线边框 */
  border-radius: 8px; /* 圆角边框 */
  box-sizing: border-box; /* 确保边框和内边距计入总宽高 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image {
  width: 100%; /* 占据容器宽度的95% */
  height: 100%; /* 占据容器高度的95% */
  object-fit: fill; /* 拉伸图片填充整个区域 */
  object-position: center;
  z-index: 1; /* 确保图片在标题下方 */
}
</style>
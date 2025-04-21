<template>
    <div class="image-container">
      <img src="../assets/img/title.png" alt="示例图片" class="full-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageFullDiv'
  }
  </script>
  
  <style scoped>
  .image-container {
    width: 100%;
    height: 400px; /* 高度可根据需求调整 */
    position: relative;
    overflow: hidden;
    background: transparent; /* ✅ 确保背景透明 */
  }
  
  .full-image {
    width: 100%;
    height: 100%;
    object-fit: contain; /* ✅ 按原比例展示，保留空白区域 */
    background: transparent; /* ✅ 确保图片自身背景透明（如为 PNG 等） */
  }
  </style>
  
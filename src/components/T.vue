<template>
  <div class="image-container">
    
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  height: 100%; /* ✅ 关键：撑满外层div */
  position: relative;
  /* overflow: hidden; */
  background: transparent;
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}
</style>

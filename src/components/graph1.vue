<template lang="">
  <div class="container">
    <img src="../assets/img/bg1.png" alt="bg" />
    <div class="cell1">主持人</div>
    <div class="cell2">开凿时间</div>
    <div class="cell3">工程面积（长度）</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: flex-end; /* 贴紧下边界 */
  height: 100vh; /* 设置容器高度为视口高度 */
  padding-bottom: 25px; /* 距离下边界的距离 */
  position: absolute; /* 设置绝对定位 */
  z-index: 1; /* 设置 z-index */
}

.cell1 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */
  height: 125px; /* 设置高度 */
  border: 2px solid #000; /* 添加边框 */
  text-align: center; /* 文本居中 */
  top: 70px; /* 第一个 cell 的顶部位置 */
  left: 22px; /* 第一个 cell 的左侧位置 */
}

.cell2 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */
  height: 125px; /* 设置高度 */
  border: 2px solid #000; /* 添加边框 */
  text-align: center; /* 文本居中 */
  top: 70px; /* 第二个 cell 的顶部位置 */
  left: 134px; /* 第二个 cell 的左侧位置 */
}

.cell3 {
  position: absolute; /* 设置绝对定位 */
  z-index: 2; /* 设置 z-index 高于图片 */
  width: 50px; /* 设置宽度 */    
  height: 125px; /* 设置高度 */
  border: 2px solid #000; /* 添加边框 */
  text-align: center; /* 文本居中 */
  top: 70px; /* 第三个 cell 的顶部位置 */
  left: 244px; /* 第三个 cell 的左侧位置 */
}
</style>
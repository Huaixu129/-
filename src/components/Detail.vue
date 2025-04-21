<template>
  <div class="detail-container">
    <!-- 添加更多内容测试 -->
    <h1>{{ $route.query.province }}水利工程详情</h1>
    <button @click="goBack" class="back-button">返回主页</button>
    <!-- 可以添加更多内容 -->
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    goBack() {
      this.$router.push('/');
    }
  },
  mounted() {
    console.log('当前路由参数:', this.$route.query); // 调试用
  }
}
</script>

<style scoped>
.detail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  z-index: 100;
  padding: 20px;
}

.back-button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.back-button:hover {
  background: #3aa876;
}
</style>
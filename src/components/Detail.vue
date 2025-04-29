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
        <div class="box w-[32%] left-top-box">
          <img :src="getProjectImage" class="project-image" />
        </div>
        <div class="box w-[32%] chart-box">
          <KnowledgeGraph :projectName="province" />
        </div>
        <div class="box w-[32%] right-top-box">
          <img :src="getPersonImage" class="person-image" />
        </div>
      </div>

      <!-- 下两格 -->
      <div class="flex justify-between h-[48%]">
        <div class="box w-[48%] left-bottom-box ">
          <div class="engineer-info-container">
            <div class="engineer-info-content">
              <div class="engineer-text">{{ engineerInfo }}</div>
            </div>
          </div>
        </div>
        <div class="box w-[48%] right-bottom-box">
          <div class="person-info-container">
            <div class="person-info-content">
              <h2 class="person-name">{{ personInfo.人物 }}</h2>
              <div class="person-brief">{{ personInfo.简介 }}</div>
              <div class="person-details">
                <template v-if="personInfo.主要成就">
                  <div class="section-title">主要成就</div>
                  <ul class="achievement-list" v-if="Array.isArray(personInfo.主要成就)">
                    <li v-for="(item, index) in personInfo.主要成就" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                  <div v-else class="achievement-single">
                    {{ personInfo.主要成就 }}
                  </div>
                </template>
                <template v-if="personInfo.水利贡献">
                  <div class="section-title">水利贡献</div>
                  <div class="contribution-content">{{ personInfo.水利贡献 }}</div>
                </template>
                <template v-if="personInfo.背景">
                  <div class="section-title">历史背景</div>
                  <div class="background-content">{{ personInfo.背景 }}</div>
                </template>
                <template v-if="personInfo.纪念">
                  <div class="section-title">后世纪念</div>
                  <div class="memorial-content">{{ personInfo.纪念 }}</div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import KnowledgeGraph from "./KnowledgeGraph.vue";
import personInfoData from "../data/detail/PersonInfo/PersonInfo.json";
import engineerInfoData from "../data/detail/EngeneerInfo/EngeneerInfo.json";

const props = defineProps({
  province: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const goBack = () => {
  router.push("/");
}; // 调试用

const getProjectImage = computed(() => {
  const imageMap = {
    '隋唐大运河': '隋唐大运河.png',
    '灵渠': '灵渠.png',
    '郑国渠': '郑国渠.png',
    '都江堰': '都江堰.png',
    '它山堰': '它山堰.png',
    '木兰陂': '木兰陂.png',
    '坎儿井': '坎儿井.png'
  };
  return `/src/data/detail/WPhoto2/${imageMap[props.province]}`;
});

const getPersonImage = computed(() => {
  const imageMap = {
    '隋唐大运河': '隋朝大运河.png',
    '灵渠': '灵渠.png',
    '郑国渠': '郑国渠.png',
    '都江堰': '都江堰.png',
    '它山堰': '它山堰.png',
    '木兰陂': '木兰陂.png',
    '坎儿井': '坎儿井.png'
  };
  return `/src/data/detail/PersonPhoto/${imageMap[props.province]}`;
});

const personInfo = computed(() => {
  return personInfoData[props.province] || {};
});

const engineerInfo = computed(() => {
  return engineerInfoData[props.province] || "";
});
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
  background: url("../assets/img/bg.png");
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
  border: 1px solid rgba(5, 5, 5, 0);
  background-color: transparent;
  border-radius: 8px;
  padding: 10px;
}

.left-top-box {
  background-image: url("../assets/img/leftTop.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border: none;
  position: relative;
}

.right-top-box {
  background-image: url("../assets/img/rightTop.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border: none;
  position: relative; /* ← 加上这句！ */
}

.left-bottom-box {
  background-color: rgba(244, 226, 180, 0.5);
  background-image: url("../assets/img/leftBottom.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border: none;
  position: relative;
}

.right-bottom-box {
  background-image: url("../assets/img/rightBottom.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border: none;
  position: relative;
}

.detail-title {
  font-family: "点书小隶体", sans-serif;
}

.detail-content {
  font-family: "点书小隶体", sans-serif;
}

.chart-box {
  overflow: visible;
  position: relative;
  padding: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -42%) scale(0.95);
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  outline: none;
  border: none;
}

.person-info-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.person-info-content {
  width: 100%;
  max-width: 75%;
  height: 100%;
  max-height: 70%;
  overflow-y: auto;
  padding: 10px 0 40px 0;
  color: #0f0e0e;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  margin: 0 auto;
  font-size: 1.3rem;
}
.person-info-content::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}

.person-name {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

.person-brief {
  font-size: 1.5rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  text-align: center;
}

.person-details {
  font-size: 1.3rem;
  line-height: 1.2;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.3rem 0 0.3rem 0;
  color: #ffd700;
}

.achievement-list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  width: 100%;
}

.achievement-list li {
  margin-bottom: 0.3rem;
  position: relative;
  padding-left: 1.2rem;
  width: 100%;
  display: block;
  white-space: normal;
  word-break: break-all;
  font-size: 1.2rem;
  line-height: 1.2;
}

.achievement-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ffd700;
}

.contribution-content,
.background-content,
.memorial-content {
  margin-bottom: 1rem;
}

.achievement-single {
  margin-bottom: 0.3rem;
  padding-left: 1.2rem;
  color: #080707;
  font-size: 1.2rem;
  line-height: 1.2;
}

.person-image {
  position: absolute;
  top: 8%;
  left: 17%;
  width: 67%;
  aspect-ratio: 1 / 1; /* 保持宽高比 1:1 */
  object-fit: cover;
  border-radius: 50%;
  outline: none;
  border: none;
  z-index: 1;
}

.engineer-info-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.engineer-info-content {
  width: 95%;
  height: 70%;
  overflow-y: auto;
  margin: 0 auto;
  padding: 0 5% 0 5%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.engineer-info-content::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Webkit */
}

.engineer-text {
  background-color: rgba(244, 226, 180, 0);
  background-image: linear-gradient(to bottom, transparent 97%, #666 97%);
  background-size: 100% 1.8rem;
  color: #0f0e0e;
  font-size: 1.1rem;
  line-height: 1.8rem; /* 修改 line-height 与背景线高度一致 */
  text-align: justify;
  white-space: pre-wrap;
  background-image: linear-gradient(to bottom, transparent 97%, #666 97%);
  background-size: 100% 1.8rem; /* 保持与 line-height 一致 */
  padding: 0 0 0.2rem 0;
}
</style>

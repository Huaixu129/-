<template>
    <div class="time-axis-container">
      <!-- Dynasty labels -->
      <div class="dynasty-labels">
        <div 
          v-for="(dynasty, index) in dynasties" 
          :key="index" 
          class="dynasty-label"
          :class="{ 'active': currentDynasty === index }"
          :style="{ left: `${(index / (dynasties.length - 1)) * 100}%` }"
        >
          {{ dynasty }}
        </div>
      </div>
  
      <!-- Timeline bar -->
      <div class="timeline-bar">
        <div class="timeline-line"></div>
        <input
          type="range"
          min="0"
          :max="dynasties.length - 1"
          v-model.number="currentDynasty"
          step="1"
          class="timeline-slider"
          @input="logDynasty"
        />
        <!-- Green indicator dot -->
        <div class="indicator-dot" :style="indicatorStyle"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'timeAxis',
    data() {
      return {
        currentDynasty: 0, // Start with leftmost dynasty
        dynasties: ['春秋', '战国', '秦', '汉', '隋', '唐', '五代十国', '宋', '元', '明']
      };
    },
    computed: {
      indicatorStyle() {
        const percentage = (this.currentDynasty / (this.dynasties.length - 1)) * 100;
        return {
          left: `${percentage}%`
        };
      }
    },
    methods: {
      logDynasty() {
        // Ensure currentDynasty is treated as a number
        this.currentDynasty = Number(this.currentDynasty);
        console.log(`Current Dynasty: ${this.dynasties[this.currentDynasty]}`);
        // 发射朝代变化事件
        this.$emit('dynasty-change', this.dynasties[this.currentDynasty]);
      }
    },
    mounted() {
      // Initialize with the first dynasty
      this.logDynasty();
    }
  };
  </script>
  
  <style scoped>
  .time-axis-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    padding: 0;
  }
  
  .dynasty-labels {
    position: relative;
    height: 20px;
    width: 100%;
    margin-bottom: 2px;
  }
  
  .dynasty-label {
    position: absolute;
    transform: translateX(-50%);
    text-align: center;
    color: #9999aa;
    font-size: 12px;
  }
  
  .dynasty-label.active {
    color: #000000;  /* 更深的黑色 */
    font-weight: bold;
    text-shadow: 0 0 2px rgba(0,0,0,0.2); /* 添加阴影效果 */
  }
  
  .timeline-bar {
    position: relative;
    height: 20px;
  }
  
  .timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #cccccc;
    transform: translateY(-50%);
  }
  
  .timeline-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 10;
  }
  
  .indicator-dot {
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    background-color:rgb(136, 154, 135);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  </style>
<template lang="">
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>
<script setup>
import mapJson from "../assets/map/china.json";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import locIcon from '../assets/img/loc.svg';
import router from '../router';

const chartContainer = ref(null);

onMounted(() => {
  echarts.registerMap("china", mapJson);
  renderChart();
});

const renderChart = () => {
  const chart = echarts.init(chartContainer.value);

  const options = {
    geo: {
      map: "china",
      roam: true,
      zoom: 1,
      aspectScale: 0.75,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      scaleLimit: {
        min: 1,
        max: 10
      },
      itemStyle: {
        borderColor: "rgba(34, 147, 136, 0.4)",
        borderWidth: 1.5,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
        areaColor: "rgba(232, 218, 172, 1)",
      },
      emphasis: {
        itemStyle: {
          areaColor: "#e0c58f",
          shadowColor: "#333",
          shadowBlur: 20,
        },
        label: {
          show: true,
          color: "#fff",
          fontWeight: "bold",
        },
      },
      label: {
        show: true,
        color: "#3a3d49",
        fontSize: 10,
      },
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: `image://${locIcon}`,
        symbolSize: 20,
        data: [
          {name: '鸿沟', value: [113.6654, 34.7579], province: '河南省', dynasty: '春秋'},
          {name: '都江堰', value: [104.0657, 30.6595], province: '四川省', dynasty: '战国'},
          {name: '郑国渠', value: [108.9480, 34.2632], province: '陕西省', dynasty: '战国'},
          {name: '引漳十二渠', value: [114.5025, 38.0455], province: '河北省', dynasty: '战国'},
          {name: '灵渠', value: [110.2983, 25.2748], province: '广西壮族自治区', dynasty: '秦'},
          {name: '鉴湖', value: [120.1536, 30.2875], province: '浙江省', dynasty: '汉'},
          {name: '洪泽湖大堤', value: [118.7674, 32.0415], province: '江苏省', dynasty: '汉'},
          {name: '七门堰', value: [117.2830, 31.8612], province: '安徽省', dynasty: '汉'},
          {name: '坎儿井', value: [87.6168, 43.8256], province: '新疆维吾尔自治区', dynasty: '汉'},
          {name: '白渠', value: [108.9482, 34.2634], province: '陕西省', dynasty: '汉'},
          {name: '龙首渠', value: [108.9484, 34.2636], province: '陕西省', dynasty: '汉'},
          {name: '邗沟', value: [118.7676, 32.0417], province: '江苏省', dynasty: '隋'},
          {name: '隋唐大运河', value: [113.6656, 34.7581], province: '河南省', dynasty: '隋'},
          {name: '它山堰', value: [120.1538, 30.2877], province: '浙江省', dynasty: '唐'},
          {name: '练湖', value: [118.7678, 32.0419], province: '江苏省', dynasty: '唐'},
          {name: '相思埭', value: [110.2985, 25.2750], province: '广西壮族自治区', dynasty: '唐'},
          {name: '钱塘海塘工程', value: [120.1540, 30.2881], province: '浙江省', dynasty: '五代十国'},
          {name: '芍陂', value: [117.2832, 31.8614], province: '安徽省', dynasty: '五代十国'},
          {name: '木兰陂', value: [119.3062, 26.0753], province: '福建省', dynasty: '宋'},
          {name: '通惠河', value: [116.4074, 39.9042], province: '北京市', dynasty: '元'},
          {name: '戴村坝', value: [116.5871, 35.4050], province: '山东省', dynasty: '明'},
        ],
        emphasis: {
          itemStyle: {
            color: '#fff'
          }
        }
      }
    ]
  };

  chart.setOption(options);
  chart.on('click', 'series.scatter', (params) => {
    console.log('点击参数:', params); // 调试用
    if (params && params.name) {
      router.push({ path: '/detail', query: { province: params.name } });
    } else {
      console.error('无效的点击参数:', params);
    }
  });

  // 自适应
  window.addEventListener("resize", () => {
    chart.resize();
  });
};
</script>
<style lang=""></style>

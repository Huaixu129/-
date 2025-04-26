import * as echarts from 'echarts';

// 都江堰图表数据
export const loadDujiangyanChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);

  const nodes = [
    { name: '都江堰', category: 0, symbolSize: 50, itemStyle: { color: '#FF6347' } },
    { name: '建造要素', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '工程结构', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '历史价值', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '当代发展', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: 'BC256 - 251', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '成都岷江', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '李冰父子', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '冲积扇顶', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '治水兴农', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '渠首三系', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '灌溉网络', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '鱼嘴分洪', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '飞沙排沙', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '宝瓶控水', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '天府粮仓', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '商贸兴盛', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '世遗瑰宝', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '智能灌溉', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '水利旅游', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } },
    { name: '生态平衡', category: 3, symbolSize: 25, itemStyle: { color: '#DAA520' } }
  ];

  // 边数据
  const links = [
    { source: '都江堰', target: '建造要素', label: '包含' },
    { source: '都江堰', target: '工程结构', label: '构成' },
    { source: '都江堰', target: '历史价值', label: '影响' },
    { source: '都江堰', target: '当代发展', label: '现状' },
    { source: '建造要素', target: 'BC256 - 251', label: '建造时间' },
    { source: '建造要素', target: '成都岷江', label: '地理位置' },
    { source: '建造要素', target: '李冰父子', label: '主持建造' },
    { source: '建造要素', target: '冲积扇顶', label: '选址优势' },
    { source: '建造要素', target: '治水兴农', label: '建造背景' },
    { source: '工程结构', target: '渠首三系', label: '核心组件' },
    { source: '工程结构', target: '灌溉网络', label: '配套网络' },
    { source: '渠首三系', target: '鱼嘴分洪', label: '分水枢纽' },
    { source: '渠首三系', target: '飞沙排沙', label: '排沙系统' },
    { source: '渠首三系', target: '宝瓶控水', label: '控水关键' },
    { source: '历史价值', target: '天府粮仓', label: '造就天府' },
    { source: '历史价值', target: '商贸兴盛', label: '促进商贸' },
    { source: '历史价值', target: '世遗瑰宝', label: '文化传承' },
    { source: '当代发展', target: '智能灌溉', label: '灌溉现状' },
    { source: '当代发展', target: '水利旅游', label: '旅游发展' },
    { source: '当代发展', target: '生态平衡', label: '生态保护' }
  ];

  // 获取详细信息的函数
  function getNodeInfo(name) {
    const infoMap = {
      '治水兴农': '战国时期秦国为统一大业，通过修建都江堰解决蜀地水患并发展农业保障后勤供应',
      '冲积扇顶': '位于成都平原冲积扇顶部，地势西北高东南低，可自流灌溉整个成都平原',
      '当代发展': '当前发展涵盖智能灌溉系统、水利文化旅游和生态保护工程三大领域',
      '世遗瑰宝': '2000年被联合国教科文组织列入世界文化遗产，2018年列入世界灌溉工程遗产',
      '水利旅游': '年均接待游客超800万人次，含伏龙观、二王庙、安澜索桥等文化景点',
      '智能灌溉': '覆盖7市38县，灌溉面积达1130万亩，采用物联网技术实现精准配水',
      '都江堰': '都江堰位于四川省成都市都江堰市，是世界遗产和世界自然遗产。',
      '建造要素': '建造要素包括时间、地理位置、建造者、选址优势和建造背景。',
      '工程结构': '工程结构包含渠首三系和灌溉网络两大子系统',  
      '渠首三系': '包括鱼嘴分洪、飞沙排沙、宝瓶控水三大核心组件',  
      '天府粮仓': '有效控制水患，使成都平原成为"天府之国"',  
      '历史价值': '历史意义包括农业变革、经济繁荣和文化传承。',
      '当代发展': '现状包括灌溉、旅游胜地和生态保护。',
      'BC256 - 251': '秦昭王末年（约公元前256—前251年）。',
      '成都岷江': '位于成都平原西部岷江上，城市为四川省成都市都江堰市城西。',
      '李冰父子': '蜀郡太守李冰父子。',
      '鱼嘴分洪': '分水排洪，利用弯道环流，冬春内江进水60%，夏秋外江进水60%。',
      '飞沙排沙': '溢洪、排沙，长200米，高2.15米，洪水期自动排泄多余水量，排沙率75%。',
      '宝瓶控水': '控制水量，人工凿开玉垒山岩体，宽20.4米，高18.8米，限制水流，壅高水面，增强排洪效果。',
      '灌溉网络': '由干渠、支渠、斗渠组成的复杂灌溉网络',
      '商贸兴盛': '带动手工业、商业发展，促进地区经济繁荣，增加财政收入，推动城市兴起和发展。',
      '生态平衡': '注重水利工程与生态环境协调发展，维护区域生态平衡，保障河流生态系统稳定。'
    };
    
    return infoMap[name] || '暂无详细信息';
  }

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.dataType === 'edge') {
          return params.data.label;
        } 
        return params.data.name + '<br/>' + getNodeInfo(params.data.name);
      },
      textStyle: {
        fontFamily: "点书小隶体"
      },
      position: function(point, params, dom, rect, size) {
        // 以鼠标为中点，显示在鼠标下方
        return [point[0] - size.contentSize[0] / 2, point[1] + 10];
      }
    },
    textStyle: {
      fontFamily: "点书小隶体"
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: [
          { name: '中心节点' },
          { name: '一级节点' },
          { name: '二级节点' },
          { name: '三级节点' }
        ],
        roam: true,
        zoom: 0.5,
        label: {
          show: true,
          fontFamily: "点书小隶体",
          fontSize: 12,
          position: 'right'
        },
        edgeLabel: {
          show: true,
          formatter: function(params) {
            return params.data.label;
          },
          fontFamily: "点书小隶体",
          fontSize: 12,
          color: '#555',
          position: 'middle'
        },
        force: {
          initLayout: 'circular',
          repulsion: 2000,
          edgeLength: [50, 100],
          gravity: 0.5
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
          width: 2
        }
      }
    ]
  };

  chart.setOption(option);
  

  
  // 窗口大小变化时重绘图表
  window.addEventListener('resize', () => {
    chart.resize();
  });
  
  return chart;
};

// 郑国渠图表数据
export const loadZhenguoquChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);
  
  const nodes = [
    { name: '郑国渠', category: 0, symbolSize: 50, itemStyle: { color: '#FF6347' } },
    { name: '建造要素', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '工程技术', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '历史意义', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: '当代状况', category: 1, symbolSize: 40, itemStyle: { color: '#4682B4' } },
    { name: 'BC246年', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '泾河北岸', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '郑国', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '韩谋疲秦', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '平原地势', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '有坝引水', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '引洪淤灌', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '农业增产', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '经济带动', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '技术传承', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '遗址保护', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '文旅发展', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '水利融合', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } }
  ];

  const links = [
    { source: '郑国渠', target: '建造要素', label: '包含' },
    { source: '郑国渠', target: '工程技术', label: '运用' },
    { source: '郑国渠', target: '历史意义', label: '具有' },
    { source: '郑国渠', target: '当代状况', label: '呈现' },
    { source: '建造要素', target: 'BC246年', label: '始建时间' },
    { source: '建造要素', target: '泾河北岸', label: '地理位置' },
    { source: '建造要素', target: '郑国', label: '主持建造' },
    { source: '建造要素', target: '韩谋疲秦', label: '背景' },
    { source: '建造要素', target: '平原地势', label: '优势' },
    { source: '工程技术', target: '有坝引水', label: '关键技术' },
    { source: '工程技术', target: '引洪淤灌', label: '灌溉方式' },
    { source: '历史意义', target: '农业增产', label: '促进' },
    { source: '历史意义', target: '经济带动', label: '推动' },
    { source: '历史意义', target: '技术传承', label: '传承' },
    { source: '当代状况', target: '遗址保护', label: '保护' },
    { source: '当代状况', target: '文旅发展', label: '带动' },
    { source: '当代状况', target: '水利融合', label: '发展' }
  ];

  // 获取详细信息的函数
  function getNodeInfo(name) {
    const infoMap = {
      '韩谋疲秦': '韩国为削弱秦国，派郑国提议修渠，消耗秦资源以延缓伐韩。',
      '平原地势': '位于关中平原，地势平坦，利于引泾水灌溉。',
      '当代状况': '涉及遗址保护、文旅发展和水利融合。',
      '郑国渠': '位于陕西泾阳，是古代著名水利工程。',
      '建造要素': '涵盖时间、地点、主持者、背景和选址优势。',
      '工程技术': '采用有坝引水和引洪淤灌技术。',  
      '有坝引水': '取水口在凹岸，减少泥沙淤积。',  
      '引洪淤灌': '洪水期引泾水，泥沙肥田并漫灌。',  
      '农业增产': '灌溉280多万亩土地，提高粮食产量。',  
      '经济带动': '促进农业经济，带动相关产业发展。',
      '技术传承': '影响后世水利工程建设，如白公渠等。',
      '遗址保护': '1996年列为国保单位，2016年入选世灌遗产。',
      '文旅发展': '周边发展文旅，吸引游客和学者参观。',
      '水利融合': '与现代水利设施融合，促进地区发展。',
      'BC246年': '秦王政元年开始兴建。',
      '泾河北岸': '渠首在泾阳县西北25公里泾河北岸。',
      '郑国': '由韩国水工郑国主持修建。'
    };
    
    return infoMap[name] || '暂无详细信息';
  }

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.dataType === 'edge') {
          return params.data.label;
        }
        return params.data.name + '<br/>' + getNodeInfo(params.data.name);
      },
      textStyle: {
        fontFamily: "点书小隶体"
      },
      position: function(point, params, dom, rect, size) {
        // 以鼠标为中点，显示在鼠标下方
        return [point[0] - size.contentSize[0] / 2, point[1] + 10];
      }
    },
    textStyle: {
      fontFamily: "点书小隶体"
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: [
          { name: '中心节点' },
          { name: '一级节点' },
          { name: '二级节点' },
          { name: '三级节点' }
        ],
        roam: true,
        zoom: 0.5,
        label: {
          show: true,
          fontFamily: "点书小隶体",
          fontSize: 12,
          position: 'right'
        },
        edgeLabel: {
          show: true,
          formatter: function(params) {
            return params.data.label;
          },
          fontFamily: "点书小隶体",
          fontSize: 12,
          color: '#555',
          position: 'middle'
        },
        force: {
          initLayout: 'circular',
          repulsion: 2000,
          edgeLength: [50, 100],
          gravity: 0.5
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
          width: 2
        }
      }
    ]
  };
  
  chart.setOption(option);
  
  
  // 窗口大小变化时重绘图表
  window.addEventListener('resize', () => {
    chart.resize();
  });
  
  return chart;
};

// 映射项目名称到对应的图表加载函数
export const chartMap = {
  '都江堰': loadDujiangyanChart,
  '郑国渠': loadZhenguoquChart
  // 可以添加更多的水利工程图表
};

// 主函数：根据项目名称加载对应图表
export const loadChartByName = (name, container) => {
  if (chartMap[name]) {
    return chartMap[name](container);
  }
  return null;
}; 
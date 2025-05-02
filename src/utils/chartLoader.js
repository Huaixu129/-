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
          edgeLength: 100,
          gravity: 0.5,
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

// 坎儿井图表数据
export const loadKanerjingChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);

  const nodes = [
    { name: '坎儿井', category: 0, symbolSize: 50, itemStyle: { color: '#FF7F50' } },
    { name: '建造要素', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '工程结构', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '历史价值', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '当代发展', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '起源', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '井、地下渠、地面渠', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '民族融合', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '节水高效', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '旅游文化', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } }
  ];

  const links = [
    { source: '坎儿井', target: '建造要素', label: '包含' },
    { source: '坎儿井', target: '工程结构', label: '组成' },
    { source: '坎儿井', target: '历史价值', label: '体现' },
    { source: '坎儿井', target: '当代发展', label: '延续' },
    { source: '建造要素', target: '起源', label: '起源' },
    { source: '工程结构', target: '井、地下渠、地面渠', label: '主要结构' },
    { source: '历史价值', target: '民族融合', label: '促进' },
    { source: '当代发展', target: '节水高效', label: '特点' },
    { source: '当代发展', target: '旅游文化', label: '发展' }
  ];

  function getNodeInfo(name) {
    const infoMap = {
      '坎儿井': '坎儿井是分布在新疆吐鲁番盆地的古老地下水利工程，被誉为“中国古代三大工程”之一。',
      '建造要素': '包含起源背景、地理条件、民族智慧等要素。',
      '工程结构': '由竖井、地下渠道、地面渠道、蓄水池等组成，系统复杂且科学。',
      '历史价值': '坎儿井促进了农业发展、民族融合，并作为重要文化遗产延续至今。',
      '当代发展': '随着现代水利技术发展，坎儿井仍在节水灌溉和文化旅游中发挥作用。',
      '起源': '起源于两千多年前，融合了中亚和中国古代水利技术。',
      '井、地下渠、地面渠': '坎儿井由竖井连通地下暗渠，最终引水至地表，形成自流灌溉。',
      '民族融合': '多民族共同参与建设与管理，促进了文化交流与融合。',
      '节水高效': '利用地形和渗水技术，极大减少蒸发，节省宝贵水源。',
      '旅游文化': '如今坎儿井成为重要的旅游景点，传播水利文化与历史价值。'
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
          { name: '二级节点' }
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
          edgeLength: 100,
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

  window.addEventListener('resize', () => {
    chart.resize();
  });

  return chart;
};

// 灵渠图表数据
export const loadLingquChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);

  const nodes = [
    { name: '灵渠', category: 0, symbolSize: 50, itemStyle: { color: '#FF7F50' } },
    { name: '干渠概况', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '主要支流', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '工程构成', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '历史演变', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '北渠', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '南渠', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '始安水', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '石龙江', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '马尿河', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '三青岩水', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '西岭河', category: 2, symbolSize: { color: '#3CB371' } },
    { name: '灵水', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '铧嘴', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '大小天平', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '泄水天平', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '水涵', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '陡门', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '堰坝', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '秦堤', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '桥梁', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '秦代开凿', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '唐修陡门', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '清重建铧嘴', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '现代修复', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
  ];

  const links = [
    { source: '灵渠', target: '干渠概况', label: '包含' },
    { source: '灵渠', target: '主要支流', label: '包含' },
    { source: '灵渠', target: '工程构成', label: '包含' },
    { source: '灵渠', target: '历史演变', label: '经历' },
    { source: '干渠概况', target: '北渠', label: '包括' },
    { source: '干渠概况', target: '南渠', label: '包括' },
    { source: '主要支流', target: '始安水', label: '包含' },
    { source: '主要支流', target: '石龙江', label: '包含' },
    { source: '主要支流', target: '马尿河', label: '包含' },
    { source: '主要支流', target: '三青岩水', label: '包含' },
    { source: '主要支流', target: '西岭河', label: '包含' },
    { source: '主要支流', target: '灵水', label: '包含' },
    { source: '工程构成', target: '铧嘴', label: '包含' },
    { source: '工程构成', target: '大小天平', label: '包含' },
    { source: '工程构成', target: '泄水天平', label: '包含' },
    { source: '工程构成', target: '水涵', label: '包含' },
    { source: '工程构成', target: '陡门', label: '包含' },
    { source: '工程构成', target: '堰坝', label: '包含' },
    { source: '工程构成', target: '秦堤', label: '包含' },
    { source: '工程构成', target: '桥梁', label: '包含' },
    { source: '历史演变', target: '秦代开凿', label: '始建于' },
    { source: '历史演变', target: '唐修陡门', label: '首次现陡门' },
    { source: '历史演变', target: '清重建铧嘴', label: '重建铧嘴于' },
    { source: '历史演变', target: '现代修复', label: '现代修复了' },
  ];

  const getNodeInfo = (name) => {
    const infoMap = {
      '灵渠': '沟通湘漓，古代水利工程。',
      '干渠概况': '包含南北渠相关情况。',
      '主要支流': '有自然及其他多种支流。',
      '工程构成': '由多种设施共同构成。',
      '历史演变': '历经多次修建与变革。',
      '北渠': '人工开凿，与湘江故道平行，长3.25公里。',
      '南渠': '长约33.15公里，引湘水3分，部分人工航道。',
      '始安水': '源于越城峤山谷，汇入灵渠。',
      '石龙江': '源出台板石，曲折入灵渠。',
      '马尿河': '源自唐公背山，北流后入渠。',
      '三青岩水': '源于三青岩，流程较长入渠。',
      '西岭河': '灵渠自然支流。',
      '灵水': '灵渠自然支流。',
      '铧嘴': '分水设施，在拦河坝上游。',
      '大小天平': '拦截海洋河，呈人字形。',
      '泄水天平': '用于调节灵渠水量。',
      '水涵': '堤内块石砌筑，用于灌溉。',
      '陡门': '壅高水位，蓄水通航。',
      '堰坝': '栏河蓄水，有两种类型。',
      '秦堤': '用于防洪护渠。',
      '桥梁': '灵渠附属交通设施。',
      '秦代开凿': '灵渠始建于秦代。',
      '唐修陡门': '唐宝历元年首次出现陡门。',
      '清重建铧嘴': '清光绪十一年重建铧嘴。',
      '现代修复': '修复铧嘴石堤约30米。',
    };
    return infoMap[name] || '';
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.dataType === 'edge') {
          return params.data.label;
        }
        return params.data.name + '<br/>' + getNodeInfo(params.data.name);
      },
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
        ],
        roam: true,
        zoom: 0.5,
        label: {
          show: true,
          position: 'inside',
        },
        force: {
          repulsion: 2000,
          edgeLength: 100,
          gravity: 0.5,
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
        },
        edgeLabel: {
          show: true,
          formatter: (params) => params.data.label,
        },
      },
    ],
  };

  chart.setOption(option);
};

// 木兰陂图表数据
export const loadMulanpiChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);

  const nodes = [
    { name: '木兰陂', category: 0, symbolSize: 50, itemStyle: { color: '#FF7F50' } },
    { name: '历史沿革', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '工程结构', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '相关人物', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '历史地位', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '首次筑陂', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '二次筑陂', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '三次筑陂', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '陂首枢纽', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '渠系工程', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '堤防工程', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '钱四娘', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '冯智日', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '李宏', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '工程价值', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } }
  ];

  const links = [
    { source: '木兰陂', target: '历史沿革', label: '历经' },
    { source: '木兰陂', target: '工程结构', label: '包含' },
    { source: '木兰陂', target: '相关人物', label: '涉及' },
    { source: '木兰陂', target: '历史地位', label: '具备' },
    { source: '历史沿革', target: '首次筑陂', label: '首次尝试' },
    { source: '历史沿革', target: '二次筑陂', label: '再次尝试' },
    { source: '历史沿革', target: '三次筑陂', label: '最终建成' },
    { source: '工程结构', target: '陂首枢纽', label: '包含' },
    { source: '工程结构', target: '渠系工程', label: '包含' },
    { source: '工程结构', target: '堤防工程', label: '包含' },
    { source: '相关人物', target: '钱四娘', label: '包括' },
    { source: '相关人物', target: '冯智日', label: '包括' },
    { source: '相关人物', target: '李宏', label: '包括' },
    { source: '历史地位', target: '工程价值', label: '体现为' }
  ];

  const infoMap = {
    '木兰陂': '位于福建莆田，是重要古代水利工程。',
    '历史沿革': '经历三次主要筑陂事件才最终建成。',
    '工程结构': '包含陂首枢纽、渠系、堤防等工程。',
    '相关人物': '有钱四娘、冯智日、李宏等为筑陂作出贡献。',
    '历史地位': '在工程价值方面具有重要意义。',
    '首次筑陂': '北宋治平元年（1064年），钱四娘筹钱十万缗筑陂，后被溪洪冲毁。',
    '二次筑陂': '北宋治平年间（1064-1067年），林从世在下游建陂，接近完工时被潮水冲垮。',
    '三次筑陂': '北宋熙宁八年（1075年），李宏在冯智日协助下筑陂，元丰六年（1083年）首枢纽工程完工。',
    '陂首枢纽': '由溢流堰、进水闸等组成，拦河坝长219.13米，有不同功能分区。',
    '渠系工程': '分南洋、北洋渠系，总长355千米，灌溉南洋、北洋平原。',
    '堤防工程': '南北堤总长87.48千米，用于防洪、挡潮、排涝。',
    '钱四娘': '北宋福州长乐人，首次尝试筑陂失败殉身，为五代吴越王钱镠之后。',
    '冯智日': '北宋高僧，协助李宏选择陂址并成功筑陂。',
    '李宏': '福建侯官人，应诏募来莆，捐家财续建木兰陂，积劳成疾去世。',
    '工程价值': '是拒咸蓄淡灌溉工程，中国现存完整古代灌溉工程，五大古陂之一。'
  };

  chart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.dataType === 'edge') {
          return params.data.label;
        }
        return params.data.name + '<br/>' + (infoMap[params.data.name] || '');
      }
    },
    series: [{
      type: 'graph',
      layout: 'force',
      data: nodes,
      links: links,
      categories: [
        { name: '中心节点' },
        { name: '一级节点' },
        { name: '二级节点' }
      ],
      roam: true,
      label: {
        show: true,
        position: 'inside'
      },
      force: {
        initLayout: 'circular',
        repulsion: 2000,
        edgeLength: [50, 100],
        gravity: 0.5
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3
      },
      edgeLabel: {
        show: true,
        formatter: function(params) {
          return params.data.label;
        }
      }
    }]
  });

  chart.on('mouseover', function(params) {
    if (params.dataType === 'node') {
      console.log(params.data.name + ': ' + (infoMap[params.data.name] || ''));
    }
  });
};

// 它山堰图表数据
export const loadTuoshanyanChart = (chartContainer) => {
  const chart = echarts.init(chartContainer);

  const nodes = [
    { name: '它山堰', category: 0, symbolSize: 50, itemStyle: { color: '#FF7F50' } },
    { name: '地理位置', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '基础信息', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '结构组成', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '历史沿革', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '工程特点', category: 1, symbolSize: 40, itemStyle: { color: '#6495ED' } },
    { name: '具体坐标', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: 'AD833', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '解决水患', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '阻咸蓄淡', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '拦河坝', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '分水系统', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '附属设施', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '配套工程', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '唐代始建', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '宋代修建', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '明清改造', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '四大工程', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '科学设计', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } },
    { name: '技术成就', category: 2, symbolSize: 30, itemStyle: { color: '#3CB371' } }
  ];

  const links = [
    { source: '它山堰', target: '地理位置', label: '位于' },
    { source: '它山堰', target: '基础信息', label: '具备' },
    { source: '它山堰', target: '结构组成', label: '包含' },
    { source: '它山堰', target: '历史沿革', label: '历经' },
    { source: '它山堰', target: '工程特点', label: '拥有' },
    { source: '地理位置', target: '具体坐标', label: '坐标为' },
    { source: '基础信息', target: 'AD833', label: '建造于' },
    { source: '基础信息', target: '解决水患', label: '建造目的' },
    { source: '基础信息', target: '阻咸蓄淡', label: '主要功能' },
    { source: '结构组成', target: '拦河坝', label: '主体是' },
    { source: '结构组成', target: '分水系统', label: '包含' },
    { source: '结构组成', target: '附属设施', label: '包含' },
    { source: '结构组成', target: '配套工程', label: '包含' },
    { source: '历史沿革', target: '唐代始建', label: '始建于' },
    { source: '历史沿革', target: '宋代修建', label: '宋代有' },
    { source: '历史沿革', target: '明清改造', label: '明清进行' },
    { source: '工程特点', target: '四大工程', label: '地位体现' },
    { source: '工程特点', target: '科学设计', label: '设计特色' },
    { source: '工程特点', target: '技术成就', label: '技术成果' }
  ];

  const infoMap = {
    '它山堰': '是著名古代水利工程，位于特定地理位置，有重要作用。',
    '地理位置': '它山堰所处的经纬度位置信息。',
    '基础信息': '涵盖建造时间、背景、功能等基本信息。',
    '结构组成': '包含主体、分水、附属和配套工程等结构。',
    '历史沿革': '历经唐、宋、明清等时期的建造和改造。',
    '工程特点': '具有重要历史地位和科学设计、技术成就。',
    '具体坐标': '经度121.352615，纬度29.767303。',
    'AD833': '唐太和七年（公元833年）由县令王元暐主持建造。',
    '解决水患': '为解决海水倒灌、农田卤化、城市用水困难而建。',
    '阻咸蓄淡': '能阻咸蓄淡，灌溉鄞西平原农田，供宁波城用水。',
    '拦河坝': '条石砌筑，全长134.4米，高3.05米，宽4.8米，坝体中空。',
    '分水系统': '涝时七分入江、三分入溪，旱时七分入溪、三分入江。',
    '附属设施': '包括乌金碶等，还有回沙闸、洪水湾塘等。',
    '配套工程': '清末民初有九坝、五堰、十三塘，建国后进行整治。',
    '唐代始建': '833年县令王元暐主持建造，建庙纪念，旁建小庙纪念“十兄弟”。',
    '宋代修建': '约1068年建风棚碶，1242年建回沙闸，1255年左右置三坝。',
    '明清改造': '明代嘉靖十五年加高堰顶，清代咸丰七年也有相关举措（文档未详细提及）。',
    '四大工程': '与都江堰、郑国渠、灵渠并称“中国四大古代水利工程”。',
    '科学设计': '有倾斜坝基、鼓形平面、中央加厚等科学设计。',
    '技术成就': '是我国首次出现的块石砌筑重力型拦河滚水坝，提高坝体稳定性。'
  };

  chart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.dataType === 'edge') {
          return params.data.label;
        }
        return params.data.name + '<br/>' + (infoMap[params.data.name] || '');
      }
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
          { name: '二级节点' }
        ],
        roam: true,
        label: {
          show: true,
          position: 'inside'
        },
        force: {
          initLayout: 'circular',
          repulsion: 2000,
          edgeLength: [50, 100],
          gravity: 0.5
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        edgeLabel: {
          show: true,
          formatter: function(params) {
            return params.data.label;
          }
        }
      }
    ]
  });

  chart.on('mouseover', function(params) {
    if (params.dataType === 'node') {
      console.log(params.data.name + ': ' + (infoMap[params.data.name] || ''));
    }
  });
};

// 映射项目名称到对应的图表加载函数
export const chartMap = {
  '都江堰': loadDujiangyanChart,
  '郑国渠': loadZhenguoquChart,
  '坎儿井': loadKanerjingChart,
  '灵渠': loadLingquChart,
  '木兰陂': loadMulanpiChart,
  '它山堰': loadTuoshanyanChart
};

// 主函数：根据项目名称加载对应图表
export const loadChartByName = (name, container) => {
  if (chartMap[name]) {
    return chartMap[name](container);
  }
  return null;
}; 
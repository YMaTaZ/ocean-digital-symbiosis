// ==========================================
// 1. 中英文双语字典库 (全局覆盖) 
// ==========================================
const i18nData = {
    zh: {
        navTitle: "🌊 海洋数字共生计划",
        viewBtnInst: "🏢 切换至机构专业版",
        viewBtnPub: "🌐 切换至公众简易版",
        pubTitle: "南海海域实时生态状态",
        pubAlertTitle: "⚠️ 当前状态：轻度预警",
        pubAlertDesc: "南海 X 海域目前处于珊瑚修复期，生态系统正处于脆弱的恢复阶段。",
        pubGuideTitle: "行动指南",
        pubTourist: "游客群体：",
        pubTouristDesc: "请避免在该区域潜水踩踏，使用环保型防晒霜。",
        pubFisher: "渔民群体：",
        pubFisherDesc: "请暂缓底拖网作业，避免抛锚破坏底层生境。",
        instTitle: "环保部门数据决策大屏",
        instDataTitle: "底层传感器实时物理数据",
        instTemp: "实时水温:",
        instHigh: "偏高",
        instSalinity: "海水盐度:",
        instDO: "溶解氧量:",
        instAITitle: "AI 视觉实时量化指标",
        instCoralDeg: "珊瑚退化率:",
        instWarnTrigger: "触发轻度预警阈值",
        instSeagrass: "海草床覆盖率:",
        instBio: "优势生物群落:",
        instBioDesc: "雀鲷科 (正常)",
        chartTitle: "生态抗冲击力 (近12个月模拟走势)",
        chartLegendCoral: "珊瑚健康指数",
        chartLegendSeagrass: "海草覆盖率"
    },
    en: {
        navTitle: "🌊 Ocean Digital Symbiosis",
        viewBtnInst: "🏢 Switch to Institutional View",
        viewBtnPub: "🌐 Switch to Public View",
        pubTitle: "Real-time Ecological Status in South China Sea",
        pubAlertTitle: "⚠️ Current Status: Mild Warning",
        pubAlertDesc: "Area X in the South China Sea is currently in a coral restoration phase. The ecosystem is in a fragile recovery stage.",
        pubGuideTitle: "Action Guide",
        pubTourist: "Tourists:",
        pubTouristDesc: "Please avoid diving/trampling in this area and use eco-friendly sunscreen.",
        pubFisher: "Fishermen:",
        pubFisherDesc: "Please suspend bottom trawling and avoid anchoring to protect benthic habitats.",
        instTitle: "Environmental Dept. Decision Dashboard",
        instDataTitle: "Real-time Physical Data from Sensors",
        instTemp: "Water Temp:",
        instHigh: "High",
        instSalinity: "Salinity:",
        instDO: "Dissolved Oxygen:",
        instAITitle: "AI Visual Quantification Metrics",
        instCoralDeg: "Coral Degradation:",
        instWarnTrigger: "Mild Warning Triggered",
        instSeagrass: "Seagrass Coverage:",
        instBio: "Dominant Species:",
        instBioDesc: "Pomacentridae (Normal)",
        chartTitle: "Ecological Resilience Trend (12-Month Simulation)",
        chartLegendCoral: "Coral Health Index",
        chartLegendSeagrass: "Seagrass Coverage"
    }
};

let currentLang = 'zh';
let isPublicView = true;

// ==========================================
// 2. 获取 DOM 元素与 ECharts 初始化 [cite: 37, 42]
// ==========================================
const langToggleBtn = document.getElementById('langToggleBtn');
const viewToggleBtn = document.getElementById('viewToggleBtn');
const publicView = document.getElementById('publicView');
const institutionalView = document.getElementById('institutionalView');

const chartDom = document.getElementById('mainChart');
let myChart = null;

if (chartDom) {
    myChart = echarts.init(chartDom);
    const option = {
        title: { text: i18nData[currentLang].chartTitle, textStyle: { color: '#374151', fontSize: 14, fontWeight: 'normal' }, left: 'center' },
        tooltip: { trigger: 'axis', backgroundColor: 'rgba(31, 41, 55, 0.9)', textStyle: { color: '#fff' } },
        legend: { data: [i18nData[currentLang].chartLegendCoral, i18nData[currentLang].chartLegendSeagrass], bottom: 0, textStyle: { color: '#6b7280' } },
        grid: { left: '5%', right: '5%', bottom: '15%', containLabel: true },
        xAxis: { type: 'category', boundaryGap: false, data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], axisLabel: { color: '#6b7280' } },
        yAxis: { type: 'value', axisLabel: { color: '#6b7280' }, splitLine: { lineStyle: { type: 'dashed', color: '#e5e7eb' } } },
        series: [
            { name: i18nData[currentLang].chartLegendCoral, type: 'line', smooth: true, itemStyle: { color: '#ef4444' }, lineStyle: { width: 3 }, data: [85, 84, 82, 80, 75, 65, 58, 55, 60, 65, 68, 70] },
            { name: i18nData[currentLang].chartLegendSeagrass, type: 'line', smooth: true, itemStyle: { color: '#10b981' }, lineStyle: { width: 3 }, data: [78, 77, 76, 75, 75, 73, 72, 70, 71, 71, 72, 73] }
        ]
    };
    myChart.setOption(option);
    
    // 窗口缩放时自适应重绘图表
    window.addEventListener('resize', () => myChart.resize());
}

// ==========================================
// 3. 语言渲染核心函数 
// ==========================================
function updateLanguage() {
    // 替换普通 HTML 文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) el.innerText = i18nData[currentLang][key];
    });

    // 单独处理视图切换按钮文字
    viewToggleBtn.innerText = isPublicView ? i18nData[currentLang].viewBtnInst : i18nData[currentLang].viewBtnPub;

    // 动态无缝更新 ECharts 图表语言配置项 
    if (myChart) {
        myChart.setOption({
            title: { text: i18nData[currentLang].chartTitle },
            legend: { data: [i18nData[currentLang].chartLegendCoral, i18nData[currentLang].chartLegendSeagrass] },
            series: [
                { name: i18nData[currentLang].chartLegendCoral },
                { name: i18nData[currentLang].chartLegendSeagrass }
            ]
        });
    }
}

// ==========================================
// 4. 事件监听器：视图切换与语言切换 [cite: 37, 44]
// ==========================================
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    langToggleBtn.innerText = currentLang === 'zh' ? '🌐 English' : '🌐 中文';
    updateLanguage();
});

viewToggleBtn.addEventListener('click', () => {
    isPublicView = !isPublicView;

    if (isPublicView) {
        publicView.style.display = 'block';
        institutionalView.style.display = 'none';
        document.body.classList.remove('bg-gray-100');
        document.body.classList.add('bg-blue-50');
        viewToggleBtn.classList.replace('bg-green-600', 'bg-blue-600');
        viewToggleBtn.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
    } else {
        publicView.style.display = 'none';
        institutionalView.style.display = 'block';
        document.body.classList.remove('bg-blue-50');
        document.body.classList.add('bg-gray-100');
        viewToggleBtn.classList.replace('bg-blue-600', 'bg-green-600');
        viewToggleBtn.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
        // 切换到机构视图时，强制重新计算图表尺寸防渲染错位
        if(myChart) setTimeout(() => myChart.resize(), 10);
    }
    updateLanguage();
});

// 初始化页面语言渲染
updateLanguage();

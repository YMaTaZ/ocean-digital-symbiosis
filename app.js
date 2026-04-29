// ==========================================
// 1. 扩展中英文双语字典库 
// ==========================================
const i18nData = {
    zh: {
        // 导航与切换
        navTitle: "🌊 海洋数字共生计划",
        viewBtnInst: "🏢 切换至机构专业版",
        viewBtnPub: "🌐 切换至公众简易版",
        
        // 公众版 - 珊瑚健康区域
        pubTitle: "南海海域实时生态状态",
        coralHealthTitle: "🪸 珊瑚健康状态",
        coralStatusHealthy: "珊瑚状态：健康繁荣",
        coralStatusWarning: "珊瑚状态：受压迫中",
        coralStatusDanger: "珊瑚状态：严重白化",
        coralStatusDesc: "所有环境指标处于最佳范围，珊瑚与虫黄藻保持健康共生关系。",
        coralWarningDesc: "警告：水温上升或污染加剧，珊瑚正在排出虫黄藻！",
        coralDangerDesc: "危险：珊瑚正在经历严重白化，如不及时改善环境可能导致死亡！",
        
        // 预警框
        pubAlertTitle: "⚠️ 当前状态：轻度预警",
        pubAlertDesc: "南海 X 海域目前处于珊瑚修复期，生态系统正处于脆弱的恢复阶段。",
        alertHighTemp: "⚠️ 警告：水温过高（>30°C），珊瑚正在排出共生藻发生白化！",
        alertLowPH: "⚠️ 警告：海水酸性过强（pH<7.8），珊瑚骨骼正在溶解！",
        alertHighPollution: "⚠️ 警告：污染程度严重（>80%），珊瑚生存空间受到严重威胁！",
        
        // 控制面板
        pubControlsTitle: "🎚️ 实时环境模拟器",
        sliderTempLabel: "海水温度：",
        sliderTempOptimal: "最适宜",
        sliderPHLabel: "海水酸碱度 (pH)：",
        sliderPHOptimal: "最适宜",
        sliderPollutionLabel: "污染程度：",
        pollutionLevelLow: "清洁",
        pollutionLevelModerate: "中度",
        pollutionLevelHigh: "严重",
        pollutionClean: "清洁",
        pollutionModerate: "中度",
        pollutionSevere: "严重",
        resetBtnText: "🔄 重置至最佳状态",
        
        // 行动指南
        pubGuideTitle: "📋 行动指南",
        pubTourist: "游客群体：",
        pubTouristDesc: "请避免在该区域潜水踩踏，使���环保型防晒霜。",
        pubFisher: "渔民群体：",
        pubFisherDesc: "请暂缓底拖网作业，避免抛锚破坏底层生境。",
        
        // 科普小知识
        triviaTitle: "你知道吗？",
        triviaTemp: "海水温度哪怕只升高 1-2°C，珊瑚就会因压力排出体内的虫黄藻，从而失去颜色并面临饿死的危险。虫黄藻是珊瑚的主要营养来源，没有它们，珊瑚会在几周内死亡。",
        triviaPH: "海洋酸化是"全球变暖的孪生兄弟"。大气中的二氧化碳被海水吸收后会形成碳酸，使海水pH值下降。pH下降的海水会腐蚀珊瑚骨骼，影响幼体发育，甚至导致成体溶解。",
        triviaPollution: "海洋污染（特别是塑料和化学物质）会在珊瑚表面形成保护膜，阻断氧气进入。同时，污染物会激发珊瑚的免疫反应，消耗珊瑚大量能量，使其更容易患病和白化。",
        triviaSymbiosis: "珊瑚与虫黄藻的共生关系是完美的互利关系：珊瑚提供虫黄藻光合作用所需的场所和养分，而虫黄藻通过光合作用为珊瑚供应 90% 的养分需求。这个关系一旦破裂，珊瑚难以维持生存。",
        triviaResilience: "海洋保护区可以增强珊瑚的抗冲击力。健康的珊瑚群落拥有更强的自我修复能力。研究表明，在禁渔区中的珊瑚白化恢复率比非保护区高出 50% 以上。",
        
        // 机构版
        instTitle: "环保部门数据决策大屏",
        instDataTitle: "底层传感器实时物理数据",
        instTemp: "实时水温:",
        instHigh: "偏高",
        instSalinity: "海水盐度:",
        instDO: "溶解氧量:",
        instAITitle: "AI 视觉实时量化指标",
        instCoralDeg: "珊瑚退化率:",
        instWarnTrigger: "触发轻度预警",
        instSeagrass: "海草床覆盖率:",
        instBio: "优势生物群落:",
        instBioDesc: "雀鲷科 (正常)",
        chartTitle: "生态抗冲击力 (近12个月模拟走势)",
        chartLegendCoral: "珊瑚健康指数",
        chartLegendSeagrass: "海草覆盖率"
    },
    en: {
        // Navigation & Toggle
        navTitle: "🌊 Ocean Digital Symbiosis",
        viewBtnInst: "🏢 Switch to Institutional View",
        viewBtnPub: "🌐 Switch to Public View",
        
        // Public View - Coral Health Section
        pubTitle: "Real-time Ecological Status in South China Sea",
        coralHealthTitle: "🪸 Coral Health Status",
        coralStatusHealthy: "Coral Status: Thriving",
        coralStatusWarning: "Coral Status: Under Stress",
        coralStatusDanger: "Coral Status: Severe Bleaching",
        coralStatusDesc: "All environmental indicators are in optimal range. Corals maintain a healthy symbiotic relationship with zooxanthellae.",
        coralWarningDesc: "Alert: Rising water temperature or pollution is causing corals to expel zooxanthellae!",
        coralDangerDesc: "Danger: Corals are experiencing severe bleaching. Without environmental improvement, they may die!",
        
        // Alert Box
        pubAlertTitle: "⚠️ Current Status: Mild Warning",
        pubAlertDesc: "Area X in the South China Sea is currently in a coral restoration phase. The ecosystem is in a fragile recovery stage.",
        alertHighTemp: "⚠️ Alert: Water temperature too high (>30°C), corals are expelling zooxanthellae and bleaching!",
        alertLowPH: "⚠️ Alert: Seawater is too acidic (pH<7.8), coral skeletons are dissolving!",
        alertHighPollution: "⚠️ Alert: Severe pollution (>80%), coral habitats are under severe threat!",
        
        // Control Panel
        pubControlsTitle: "🎚️ Real-time Environment Simulator",
        sliderTempLabel: "Water Temperature:",
        sliderTempOptimal: "Optimal",
        sliderPHLabel: "Water pH:",
        sliderPHOptimal: "Optimal",
        sliderPollutionLabel: "Pollution Level:",
        pollutionLevelLow: "Clean",
        pollutionLevelModerate: "Moderate",
        pollutionLevelHigh: "Severe",
        pollutionClean: "Clean",
        pollutionModerate: "Moderate",
        pollutionSevere: "Severe",
        resetBtnText: "🔄 Reset to Optimal",
        
        // Action Guide
        pubGuideTitle: "📋 Action Guide",
        pubTourist: "Tourists:",
        pubTouristDesc: "Please avoid diving/trampling in this area and use eco-friendly sunscreen.",
        pubFisher: "Fishermen:",
        pubFisherDesc: "Please suspend bottom trawling and avoid anchoring to protect benthic habitats.",
        
        // Trivia
        triviaTitle: "Did You Know?",
        triviaTemp: "Even a 1-2°C increase in seawater temperature can cause corals to expel their internal zooxanthellae, causing them to lose color and risk starvation. Zooxanthellae are the primary nutritional source for corals; without them, corals can die within weeks.",
        triviaPH: "Ocean acidification is 'the evil twin of global warming.' CO2 absorbed by seawater forms carbonic acid, lowering pH. Lower pH seawater erodes coral skeletons, affects larval development, and even dissolves mature corals.",
        triviaPollution: "Ocean pollution (especially plastics and chemicals) forms protective films on coral surfaces, blocking oxygen entry. Simultaneously, pollutants trigger coral immune responses, consuming enormous energy and making them more susceptible to disease and bleaching.",
        triviaSymbiosis: "The symbiotic relationship between corals and zooxanthellae is a perfect mutual relationship: corals provide zooxanthellae with space and nutrients for photosynthesis, while zooxanthellae supply 90% of coral nutrients through photosynthesis. Once broken, coral survival becomes difficult.",
        triviaResilience: "Marine protected areas strengthen coral resilience. Healthy coral communities have greater self-repair capacity. Research shows bleaching recovery rates in no-fishing zones are 50% higher than in unprotected areas.",
        
        // Institutional View
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

// 环境状态追踪
let envState = {
    temp: 26,
    ph: 8.1,
    pollution: 20
};

// 珊瑚健康状态枚举
const CoralStatus = {
    HEALTHY: 'healthy',
    WARNING: 'warning',
    DANGER: 'danger'
};

let currentCoralStatus = CoralStatus.HEALTHY;

// ==========================================
// 2. 获取 DOM 元素与 ECharts 初始化
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
            { name: i18nData[currentLang].chartLegendSeagrass, type: 'line', smooth: true, itemStyle: { color: '#10b981' }, lineStyle: { width: 3 }, data: [78, 77, 76, 75, 75, 73, 72, 70, 71, 71, 72, 74] }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}

// ==========================================
// 3. 珊瑚健康状态检测与联动函数
// ==========================================
function evaluateCoralHealth() {
    // 阈值判定
    const isHighTemp = envState.temp > 30;
    const isLowPH = envState.ph < 7.8;
    const isHighPollution = envState.pollution > 80;
    
    let newStatus = CoralStatus.HEALTHY;
    
    if (isHighTemp || isLowPH || isHighPollution) {
        // 判断严重程度
        if (isHighTemp || isHighPollution) {
            newStatus = CoralStatus.DANGER;
        } else {
            newStatus = CoralStatus.WARNING;
        }
    }
    
    // 如果状态改变，触发视觉更新
    if (newStatus !== currentCoralStatus) {
        updateCoralVisualization(newStatus);
        currentCoralStatus = newStatus;
    }
}

function updateCoralVisualization(status) {
    const coralBranches = document.getElementById('coralBranches');
    const bubbleContainer = document.getElementById('bubbleContainer');
    const coralStatusBox = document.getElementById('coralStatusBox');
    const alertBox = document.getElementById('alertBox');
    const coralStatusText = document.getElementById('coralStatusText');
    const alertDescription = document.getElementById('alertDescription');
    
    // 重置 class
    coralBranches.classList.remove('coral-bleaching', 'coral-recovering');
    
    if (status === CoralStatus.DANGER) {
        // 严重白化
        coralBranches.classList.add('coral-bleaching');
        bubbleContainer.style.opacity = '0';
        
        coralStatusBox.classList.remove('status-healthy', 'status-warning');
        coralStatusBox.classList.add('status-danger');
        coralStatusBox.querySelector('span[data-i18n]').setAttribute('data-i18n', 'coralStatusDanger');
        
        alertBox.classList.remove('hidden', 'alert-disappear');
        alertBox.classList.add('alert-appear');
        alertDescription.setAttribute('data-i18n', 'coralDangerDesc');
        
    } else if (status === CoralStatus.WARNING) {
        // 轻度白化
        coralBranches.classList.add('coral-bleaching');
        bubbleContainer.style.opacity = '0.3';
        
        coralStatusBox.classList.remove('status-healthy', 'status-danger');
        coralStatusBox.classList.add('status-warning');
        coralStatusBox.querySelector('span[data-i18n]').setAttribute('data-i18n', 'coralStatusWarning');
        
        alertBox.classList.remove('hidden', 'alert-disappear');
        alertBox.classList.add('alert-appear');
        alertDescription.setAttribute('data-i18n', 'coralWarningDesc');
        
    } else {
        // 健康状态
        coralBranches.classList.add('coral-recovering');
        bubbleContainer.style.opacity = '1';
        
        coralStatusBox.classList.remove('status-warning', 'status-danger');
        coralStatusBox.classList.add('status-healthy');
        coralStatusBox.querySelector('span[data-i18n]').setAttribute('data-i18n', 'coralStatusHealthy');
        
        alertBox.classList.add('alert-disappear');
        setTimeout(() => alertBox.classList.add('hidden'), 500);
        coralStatusText.setAttribute('data-i18n', 'coralStatusDesc');
    }
    
    // 重新翻译更新后的文本
    updateLanguage();
}

// ==========================================
// 4. 科普卡片生成函数
// ==========================================
function generateTrivia() {
    const triviaContainer = document.getElementById('triviaContainer');
    const triviaKeys = ['triviaTemp', 'triviaPH', 'triviaPollution', 'triviaSymbiosis', 'triviaResilience'];
    const icons = ['🌡️', '⚗️', '🚫', '🤝', '💪'];
    
    triviaContainer.innerHTML = triviaKeys.map((key, idx) => `
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition">
            <p class="text-sm text-gray-700">
                <span class="text-lg mr-2">${icons[idx]}</span>
                <span data-i18n="${key}">${i18nData[currentLang][key]}</span>
            </p>
        </div>
    `).join('');
}

// ==========================================
// 5. 语言渲染核心函数 
// ==========================================
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) {
            el.innerText = i18nData[currentLang][key];
        }
    });

    if (viewToggleBtn) {
        viewToggleBtn.innerText = isPublicView ? i18nData[currentLang].viewBtnInst : i18nData[currentLang].viewBtnPub;
    }

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
    
    // 重新生成科普卡片（更新语言）
    if (isPublicView) {
        generateTrivia();
    }
}

// ==========================================
// 6. 滑块事件监听器
// ==========================================
const tempSlider = document.getElementById('tempSlider');
const tempValue = document.getElementById('tempValue');

if (tempSlider) {
    tempSlider.addEventListener('input', (e) => {
        envState.temp = parseFloat(e.target.value);
        tempValue.innerText = `${envState.temp}°C`;
        evaluateCoralHealth();
    });
}

const phSlider = document.getElementById('phSlider');
const phValue = document.getElementById('phValue');

if (phSlider) {
    phSlider.addEventListener('input', (e) => {
        envState.ph = parseFloat(e.target.value);
        phValue.innerText = envState.ph.toFixed(1);
        evaluateCoralHealth();
    });
}

const pollutionSlider = document.getElementById('pollutionSlider');
const pollutionValue = document.getElementById('pollutionValue');

if (pollutionSlider) {
    pollutionSlider.addEventListener('input', (e) => {
        envState.pollution = parseInt(e.target.value);
        
        // 根据污染程度更新显示标签
        let pollutionLabel = i18nData[currentLang].pollutionLevelLow;
        if (envState.pollution > 60) {
            pollutionLabel = i18nData[currentLang].pollutionLevelHigh;
        } else if (envState.pollution > 30) {
            pollutionLabel = i18nData[currentLang].pollutionLevelModerate;
        }
        
        pollutionValue.innerText = pollutionLabel;
        evaluateCoralHealth();
    });
}

// 重置按钮
const resetBtn = document.getElementById('resetSlidersBtn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        envState.temp = 26;
        envState.ph = 8.1;
        envState.pollution = 20;
        
        tempSlider.value = 26;
        tempValue.innerText = '26°C';
        
        phSlider.value = 8.1;
        phValue.innerText = '8.1';
        
        pollutionSlider.value = 20;
        pollutionValue.innerText = i18nData[currentLang].pollutionLevelLow;
        
        evaluateCoralHealth();
    });
}

// ==========================================
// 7. 事件监听器：语言切换
// ==========================================
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        langToggleBtn.innerText = currentLang === 'zh' ? '🌐 English' : '🌐 中文';
        updateLanguage();
        console.log('Language changed to:', currentLang);
    });
} else {
    console.error('ERROR: langToggleBtn element not found!');
}

// ==========================================
// 8. 事件监听器：视图切换
// ==========================================
if (viewToggleBtn) {
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
            if(myChart) setTimeout(() => myChart.resize(), 10);
        }
        updateLanguage();
    });
} else {
    console.error('ERROR: viewToggleBtn element not found!');
}

// ==========================================
// 9. 页面初始化
// ==========================================
generateTrivia();
updateLanguage();

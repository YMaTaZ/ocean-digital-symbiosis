// ==========================================
// 1. 中英文双语字典库 (完整扩展版)
// ==========================================
const i18nData = {
    zh: {
        // Nav
        navTitle: "🌊 海洋数字共生计划",
        // Buttons
        viewBtnInst: "🏢 切换至机构专业版",
        viewBtnPub: "🌐 切换至公众简易版",

        // ── PUBLIC VIEW ──
        pubTitle: "南海海域实时生态状态",
        pubSubtitle: "实时生态监测系统",
        pubAlertTitle: "⚠️ 当前状态：轻度预警",
        pubAlertDesc: "南海 X 海域目前处于珊瑚修复期，生态系统正处于脆弱的恢复阶段。",

        // Coral Health
        pubCoralTitle: "🪸 珊瑚健康状态对比",
        pubCoralHealthy: "健康珊瑚",
        pubCoralHealthyDesc: "色彩鲜艳，生物多样性高",
        pubCoralRecovering: "修复中珊瑚",
        pubCoralRecoveringDesc: "白化中，需要人类保护",
        pubRecoveryLabel: "珊瑚整体恢复进度",

        // Three Metrics
        pubMetricsTitle: "🌡️ 海域关键健康指标",
        pubTempStatus: "偏高预警",
        pubTempLabel: "水温",
        pubPHStatus: "酸碱度安全",
        pubPHLabel: "海水 pH",
        pubPollutionStatus: "轻度影响",
        pubPollutionLabel: "污染程度",

        // Action Guide
        pubGuideTitle: "行动指南",
        pubTourist: "游客群体：",
        pubTouristDesc: "请避免在该区域潜水踩踏，使用环保型防晒霜。",
        pubFisher: "渔民群体：",
        pubFisherDesc: "请暂缓底拖网作业，避免抛锚破坏底层生境。",

        // ── INSTITUTIONAL VIEW ──
        instTitle: "// 环保部门数据决策大屏",

        // Sensor Panel
        instDataTitle: "// 传感器阵列 — 物理数据",
        instTemp: "实时水温",
        instHigh: "偏高",
        instSalinity: "海水盐度",
        instDO: "溶解氧量",
        instPH: "海水 pH",
        instPHStatus: "正常范围",
        instPollution: "水质污染指数",
        instPollutionStatus: "轻度影响",

        // AI Panel
        instAITitle: "// AI 视觉 — 量化指标",
        instCoralDeg: "珊瑚退化率",
        instWarnTrigger: "触发预警",
        instSeagrass: "海草床覆盖率",
        instBio: "优势生物群落",
        instBioDesc: "雀鲷科 (正常)",
        instScanCoverage: "扫描覆盖面积",

        // Holographic Scan
        instCoralScanTitle: "// 珊瑚 AI 测绘全息扫描",
        instHoloID: "目标编号: SCS-X-07",
        instHoloDepth: "水深: 12.4m",
        instHoloConf: "置信度: 97.3%",
        instHoloAlert: "检测到白化区域",
        instLegendHealthy: "健康",
        instLegendBleach: "白化",
        instLegendDead: "死亡",

        // Gauge Panels
        instGaugeTempTitle: "// 水温",
        instTempAlert: "▲ 超出安全阈值",
        instGaugePHTitle: "// 酸碱度",
        instPHAlert: "✓ 正常范围内",
        instGaugePollTitle: "// 水质污染",
        instPollAlert: "⚠ 轻度污染",

        // Chart
        instChartTitle: "// 生态抗冲击力 — 12 个月趋势",
        chartTitle: "生态抗冲击力 (近12个月模拟走势)",
        chartLegendCoral: "珊瑚健康指数",
        chartLegendSeagrass: "海草覆盖率",
        chartLegendTemp: "水温指数",
    },
    en: {
        // Nav
        navTitle: "🌊 Ocean Digital Symbiosis",
        // Buttons
        viewBtnInst: "🏢 Switch to Institutional View",
        viewBtnPub: "🌐 Switch to Public View",

        // ── PUBLIC VIEW ──
        pubTitle: "Real-time Ecological Status — South China Sea",
        pubSubtitle: "REAL-TIME ECOSYSTEM MONITOR",
        pubAlertTitle: "⚠️ Current Status: Mild Warning",
        pubAlertDesc: "Area X in the South China Sea is currently in a coral restoration phase. The ecosystem is in a fragile recovery stage.",

        // Coral Health
        pubCoralTitle: "🪸 Coral Health Comparison",
        pubCoralHealthy: "Healthy Coral",
        pubCoralHealthyDesc: "Vibrant colors, high biodiversity",
        pubCoralRecovering: "Recovering Coral",
        pubCoralRecoveringDesc: "Bleaching detected, protection needed",
        pubRecoveryLabel: "Overall Coral Recovery Progress",

        // Three Metrics
        pubMetricsTitle: "🌡️ Key Marine Health Indicators",
        pubTempStatus: "High — Warning",
        pubTempLabel: "Water Temp",
        pubPHStatus: "pH Safe",
        pubPHLabel: "Seawater pH",
        pubPollutionStatus: "Mild Impact",
        pubPollutionLabel: "Pollution Level",

        // Action Guide
        pubGuideTitle: "Action Guide",
        pubTourist: "Tourists:",
        pubTouristDesc: "Please avoid diving/trampling in this area and use eco-friendly sunscreen.",
        pubFisher: "Fishermen:",
        pubFisherDesc: "Please suspend bottom trawling and avoid anchoring to protect benthic habitats.",

        // ── INSTITUTIONAL VIEW ──
        instTitle: "// ENVIRONMENTAL DEPT. DECISION DASHBOARD",

        // Sensor Panel
        instDataTitle: "// SENSOR ARRAY — PHYSICAL",
        instTemp: "Water Temp",
        instHigh: "High",
        instSalinity: "Salinity",
        instDO: "Dissolved O₂",
        instPH: "Seawater pH",
        instPHStatus: "Normal Range",
        instPollution: "Water Quality Index",
        instPollutionStatus: "Mild Impact",

        // AI Panel
        instAITitle: "// AI-VISION — QUANTIFIED",
        instCoralDeg: "Coral Degradation",
        instWarnTrigger: "Warning Triggered",
        instSeagrass: "Seagrass Coverage",
        instBio: "Dominant Species",
        instBioDesc: "Pomacentridae (Normal)",
        instScanCoverage: "Scan Coverage Area",

        // Holographic Scan
        instCoralScanTitle: "// CORAL AI HOLOGRAPHIC SCAN",
        instHoloID: "TARGET_ID: SCS-X-07",
        instHoloDepth: "DEPTH: 12.4m",
        instHoloConf: "CONF: 97.3%",
        instHoloAlert: "BLEACH DETECTED",
        instLegendHealthy: "HEALTHY",
        instLegendBleach: "BLEACHING",
        instLegendDead: "DEAD",

        // Gauge Panels
        instGaugeTempTitle: "// TEMP",
        instTempAlert: "▲ ABOVE SAFE THRESHOLD",
        instGaugePHTitle: "// pH LEVEL",
        instPHAlert: "✓ WITHIN NORMAL RANGE",
        instGaugePollTitle: "// WQI POLL.",
        instPollAlert: "⚠ MILD CONTAMINATION",

        // Chart
        instChartTitle: "// ECOLOGICAL RESILIENCE — 12M TREND",
        chartTitle: "Ecological Resilience Trend (12-Month Simulation)",
        chartLegendCoral: "Coral Health Index",
        chartLegendSeagrass: "Seagrass Coverage",
        chartLegendTemp: "Temp Index",
    }
};

let currentLang = 'zh';
let isPublicView = true;

// ==========================================
// 2. DOM 元素获取
// ==========================================
const langToggleBtn      = document.getElementById('langToggleBtn');
const viewToggleBtn      = document.getElementById('viewToggleBtn');
const publicView         = document.getElementById('publicView');
const institutionalView  = document.getElementById('institutionalView');

// ==========================================
// 3. ECharts 初始化 (多系列 — 增加水温线)
// ==========================================
const chartDom = document.getElementById('mainChart');
let myChart = null;

function buildChartOption(lang) {
    return {
        backgroundColor: 'transparent',
        title: {
            text: i18nData[lang].chartTitle,
            textStyle: { color: '#94a3b8', fontSize: 13, fontWeight: 'normal', fontFamily: 'Orbitron, monospace' },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(4, 14, 30, 0.92)',
            borderColor: 'rgba(6,182,212,0.35)',
            borderWidth: 1,
            textStyle: { color: '#e2e8f0', fontSize: 12 }
        },
        legend: {
            data: [i18nData[lang].chartLegendCoral, i18nData[lang].chartLegendSeagrass, i18nData[lang].chartLegendTemp],
            bottom: 0,
            textStyle: { color: '#64748b', fontSize: 11 },
            inactiveColor: '#334155'
        },
        grid: { left: '5%', right: '5%', bottom: '15%', top: '12%', containLabel: true },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            axisLabel: { color: '#475569', fontFamily: 'Orbitron, monospace', fontSize: 10 },
            axisLine: { lineStyle: { color: 'rgba(6,182,212,0.2)' } },
            splitLine: { show: false }
        },
        yAxis: {
            type: 'value',
            axisLabel: { color: '#475569', fontFamily: 'Orbitron, monospace', fontSize: 10 },
            splitLine: { lineStyle: { type: 'dashed', color: 'rgba(6,182,212,0.1)' } },
            axisLine: { show: false }
        },
        series: [
            {
                name: i18nData[lang].chartLegendCoral,
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: { color: '#ef4444' },
                lineStyle: { width: 2.5, color: '#ef4444' },
                areaStyle: { color: { type: 'linear', x:0, y:0, x2:0, y2:1, colorStops: [{offset:0, color:'rgba(239,68,68,0.25)'},{offset:1, color:'rgba(239,68,68,0)'}] } },
                data: [85, 84, 82, 80, 75, 65, 58, 55, 60, 65, 68, 70]
            },
            {
                name: i18nData[lang].chartLegendSeagrass,
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: { color: '#10b981' },
                lineStyle: { width: 2.5, color: '#10b981' },
                areaStyle: { color: { type: 'linear', x:0, y:0, x2:0, y2:1, colorStops: [{offset:0, color:'rgba(16,185,129,0.2)'},{offset:1, color:'rgba(16,185,129,0)'}] } },
                data: [78, 77, 76, 75, 75, 73, 72, 70, 71, 71, 72, 73]
            },
            {
                name: i18nData[lang].chartLegendTemp,
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: { color: '#f59e0b' },
                lineStyle: { width: 2, color: '#f59e0b', type: 'dashed' },
                data: [28, 28.2, 28.5, 29, 29.3, 29.5, 29.8, 30, 29.7, 29.5, 29.2, 29.0]
            }
        ]
    };
}

function initChart() {
    if (!chartDom) return;
    if (myChart) {
        myChart.dispose();
        myChart = null;
    }
    myChart = echarts.init(chartDom, null, { renderer: 'canvas' });
    myChart.setOption(buildChartOption(currentLang));
    window.addEventListener('resize', () => myChart && myChart.resize());
}

// ==========================================
// 4. 语言渲染核心函数
// ==========================================
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key] !== undefined) {
            el.innerText = i18nData[currentLang][key];
        }
    });

    // View toggle button text
    if (viewToggleBtn) {
        viewToggleBtn.innerText = isPublicView
            ? i18nData[currentLang].viewBtnInst
            : i18nData[currentLang].viewBtnPub;
    }

    // Lang button text
    if (langToggleBtn) {
        langToggleBtn.innerText = currentLang === 'zh' ? '🌐 English' : '🌐 中文';
    }

    // Update chart language
    if (myChart) {
        myChart.setOption({
            title:  { text: i18nData[currentLang].chartTitle },
            legend: { data: [i18nData[currentLang].chartLegendCoral, i18nData[currentLang].chartLegendSeagrass, i18nData[currentLang].chartLegendTemp] },
            series: [
                { name: i18nData[currentLang].chartLegendCoral },
                { name: i18nData[currentLang].chartLegendSeagrass },
                { name: i18nData[currentLang].chartLegendTemp }
            ]
        });
    }
}

// ==========================================
// 5. 事件监听器：语言切换
// ==========================================
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage();
    });
} else {
    console.error('ERROR: langToggleBtn not found');
}

// ==========================================
// 6. 事件监听器：视图切换
// ==========================================
if (viewToggleBtn) {
    viewToggleBtn.addEventListener('click', () => {
        isPublicView = !isPublicView;

        if (isPublicView) {
            publicView.style.display = 'block';
            institutionalView.style.display = 'none';
            document.body.classList.add('pub-mode');
            // Swap button gradient class
            viewToggleBtn.classList.remove('green-mode');
        } else {
            publicView.style.display = 'none';
            institutionalView.style.display = 'block';
            document.body.classList.remove('pub-mode');
            viewToggleBtn.classList.add('green-mode');
            // Re-init chart after reveal to get correct dimensions
            setTimeout(() => {
                initChart();
            }, 50);
        }
        updateLanguage();
    });
} else {
    console.error('ERROR: viewToggleBtn not found');
}

// ==========================================
// 7. 初始化
// ==========================================
document.body.classList.add('pub-mode');
updateLanguage();

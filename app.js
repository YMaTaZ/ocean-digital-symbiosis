// ==========================================
// 1. 中英文双语字典库
// ==========================================
const i18nData = {
    zh: {
        // Nav
        navTitle: "🌊 海洋数字共生计划",
        viewBtnInst: "🏢 切换至机构专业版",
        viewBtnPub: "🌐 切换至公众简易版",

        // ── PUBLIC VIEW ──
        pubTitle: "南海海域实时生态状态",
        pubSubtitle: "实时生态监测系统",
        pubAlertTitle: "⚠️ 当前状态：轻度预警",
        pubAlertDesc: "南海 X 海域目前处于珊瑚修复期，生态系统正处于脆弱的恢复阶段。",

        // Dynamic alert text
        pubAlertSafeTitle: "✅ 当前状态：生态较稳定",
        pubAlertSafeDesc: "当前水温、酸碱度和污染程度都在相对安全范围内，珊瑚可以保持较好的共生状态。",
        pubAlertWatchTitle: "⚠️ 当前状态：轻度预警",
        pubAlertWatchDesc: "部分指标开始接近压力阈值，珊瑚仍可恢复，但需要减少人为干扰。",
        pubAlertTempDangerTitle: "⚠️ 警告：水温过高",
        pubAlertTempDangerDesc: "水温超过 30°C，珊瑚正在承受热压力，可能排出共生藻并发生白化。",
        pubAlertPHDangerTitle: "⚠️ 警告：海水酸化加重",
        pubAlertPHDangerDesc: "pH 过低会削弱珊瑚形成骨骼的能力，珊瑚礁结构会变得更脆弱。",
        pubAlertPollutionDangerTitle: "⚠️ 警告：污染程度过高",
        pubAlertPollutionDangerDesc: "污染程度已达到重度，浑浊水体和有害物质会显著降低珊瑚的恢复能力。",
        pubAlertMultiDangerTitle: "🚨 紧急警报：多重压力叠加",
        pubAlertMultiDangerDesc: "高温、酸化或污染正在同时影响珊瑚，白化风险快速上升，需要立即采取保护行动。",

        // Coral Health
        pubCoralTitle: "🪸 珊瑚健康状态模拟器",
        pubCoralHint: "拖动下方指标，观察珊瑚颜色和健康状态如何变化。",
        pubCoralStatusHealthy: "健康稳定",
        pubCoralStatusWatch: "轻度压力",
        pubCoralStatusDanger: "白化风险",
        pubRecoveryLabel: "珊瑚整体恢复进度",

        // Interactive Metrics
        pubMetricsTitle: "🌡️ 海域关键健康指标",
        pubSliderHint: "试着调高水温、降低 pH 或增加污染，看看珊瑚会发生什么。",
        pubTempStatus: "偏高预警",
        pubTempLabel: "水温",
        pubPHStatus: "酸碱度安全",
        pubPHLabel: "海水 pH",
        pubPollutionStatus: "轻度影响",
        pubPollutionLabel: "污染程度",
        pubTempSafe: "温度安全",
        pubTempWarn: "偏高预警",
        pubTempDanger: "高温危险",
        pubPHSafe: "酸碱度安全",
        pubPHWarn: "酸化预警",
        pubPHDanger: "酸化危险",
        pubPollutionClean: "水质较清洁",
        pubPollutionMild: "轻度影响",
        pubPollutionHeavy: "重度污染",

        // Trivia
        pubTriviaTitle: "科普小知识",
        pubTriviaSubtitle: "这些数字为什么会影响珊瑚？",
        pubTriviaTempTitle: "温度升高",
        pubTriviaTempDesc: "你知道吗？海水温度哪怕只升高 1–2°C，珊瑚就可能因压力排出体内的虫黄藻，从而失去颜色。",
        pubTriviaPHTitle: "海水变酸",
        pubTriviaPHDesc: "pH 下降代表海水更酸，珊瑚会更难形成坚硬骨骼，新的珊瑚也更难长大。",
        pubTriviaPollTitle: "污染增加",
        pubTriviaPollDesc: "污染物会让海水变浑浊，也可能带来有害藻类。珊瑚获得的阳光变少，恢复速度会变慢。",

        // Action Guide
        pubGuideTitle: "行动指南",
        pubTourist: "游客群体：",
        pubTouristDesc: "请避免在该区域潜水踩踏，使用环保型防晒霜。",
        pubFisher: "渔民群体：",
        pubFisherDesc: "请暂缓底拖网作业，避免抛锚破坏底层生境。",

        // ── INSTITUTIONAL VIEW ──
        instTitle: "// 环保部门数据决策大屏",
        instDataTitle: "// 传感器阵列 — 物理数据",
        instTemp: "实时水温",
        instHigh: "偏高",
        instSalinity: "海水盐度",
        instDO: "溶解氧量",
        instPH: "海水 pH",
        instPHStatus: "正常范围",
        instPollution: "水质污染指数",
        instPollutionStatus: "轻度影响",
        instAITitle: "// AI 视觉 — 量化指标",
        instCoralDeg: "珊瑚退化率",
        instWarnTrigger: "触发预警",
        instSeagrass: "海草床覆盖率",
        instBio: "优势生物群落",
        instBioDesc: "雀鲷科 (正常)",
        instScanCoverage: "扫描覆盖面积",
        instCoralScanTitle: "// 珊瑚 AI 测绘全息扫描",
        instHoloID: "目标编号: SCS-X-07",
        instHoloDepth: "水深: 12.4m",
        instHoloConf: "置信度: 97.3%",
        instHoloAlert: "检测到白化区域",
        instLegendHealthy: "健康",
        instLegendBleach: "白化",
        instLegendDead: "死亡",
        instGaugeTempTitle: "// 水温",
        instTempAlert: "▲ 超出安全阈值",
        instGaugePHTitle: "// 酸碱度",
        instPHAlert: "✓ 正常范围内",
        instGaugePollTitle: "// 水质污染",
        instPollAlert: "⚠ 轻度污染",
        instChartTitle: "// 生态抗冲击力 — 12 个月趋势",
        chartTitle: "生态抗冲击力 (近12个月模拟走势)",
        chartLegendCoral: "珊瑚健康指数",
        chartLegendSeagrass: "海草覆盖率",
        chartLegendTemp: "水温指数",
    },
    en: {
        // Nav
        navTitle: "🌊 Ocean Digital Symbiosis",
        viewBtnInst: "🏢 Switch to Institutional View",
        viewBtnPub: "🌐 Switch to Public View",

        // ── PUBLIC VIEW ──
        pubTitle: "Real-time Ecological Status — South China Sea",
        pubSubtitle: "REAL-TIME ECOSYSTEM MONITOR",
        pubAlertTitle: "⚠️ Current Status: Mild Warning",
        pubAlertDesc: "Area X in the South China Sea is currently in a coral restoration phase. The ecosystem is in a fragile recovery stage.",

        // Dynamic alert text
        pubAlertSafeTitle: "✅ Current Status: Relatively Stable",
        pubAlertSafeDesc: "Water temperature, pH, and pollution are all within a safer range. Coral can maintain a healthier symbiotic state.",
        pubAlertWatchTitle: "⚠️ Current Status: Mild Warning",
        pubAlertWatchDesc: "Some indicators are moving close to stress thresholds. Coral can still recover, but human disturbance should be reduced.",
        pubAlertTempDangerTitle: "⚠️ Warning: Water Temperature Too High",
        pubAlertTempDangerDesc: "Water temperature is above 30°C. Coral is under heat stress and may expel symbiotic algae, causing bleaching.",
        pubAlertPHDangerTitle: "⚠️ Warning: Ocean Acidification Increasing",
        pubAlertPHDangerDesc: "Low pH weakens coral skeleton formation, making reef structures more fragile.",
        pubAlertPollutionDangerTitle: "⚠️ Warning: Pollution Level Too High",
        pubAlertPollutionDangerDesc: "Pollution has reached a heavy level. Turbid water and harmful substances can greatly slow coral recovery.",
        pubAlertMultiDangerTitle: "🚨 Emergency: Multiple Stressors Combined",
        pubAlertMultiDangerDesc: "Heat, acidification, or pollution are affecting coral at the same time. Bleaching risk is rising quickly and protection action is needed now.",

        // Coral Health
        pubCoralTitle: "🪸 Coral Health Simulator",
        pubCoralHint: "Move the sliders below to see how coral color and health change.",
        pubCoralStatusHealthy: "Healthy Stable",
        pubCoralStatusWatch: "Mild Stress",
        pubCoralStatusDanger: "Bleaching Risk",
        pubRecoveryLabel: "Overall Coral Recovery Progress",

        // Interactive Metrics
        pubMetricsTitle: "🌡️ Key Marine Health Indicators",
        pubSliderHint: "Try increasing temperature, lowering pH, or raising pollution to see what happens to coral.",
        pubTempStatus: "High — Warning",
        pubTempLabel: "Water Temp",
        pubPHStatus: "pH Safe",
        pubPHLabel: "Seawater pH",
        pubPollutionStatus: "Mild Impact",
        pubPollutionLabel: "Pollution Level",
        pubTempSafe: "Safe Temperature",
        pubTempWarn: "High Warning",
        pubTempDanger: "Heat Danger",
        pubPHSafe: "pH Safe",
        pubPHWarn: "Acidification Warning",
        pubPHDanger: "Acidification Danger",
        pubPollutionClean: "Cleaner Water",
        pubPollutionMild: "Mild Impact",
        pubPollutionHeavy: "Heavy Pollution",

        // Trivia
        pubTriviaTitle: "Trivia / Knowledge",
        pubTriviaSubtitle: "Why do these numbers affect coral?",
        pubTriviaTempTitle: "Rising Temperature",
        pubTriviaTempDesc: "Did you know? Even a 1–2°C increase in seawater temperature can stress coral and make it expel zooxanthellae, so it loses color.",
        pubTriviaPHTitle: "More Acidic Water",
        pubTriviaPHDesc: "Lower pH means the ocean is more acidic. Coral then has a harder time building strong skeletons, and young coral grows more slowly.",
        pubTriviaPollTitle: "More Pollution",
        pubTriviaPollDesc: "Pollution can make water cloudy and bring harmful algae. Coral receives less sunlight, so its recovery becomes slower.",

        // Action Guide
        pubGuideTitle: "Action Guide",
        pubTourist: "Tourists:",
        pubTouristDesc: "Please avoid diving/trampling in this area and use eco-friendly sunscreen.",
        pubFisher: "Fishermen:",
        pubFisherDesc: "Please suspend bottom trawling and avoid anchoring to protect benthic habitats.",

        // ── INSTITUTIONAL VIEW ──
        instTitle: "// ENVIRONMENTAL DEPT. DECISION DASHBOARD",
        instDataTitle: "// SENSOR ARRAY — PHYSICAL",
        instTemp: "Water Temp",
        instHigh: "High",
        instSalinity: "Salinity",
        instDO: "Dissolved O₂",
        instPH: "Seawater pH",
        instPHStatus: "Normal Range",
        instPollution: "Water Quality Index",
        instPollutionStatus: "Mild Impact",
        instAITitle: "// AI-VISION — QUANTIFIED",
        instCoralDeg: "Coral Degradation",
        instWarnTrigger: "Warning Triggered",
        instSeagrass: "Seagrass Coverage",
        instBio: "Dominant Species",
        instBioDesc: "Pomacentridae (Normal)",
        instScanCoverage: "Scan Coverage Area",
        instCoralScanTitle: "// CORAL AI HOLOGRAPHIC SCAN",
        instHoloID: "TARGET_ID: SCS-X-07",
        instHoloDepth: "DEPTH: 12.4m",
        instHoloConf: "CONF: 97.3%",
        instHoloAlert: "BLEACH DETECTED",
        instLegendHealthy: "HEALTHY",
        instLegendBleach: "BLEACHING",
        instLegendDead: "DEAD",
        instGaugeTempTitle: "// TEMP",
        instTempAlert: "▲ ABOVE SAFE THRESHOLD",
        instGaugePHTitle: "// pH LEVEL",
        instPHAlert: "✓ WITHIN NORMAL RANGE",
        instGaugePollTitle: "// WQI POLL.",
        instPollAlert: "⚠ MILD CONTAMINATION",
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

// Public interactive elements
const alertTitleEl       = document.querySelector('[data-i18n="pubAlertTitle"]');
const alertDescEl        = document.querySelector('[data-i18n="pubAlertDesc"]');
const tempSlider         = document.getElementById('tempSlider');
const phSlider           = document.getElementById('phSlider');
const pollutionSlider    = document.getElementById('pollutionSlider');
const tempValue          = document.getElementById('tempValue');
const phValue            = document.getElementById('phValue');
const pollutionValue     = document.getElementById('pollutionValue');
const tempStatus         = document.getElementById('tempStatus');
const phStatus           = document.getElementById('phStatus');
const pollutionStatus    = document.getElementById('pollutionStatus');
const interactiveCoralCard = document.getElementById('interactiveCoralCard');
const dynamicCoralArt    = document.getElementById('dynamicCoralArt');
const coralStatusBadge   = document.getElementById('coralStatusBadge');
const recoveryValue      = document.getElementById('recoveryValue');
const recoveryBar        = document.getElementById('recoveryBar');

// ==========================================
// 3. ECharts 初始化，机构版保持原样
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
            data: [
                i18nData[lang].chartLegendCoral,
                i18nData[lang].chartLegendSeagrass,
                i18nData[lang].chartLegendTemp
            ],
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
                areaStyle: {
                    color: {
                        type: 'linear',
                        x:0,
                        y:0,
                        x2:0,
                        y2:1,
                        colorStops: [
                            {offset:0, color:'rgba(239,68,68,0.25)'},
                            {offset:1, color:'rgba(239,68,68,0)'}
                        ]
                    }
                },
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
                areaStyle: {
                    color: {
                        type: 'linear',
                        x:0,
                        y:0,
                        x2:0,
                        y2:1,
                        colorStops: [
                            {offset:0, color:'rgba(16,185,129,0.2)'},
                            {offset:1, color:'rgba(16,185,129,0)'}
                        ]
                    }
                },
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
// 4. 公众版滑块联动逻辑
// ==========================================
function setBadgeState(el, stateClass, textKey) {
    if (!el) return;

    el.className = `status-badge ${stateClass} mt-3`;
    el.textContent = i18nData[currentLang][textKey];
}

function updateSliderFill(slider) {
    if (!slider) return;

    const min = Number(slider.min);
    const max = Number(slider.max);
    const value = Number(slider.value);
    const percent = ((value - min) / (max - min)) * 100;

    slider.style.setProperty('--slider-progress', `${percent}%`);
}

function updateCoralExperience() {
    if (!tempSlider || !phSlider || !pollutionSlider) return;

    const temp = Number(tempSlider.value);
    const ph = Number(phSlider.value);
    const pollution = Number(pollutionSlider.value);

    // 实时数值
    if (tempValue) tempValue.textContent = `${temp.toFixed(1)}°C`;
    if (phValue) phValue.textContent = ph.toFixed(2);
    if (pollutionValue) pollutionValue.textContent = `WQI ${Math.round(pollution)}`;

    [tempSlider, phSlider, pollutionSlider].forEach(updateSliderFill);

    // 单项状态
    const tempDanger = temp >= 30;
    const tempWarn = temp >= 29 && temp < 30;

    const phDanger = ph <= 7.7;
    const phWarn = ph > 7.7 && ph <= 7.9;

    const pollutionDanger = pollution >= 70;
    const pollutionWarn = pollution >= 40 && pollution < 70;

    setBadgeState(
        tempStatus,
        tempDanger ? 'danger' : tempWarn ? 'warn' : 'safe',
        tempDanger ? 'pubTempDanger' : tempWarn ? 'pubTempWarn' : 'pubTempSafe'
    );

    setBadgeState(
        phStatus,
        phDanger ? 'danger' : phWarn ? 'warn' : 'safe',
        phDanger ? 'pubPHDanger' : phWarn ? 'pubPHWarn' : 'pubPHSafe'
    );

    setBadgeState(
        pollutionStatus,
        pollutionDanger ? 'danger' : pollutionWarn ? 'mild' : 'safe',
        pollutionDanger ? 'pubPollutionHeavy' : pollutionWarn ? 'pubPollutionMild' : 'pubPollutionClean'
    );

    const dangerCount = [tempDanger, phDanger, pollutionDanger].filter(Boolean).length;
    const warningCount = [tempWarn, phWarn, pollutionWarn].filter(Boolean).length;

    let state = 'healthy';
    let alertTitleKey = 'pubAlertSafeTitle';
    let alertDescKey = 'pubAlertSafeDesc';
    let statusKey = 'pubCoralStatusHealthy';

    // 风险分数用于恢复进度：越热、越酸、越脏，进度越低
    const tempRisk = Math.max(0, (temp - 28) * 7);
    const phRisk = Math.max(0, (8.1 - ph) * 28);
    const pollutionRisk = pollution * 0.38;
    const recovery = Math.max(12, Math.round(92 - tempRisk - phRisk - pollutionRisk));

    if (dangerCount >= 2) {
        state = 'danger';
        alertTitleKey = 'pubAlertMultiDangerTitle';
        alertDescKey = 'pubAlertMultiDangerDesc';
        statusKey = 'pubCoralStatusDanger';
    } else if (tempDanger) {
        state = 'danger';
        alertTitleKey = 'pubAlertTempDangerTitle';
        alertDescKey = 'pubAlertTempDangerDesc';
        statusKey = 'pubCoralStatusDanger';
    } else if (pollutionDanger) {
        state = 'danger';
        alertTitleKey = 'pubAlertPollutionDangerTitle';
        alertDescKey = 'pubAlertPollutionDangerDesc';
        statusKey = 'pubCoralStatusDanger';
    } else if (phDanger) {
        state = 'danger';
        alertTitleKey = 'pubAlertPHDangerTitle';
        alertDescKey = 'pubAlertPHDangerDesc';
        statusKey = 'pubCoralStatusDanger';
    } else if (warningCount > 0) {
        state = 'watch';
        alertTitleKey = 'pubAlertWatchTitle';
        alertDescKey = 'pubAlertWatchDesc';
        statusKey = 'pubCoralStatusWatch';
    }

    if (alertTitleEl) {
        alertTitleEl.textContent = i18nData[currentLang][alertTitleKey];
    }

    if (alertDescEl) {
        alertDescEl.textContent = i18nData[currentLang][alertDescKey];
    }

    if (interactiveCoralCard) {
        interactiveCoralCard.classList.remove(
            'coral-state-healthy',
            'coral-state-watch',
            'coral-state-danger'
        );
        interactiveCoralCard.classList.add(`coral-state-${state}`);
    }

    if (dynamicCoralArt) {
        dynamicCoralArt.classList.remove(
            'healthy-state',
            'watch-state',
            'danger-state'
        );
        dynamicCoralArt.classList.add(`${state}-state`);
    }

    if (coralStatusBadge) {
        coralStatusBadge.className = `coral-status-badge coral-status-${state}`;
        coralStatusBadge.textContent = i18nData[currentLang][statusKey];
    }

    if (recoveryValue) {
        recoveryValue.textContent = `${recovery}%`;
    }

    if (recoveryBar) {
        recoveryBar.style.width = `${recovery}%`;
        recoveryBar.classList.toggle('danger-progress', state === 'danger');
        recoveryBar.classList.toggle('watch-progress', state === 'watch');
    }
}

function bindPublicSliders() {
    [tempSlider, phSlider, pollutionSlider].forEach(slider => {
        if (!slider) return;
        slider.addEventListener('input', updateCoralExperience);
    });
}

// ==========================================
// 5. 语言渲染核心函数
// ==========================================
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');

        if (i18nData[currentLang][key] !== undefined) {
            el.innerText = i18nData[currentLang][key];
        }
    });

    if (viewToggleBtn) {
        viewToggleBtn.innerText = isPublicView
            ? i18nData[currentLang].viewBtnInst
            : i18nData[currentLang].viewBtnPub;
    }

    if (langToggleBtn) {
        langToggleBtn.innerText = currentLang === 'zh' ? '🌐 English' : '🌐 中文';
    }

    if (myChart) {
        myChart.setOption({
            title:  { text: i18nData[currentLang].chartTitle },
            legend: {
                data: [
                    i18nData[currentLang].chartLegendCoral,
                    i18nData[currentLang].chartLegendSeagrass,
                    i18nData[currentLang].chartLegendTemp
                ]
            },
            series: [
                { name: i18nData[currentLang].chartLegendCoral },
                { name: i18nData[currentLang].chartLegendSeagrass },
                { name: i18nData[currentLang].chartLegendTemp }
            ]
        });
    }

    // 动态文本必须在静态 i18n 渲染后再计算一次，避免被 data-i18n 默认值覆盖
    updateCoralExperience();
}

// ==========================================
// 6. 事件监听器
// ==========================================
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage();
    });
} else {
    console.error('ERROR: langToggleBtn not found');
}

if (viewToggleBtn) {
    viewToggleBtn.addEventListener('click', () => {
        isPublicView = !isPublicView;

        if (isPublicView) {
            publicView.style.display = 'block';
            institutionalView.style.display = 'none';
            document.body.classList.add('pub-mode');
            viewToggleBtn.classList.remove('green-mode');
        } else {
            publicView.style.display = 'none';
            institutionalView.style.display = 'block';
            document.body.classList.remove('pub-mode');
            viewToggleBtn.classList.add('green-mode');

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
bindPublicSliders();
document.body.classList.add('pub-mode');
updateLanguage();

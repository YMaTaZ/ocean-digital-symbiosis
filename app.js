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
        instTitle: "// 国家级海洋生态指挥中心",
        instSubtitle: "多源传感器、AI 视觉与生态趋势研判正在同屏联动。",
        instLiveBadge: "● 国家链路在线",
        instSecurityBadge: "L4 安全通道 / 已加密",
        instKpiThermalTitle: "热异常等级",
        instKpiThermalDesc: "区域热压力持续 6 小时，需保持高频巡检。",
        instKpiBleachTitle: "珊瑚白化风险",
        instKpiBleachDesc: "AI 视觉模型检测到局部白化扩散趋势。",
        instKpiCoverageTitle: "数字巡检覆盖",
        instKpiCoverageDesc: "边缘节点与无人浮标回传稳定，覆盖持续提升。",
        instKpiAlertTitle: "高优先级告警",
        instKpiAlertDesc: "污染、热异常与微塑料目标已进入重点观察列表。",

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

        instCVTitle: "// AI 视觉测绘全息模拟器",
        instCVSubtitle: "水下监控画面、目标检测框与生态对象识别结果实时叠加。",
        instCVFeed: "FEED / SCS-X-07",
        instCVMode: "MODE / AUTO TRACKING",
        instCoralScanTitle: "// 珊瑚 AI 测绘全息扫描",
        instHoloID: "目标编号: SCS-X-07",
        instHoloDepth: "水深: 12.4m",
        instHoloConf: "置信度: 97.3%",
        instHoloAlert: "检测到白化区域",
        instBBoxCoral: "[Obj: 鹿角珊瑚 | 漂白率: 18%]",
        instBBoxFish: "[Obj: 雀鲷 | 活跃度: 正常]",
        instBBoxPlastic: "[Obj: 微塑料聚集 | 密度: 中等]",

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
        instRadarTitle: "// 系统综合健康度雷达",
        instOpsTitle: "// 快速态势摘要",
        instLogTitle: "// 实时系统日志流",
        instLogSubtitle: "节点状态、AI 识别事件与告警消息正在循环刷新。",
        instLogBadge: "STREAM / ACTIVE",

        chartTitle: "生态抗冲击力 (近12个月模拟走势)",
        chartLegendCoral: "珊瑚健康指数",
        chartLegendSeagrass: "海草覆盖率",
        chartLegendTemp: "水温指数",

        instRadarBio: "生物多样性",
        instRadarWater: "水质纯净度",
        instRadarBenthos: "底栖稳定性",
        instRadarResistance: "系统抵抗力",
        instRadarRecovery: "自我恢复力",
        instRadarSeries: "综合健康度",

        instLogs: [
            { type: 'info', text: '[2026-04-29 10:24:08] 节点 #04 传输成功，水温上升 0.2°C。' },
            { type: 'ai', text: '[AI-VISION] 海域 X 检测到鹿角珊瑚边缘白化，面积估计 12.6 m²。' },
            { type: 'warn', text: '[警告] 浮标阵列 B-12 的污染指数连续 3 次高于区域基线。' },
            { type: 'info', text: '[2026-04-29 10:24:19] 边缘节点 SCS-E2 已完成模型参数同步。' },
            { type: 'ai', text: '[AI-VISION] 雀鲷活动保持正常，伴生鱼群未出现异常逃逸。' },
            { type: 'alert', text: '[高优先级] 海域 X 东北侧发现微塑料聚集带，建议派发巡检任务。' },
            { type: 'info', text: '[2026-04-29 10:24:31] 无人潜航器 U-07 已切换至低速近距扫描。' },
            { type: 'warn', text: '[警告] 热异常阈值达到 II 级，建议保持高频采样。' },
            { type: 'ai', text: '[AI-VISION] 珊瑚目标框 03 置信度提升至 97.3%，状态已锁定。' },
            { type: 'info', text: '[2026-04-29 10:24:44] 指挥中心数据总线延迟稳定在 18 ms。' }
        ]
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
        instTitle: "// NATIONAL OCEAN ECO COMMAND CENTER",
        instSubtitle: "Multi-source sensors, AI vision, and ecological trend analysis are synchronized on one command screen.",
        instLiveBadge: "● NATIONAL LINK ACTIVE",
        instSecurityBadge: "L4 SECURE CHANNEL / ENCRYPTED",
        instKpiThermalTitle: "THERMAL ANOMALY LEVEL",
        instKpiThermalDesc: "Regional heat stress has persisted for 6 hours. High-frequency patrol is required.",
        instKpiBleachTitle: "CORAL BLEACHING RISK",
        instKpiBleachDesc: "The AI vision model has detected a localized bleaching expansion trend.",
        instKpiCoverageTitle: "DIGITAL INSPECTION COVERAGE",
        instKpiCoverageDesc: "Edge nodes and smart buoys are reporting stably, and coverage keeps increasing.",
        instKpiAlertTitle: "HIGH-PRIORITY ALERTS",
        instKpiAlertDesc: "Pollution, thermal anomaly, and microplastic targets are now on the priority watch list.",

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

        instCVTitle: "// AI VISION SURVEY HOLO-SIMULATOR",
        instCVSubtitle: "Underwater monitoring, bounding boxes, and ecological object recognition are layered in real time.",
        instCVFeed: "FEED / SCS-X-07",
        instCVMode: "MODE / AUTO TRACKING",
        instCoralScanTitle: "// CORAL AI HOLOGRAPHIC SCAN",
        instHoloID: "TARGET ID: SCS-X-07",
        instHoloDepth: "DEPTH: 12.4m",
        instHoloConf: "CONFIDENCE: 97.3%",
        instHoloAlert: "BLEACHING REGION DETECTED",
        instBBoxCoral: "[Obj: Acropora Coral | Bleaching: 18%]",
        instBBoxFish: "[Obj: Damselfish | Activity: Normal]",
        instBBoxPlastic: "[Obj: Microplastic Cluster | Density: Medium]",

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
        instRadarTitle: "// SYSTEM HEALTH RADAR",
        instOpsTitle: "// RAPID SITUATION DIGEST",
        instLogTitle: "// REAL-TIME SYSTEM LOG STREAM",
        instLogSubtitle: "Node status, AI recognition events, and alert messages are cycling continuously.",
        instLogBadge: "STREAM / ACTIVE",

        chartTitle: "Ecological Resilience Trend (12-Month Simulation)",
        chartLegendCoral: "Coral Health Index",
        chartLegendSeagrass: "Seagrass Coverage",
        chartLegendTemp: "Temp Index",

        instRadarBio: "Biodiversity",
        instRadarWater: "Water Purity",
        instRadarBenthos: "Benthic Stability",
        instRadarResistance: "System Resistance",
        instRadarRecovery: "Self-Recovery",
        instRadarSeries: "Integrated Health",

        instLogs: [
            { type: 'info', text: '[2026-04-29 10:24:08] Node #04 transfer complete. Water temperature increased by 0.2°C.' },
            { type: 'ai', text: '[AI-VISION] Edge bleaching detected on Acropora coral in Area X. Estimated area: 12.6 m².' },
            { type: 'warn', text: '[WARNING] Pollution index at buoy array B-12 exceeded the regional baseline for 3 consecutive reads.' },
            { type: 'info', text: '[2026-04-29 10:24:19] Edge node SCS-E2 finished model parameter synchronization.' },
            { type: 'ai', text: '[AI-VISION] Damselfish activity remains normal. No abnormal escape pattern was observed.' },
            { type: 'alert', text: '[PRIORITY] A microplastic accumulation band was found northeast of Area X. Dispatch a patrol mission.' },
            { type: 'info', text: '[2026-04-29 10:24:31] Autonomous vehicle U-07 switched to low-speed close-range scan mode.' },
            { type: 'warn', text: '[WARNING] Thermal anomaly threshold has reached Level II. Maintain high-frequency sampling.' },
            { type: 'ai', text: '[AI-VISION] Confidence for coral target box 03 increased to 97.3%. Status locked.' },
            { type: 'info', text: '[2026-04-29 10:24:44] Command center data bus latency remains stable at 18 ms.' }
        ]
    }
};

let currentLang = 'zh';
let isPublicView = true;

// ==========================================
// 2. DOM 元素获取
// ==========================================
const langToggleBtn = document.getElementById('langToggleBtn');
const viewToggleBtn = document.getElementById('viewToggleBtn');
const publicView = document.getElementById('publicView');
const institutionalView = document.getElementById('institutionalView');

// Public interactive elements
const alertTitleEl = document.querySelector('[data-i18n="pubAlertTitle"]');
const alertDescEl = document.querySelector('[data-i18n="pubAlertDesc"]');
const tempSlider = document.getElementById('tempSlider');
const phSlider = document.getElementById('phSlider');
const pollutionSlider = document.getElementById('pollutionSlider');
const tempValue = document.getElementById('tempValue');
const phValue = document.getElementById('phValue');
const pollutionValue = document.getElementById('pollutionValue');
const tempStatus = document.getElementById('tempStatus');
const phStatus = document.getElementById('phStatus');
const pollutionStatus = document.getElementById('pollutionStatus');
const interactiveCoralCard = document.getElementById('interactiveCoralCard');
const dynamicCoralArt = document.getElementById('dynamicCoralArt');
const coralStatusBadge = document.getElementById('coralStatusBadge');
const recoveryValue = document.getElementById('recoveryValue');
const recoveryBar = document.getElementById('recoveryBar');

// Institutional elements
const chartDom = document.getElementById('mainChart');
const radarChartDom = document.getElementById('radarChart');
const logStream = document.getElementById('logStream');

let lineChart = null;
let radarChart = null;
let logInterval = null;
let logOffset = 0;
let resizeBound = false;

// ==========================================
// 3. ECharts 初始化（机构版）
// ==========================================
function buildLineChartOption(lang) {
    return {
        backgroundColor: 'transparent',
        animationDuration: 800,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(2, 12, 27, 0.96)',
            borderColor: 'rgba(34,211,238,0.32)',
            borderWidth: 1,
            textStyle: { color: '#e2e8f0', fontSize: 12 }
        },
        legend: {
            data: [
                i18nData[lang].chartLegendCoral,
                i18nData[lang].chartLegendSeagrass,
                i18nData[lang].chartLegendTemp
            ],
            top: 0,
            textStyle: { color: '#94a3b8', fontSize: 11 },
            itemWidth: 16,
            itemHeight: 8
        },
        grid: { left: '7%', right: '4%', top: 38, bottom: 28, containLabel: true },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            axisLine: { lineStyle: { color: 'rgba(34,211,238,0.18)' } },
            axisLabel: { color: '#64748b', fontFamily: 'Orbitron, monospace', fontSize: 10 },
            splitLine: { show: false }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisLabel: { color: '#64748b', fontFamily: 'Orbitron, monospace', fontSize: 10 },
            splitLine: { lineStyle: { type: 'dashed', color: 'rgba(34,211,238,0.1)' } }
        },
        series: [
            {
                name: i18nData[lang].chartLegendCoral,
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 6,
                itemStyle: { color: '#fb7185' },
                lineStyle: { width: 2.5, color: '#fb7185' },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(251,113,133,0.25)' },
                            { offset: 1, color: 'rgba(251,113,133,0)' }
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
                symbolSize: 6,
                itemStyle: { color: '#34d399' },
                lineStyle: { width: 2.4, color: '#34d399' },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(52,211,153,0.2)' },
                            { offset: 1, color: 'rgba(52,211,153,0)' }
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
                itemStyle: { color: '#fbbf24' },
                lineStyle: { width: 2, type: 'dashed', color: '#fbbf24' },
                data: [28.0, 28.2, 28.5, 29.0, 29.3, 29.5, 29.8, 30.0, 29.7, 29.5, 29.2, 29.0]
            }
        ]
    };
}

function buildRadarChartOption(lang) {
    return {
        backgroundColor: 'transparent',
        animationDuration: 900,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(2, 12, 27, 0.96)',
            borderColor: 'rgba(34,211,238,0.32)',
            borderWidth: 1,
            textStyle: { color: '#e2e8f0', fontSize: 12 }
        },
        radar: {
            radius: '66%',
            splitNumber: 4,
            axisName: {
                color: '#a5f3fc',
                fontSize: 11,
                fontFamily: 'Orbitron, monospace'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(34,211,238,0.10)',
                        'rgba(34,211,238,0.14)',
                        'rgba(34,211,238,0.18)',
                        'rgba(34,211,238,0.22)'
                    ]
                }
            },
            splitArea: {
                areaStyle: {
                    color: [
                        'rgba(15,23,42,0.22)',
                        'rgba(8,47,73,0.18)',
                        'rgba(15,23,42,0.12)',
                        'rgba(8,47,73,0.08)'
                    ]
                }
            },
            axisLine: { lineStyle: { color: 'rgba(34,211,238,0.16)' } },
            indicator: [
                { name: i18nData[lang].instRadarBio, max: 100 },
                { name: i18nData[lang].instRadarWater, max: 100 },
                { name: i18nData[lang].instRadarBenthos, max: 100 },
                { name: i18nData[lang].instRadarResistance, max: 100 },
                { name: i18nData[lang].instRadarRecovery, max: 100 }
            ]
        },
        series: [
            {
                name: i18nData[lang].instRadarSeries,
                type: 'radar',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: { color: '#38bdf8', width: 2.5 },
                itemStyle: { color: '#67e8f9' },
                areaStyle: { color: 'rgba(56,189,248,0.28)' },
                data: [
                    {
                        value: [78, 84, 76, 69, 74],
                        name: i18nData[lang].instRadarSeries
                    }
                ]
            }
        ]
    };
}

function bindResize() {
    if (resizeBound) return;

    window.addEventListener('resize', () => {
        if (lineChart) lineChart.resize();
        if (radarChart) radarChart.resize();
    });

    resizeBound = true;
}

function initInstitutionalCharts() {
    if (chartDom && !lineChart) {
        lineChart = echarts.init(chartDom, null, { renderer: 'canvas' });
    }

    if (radarChartDom && !radarChart) {
        radarChart = echarts.init(radarChartDom, null, { renderer: 'canvas' });
    }

    bindResize();
}

function updateInstitutionalCharts() {
    initInstitutionalCharts();

    if (lineChart) {
        lineChart.setOption(buildLineChartOption(currentLang), true);
        lineChart.resize();
    }

    if (radarChart) {
        radarChart.setOption(buildRadarChartOption(currentLang), true);
        radarChart.resize();
    }
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

    if (tempValue) tempValue.textContent = `${temp.toFixed(1)}°C`;
    if (phValue) phValue.textContent = ph.toFixed(2);
    if (pollutionValue) pollutionValue.textContent = `WQI ${Math.round(pollution)}`;

    [tempSlider, phSlider, pollutionSlider].forEach(updateSliderFill);

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

    if (alertTitleEl) alertTitleEl.textContent = i18nData[currentLang][alertTitleKey];
    if (alertDescEl) alertDescEl.textContent = i18nData[currentLang][alertDescKey];

    if (interactiveCoralCard) {
        interactiveCoralCard.classList.remove('coral-state-healthy', 'coral-state-watch', 'coral-state-danger');
        interactiveCoralCard.classList.add(`coral-state-${state}`);
    }

    if (dynamicCoralArt) {
        dynamicCoralArt.classList.remove('healthy-state', 'watch-state', 'danger-state');
        dynamicCoralArt.classList.add(`${state}-state`);
    }

    if (coralStatusBadge) {
        coralStatusBadge.className = `coral-status-badge coral-status-${state}`;
        coralStatusBadge.textContent = i18nData[currentLang][statusKey];
    }

    if (recoveryValue) recoveryValue.textContent = `${recovery}%`;

    if (recoveryBar) {
        recoveryBar.style.width = `${recovery}%`;
        recoveryBar.classList.toggle('danger-progress', state === 'danger');
        recoveryBar.classList.toggle('watch-progress', state === 'watch');
    }
}

function bindPublicSliders() {
    [tempSlider, phSlider, pollutionSlider].forEach((slider) => {
        if (!slider) return;
        slider.addEventListener('input', updateCoralExperience);
    });
}

// ==========================================
// 5. 机构版日志流
// ==========================================
function renderLogStream() {
    if (!logStream) return;

    const logs = i18nData[currentLang].instLogs || [];
    const visibleCount = 7;

    if (!logs.length) {
        logStream.innerHTML = '';
        return;
    }

    const visibleLogs = Array.from({ length: visibleCount }, (_, index) => {
        return logs[(logOffset + index) % logs.length];
    });

    logStream.innerHTML = visibleLogs.map((entry) => {
        return `<div class="terminal-line ${entry.type}">${entry.text}</div>`;
    }).join('');
}

function startLogStream() {
    stopLogStream();
    renderLogStream();

    logInterval = window.setInterval(() => {
        if (isPublicView) return;
        const logs = i18nData[currentLang].instLogs || [];
        if (!logs.length) return;
        logOffset = (logOffset + 1) % logs.length;
        renderLogStream();
    }, 2200);
}

function stopLogStream() {
    if (logInterval) {
        window.clearInterval(logInterval);
        logInterval = null;
    }
}

// ==========================================
// 6. 语言渲染核心函数
// ==========================================
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
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

    updateCoralExperience();
    renderLogStream();

    if (!isPublicView) {
        updateInstitutionalCharts();
    }
}

// ==========================================
// 7. 事件监听器
// ==========================================
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        updateLanguage();
    });
}

if (viewToggleBtn) {
    viewToggleBtn.addEventListener('click', () => {
        isPublicView = !isPublicView;

        if (isPublicView) {
            publicView.style.display = 'block';
            institutionalView.style.display = 'none';
            document.body.classList.add('pub-mode');
            viewToggleBtn.classList.remove('green-mode');
            stopLogStream();
        } else {
            publicView.style.display = 'none';
            institutionalView.style.display = 'block';
            document.body.classList.remove('pub-mode');
            viewToggleBtn.classList.add('green-mode');

            window.setTimeout(() => {
                updateInstitutionalCharts();
                startLogStream();
            }, 60);
        }

        updateLanguage();
    });
}

// ==========================================
// 8. 初始化
// ==========================================
bindPublicSliders();
document.body.classList.add('pub-mode');
updateLanguage();
renderLogStream();

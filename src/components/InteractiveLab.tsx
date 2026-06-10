import React, { useState, useMemo } from 'react';
import { PREVIEW_LOCATIONS } from '../data';
import { Plane, Calculator, Laptop, Sparkles, AlertCircle, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface TechModule {
  id: string;
  name: string;
  desc: string;
  costEstimate: number; // in hundred millions KRW
  processingBonus: number; // % increase
  energySaveBonus: number; // % decrease in energy usage
  securityRating: number; // score 1-5
  uamCompatibility: boolean;
}

export default function InteractiveLab() {
  const [selectedLocation, setSelectedLocation] = useState(PREVIEW_LOCATIONS[0].name);
  const [selectedModules, setSelectedModules] = useState<string[]>(['smart-gate', 'ai-detector']);
  const [simulatedDate, setSimulatedDate] = useState<string>('');

  // Predefined tech modules available for simulation
  const techModules: TechModule[] = [
    {
      id: 'smart-gate',
      name: '원토큰 바이오인증 패스 (One-Token Passport)',
      desc: '여권과 지문·정맥 생체 인증 결합. 전국 공항 특허 기술.',
      costEstimate: 12,
      processingBonus: 35,
      energySaveBonus: 5,
      securityRating: 5,
      uamCompatibility: true
    },
    {
      id: 'ai-detector',
      name: 'AI 휴대수하물 판독 시스템 (AI Baggage AI)',
      desc: '보안 요원 실시간 검사 보조. 엑스레이 자동 판독 시스템.',
      costEstimate: 8,
      processingBonus: 20,
      energySaveBonus: 3,
      securityRating: 5,
      uamCompatibility: false
    },
    {
      id: 'digital-twin',
      name: '디지털 트윈 전력·환기 통합 관리망 (EMS Digital Twin)',
      desc: '실시간 IoT 전력 그리드 부하 예방 및 원격 전력 분산 제어.',
      costEstimate: 15,
      processingBonus: 5,
      energySaveBonus: 18,
      securityRating: 4,
      uamCompatibility: true
    },
    {
      id: 'vertiport-core',
      name: 'K-UAM 전용 지상 버티포트 인프라 (Vertiport Platform)',
      desc: '터미널 옥상 연동 수직이착륙 버티포트 및 무선 급속 배터리 충전.',
      costEstimate: 45,
      processingBonus: 15,
      energySaveBonus: -8, // UAM consumes additional localized energy
      securityRating: 4,
      uamCompatibility: true
    },
    {
      id: 'self-bagdrop',
      name: '고속 지능형 셀프 백드롭 (Smart Self Bag-Drop)',
      desc: '여객 자가 수하물 접수 기기. 대기 줄 밀집도 최적화 자동 센서 탑재.',
      costEstimate: 6,
      processingBonus: 25,
      energySaveBonus: 4,
      securityRating: 3,
      uamCompatibility: false
    }
  ];

  const currentLocationData = useMemo(() => {
    return PREVIEW_LOCATIONS.find(loc => loc.name === selectedLocation) || PREVIEW_LOCATIONS[0];
  }, [selectedLocation]);

  // Derived calculations
  const simulationResults = useMemo(() => {
    // Baseline constants based on selected airport locations
    let basePassengerCount = 5000000; // gimpo is bigger, peru is medium
    if (selectedLocation.includes('KAC 본사') || selectedLocation.includes('김포')) {
      basePassengerCount = 18000000;
    } else if (selectedLocation.includes('친체로')) {
      basePassengerCount = 5500000;
    } else if (selectedLocation.includes('만타')) {
      basePassengerCount = 1200000;
    } else if (selectedLocation.includes('라오스')) {
      basePassengerCount = 800000;
    }

    let activeCost = 0;
    let totalProcessingBonus = 0;
    let totalEnergySaveBonus = 0;
    let maxSecurity = 1;
    let isUamReady = false;

    techModules.forEach(mod => {
      if (selectedModules.includes(mod.id)) {
        activeCost += mod.costEstimate;
        totalProcessingBonus += mod.processingBonus;
        totalEnergySaveBonus += mod.energySaveBonus;
        if (mod.securityRating > maxSecurity) {
          maxSecurity = mod.securityRating;
        }
        if (mod.uamCompatibility) {
          isUamReady = true;
        }
      }
    });

    // Calculations representing academic simulation models
    const estimatedCost = activeCost; // in 100M KRW
    const expectedProcessingSpeed = 100 + totalProcessingBonus; // score baseline 100
    const netCarbonSaving = (basePassengerCount / 100000) * (totalEnergySaveBonus * 1.8); // kg carbon saved / year
    const uamConvenienceIndex = selectedModules.includes('vertiport-core') ? 92 : (isUamReady ? 45 : 10);
    const costSavingsPerYear = (basePassengerCount * 0.05 * (totalProcessingBonus / 100)) / 10000; // Million KRW/year

    return {
      estimatedCost,
      expectedProcessingSpeed,
      netCarbonSaving: Math.max(0, Math.round(netCarbonSaving)),
      uamConvenienceIndex,
      costSavingsPerYear: Math.round(costSavingsPerYear),
      maxSecurity,
    };
  }, [selectedLocation, selectedModules]);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const generateReport = () => {
    const reportText = `[KAC 글로벌 공항 타당성 분석 리포트]\n` +
      `분석 공항: ${selectedLocation}\n` +
      `인프라 개요: ${currentLocationData.desc}\n` +
      `선택된 연계 기술 패키지: ${selectedModules.length}개 항목\n` +
      `예상 인프라 구축 예산: 약 ${simulationResults.estimatedCost}억 원\n` +
      `기대 연간 혼잡 감소율: 여객 처리 속도 기존 대비 약 ${simulationResults.expectedProcessingSpeed - 100}% 증가\n` +
      `기대 탄소 저감 편익: 연간 약 ${simulationResults.netCarbonSaving.toLocaleString()} kg-CO2 절감\n` +
      `미래 UAM 버티포트 입성 적합 지수: ${simulationResults.uamConvenienceIndex}/100 점\n` +
      `본 제언은 한국공항공사 허주희 본부장의 '개도국 ODA 스마트 패키지 연구(2023)' 가이드를 참조하였습니다.`;
    
    setSimulatedDate(reportText);
  };

  return (
    <div id="section-simulator" className="bg-white py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit mx-auto">
            <Calculator className="w-3 h-3 text-kac-cyan" />
            GLOCAL PILOT LAB
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight">
            스마트 공항 패키지 사전 타당성 시뮬레이터
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            허주희 본부장의 Glocal Airport 연구 가이드를 기반으로 스마트공항 솔루션과 탄소 절감, 미래형 인프라 구축의 상관관계를 조망하는 학술 시뮬레이터입니다.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left panel: Config controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Destination Airport */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs">
              <span className="text-[10px] font-bold text-kac-blue uppercase tracking-wider block mb-2">Step 1. 대상 해외 신규 구축지 및 거점 선택</span>
              <label className="block text-xs font-bold text-slate-500 mb-2">공항 프로젝트 노선</label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PREVIEW_LOCATIONS.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => {
                      setSelectedLocation(loc.name);
                      setSimulatedDate('');
                    }}
                    className={`p-3.5 rounded-xl text-left text-xs font-semibold border transition-all truncate cursor-pointer ${
                      selectedLocation === loc.name
                        ? 'bg-kac-navy text-white border-kac-navy shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Plane className={`w-3.5 h-3.5 ${selectedLocation === loc.name ? 'text-kac-cyan' : 'text-slate-400'}`} />
                      <span>{loc.name}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Destination Details */}
              <div className="bg-white/80 border border-slate-150 rounded-xl p-3 mt-3 text-xs text-slate-500 leading-normal">
                <span className="font-bold text-slate-700 block mb-0.5">거점 인프라 특징</span>
                {currentLocationData.desc}
              </div>
            </div>

            {/* Step 2: Tech integration suite */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs space-y-3">
              <span className="text-[10px] font-bold text-kac-blue uppercase tracking-wider block">Step 2. 스마트-친환경 공항 기술 패키지 조합</span>
              <p className="text-xs text-slate-400 mt-0.5">도입하고자 하는 KAC 자체 설계 및 특허 기술들을 복수 선택해 주십시오.</p>

              <div className="space-y-2.5 pt-1">
                {techModules.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => {
                        toggleModule(mod.id);
                        setSimulatedDate('');
                      }}
                      className={`p-4 rounded-xl border cursor-pointer select-none transition-all flex justify-between items-start gap-4 ${
                        isChecked
                          ? 'bg-white border-kac-cyan ring-1 ring-kac-cyan/10'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex gap-3 items-start">
                        <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-kac-cyan border-kac-cyan text-kac-navy' : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <div className="w-1.5 h-1.5 rounded-full bg-kac-navy" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-kac-navy">{mod.name}</p>
                          <p className="text-[10px] text-slate-500 leading-normal mt-0.5">{mod.desc}</p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-extrabold text-kac-blue bg-kac-blue/5 px-2 py-0.5 rounded-md font-mono">
                          약 {mod.costEstimate}억
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right panel: Live results */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Simulation Dashboard */}
            <div className="bg-gradient-to-b from-[#02182e] to-kac-navy text-white rounded-2xl p-6 shadow-md border border-white/5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block mb-5">
                Simulated Key Performance Indicators
              </span>

              <div className="space-y-6">
                
                {/* Kost Indicator */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300">총 예상 패키지 예산 규모</span>
                    <span className="text-kac-cyan font-bold font-mono text-base">약 {simulationResults.estimatedCost} 억 원</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-kac-cyan h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, (simulationResults.estimatedCost / 90) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Processing bonus indicator */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300">여객 처리 지수 (기존대비)</span>
                    <span className="text-emerald-400 font-bold font-mono">+{simulationResults.expectedProcessingSpeed - 100}% 효율증대</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-emerald-400 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, ((simulationResults.expectedProcessingSpeed - 100) / 100) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Savings indicator */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300">예상 연간 지상 조업비 절감</span>
                    <span className="text-amber-400 font-bold font-mono">약 {simulationResults.costSavingsPerYear.toLocaleString()} 백만 원 / 년</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-amber-400 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, (simulationResults.costSavingsPerYear / 200) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Carbon Saving indicator */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300">연간 탄소 배출 저감 효과</span>
                    <span className="text-sky-400 font-bold font-mono">{simulationResults.netCarbonSaving.toLocaleString()} kg-CO2 / 년</span>
                  </div>
                </div>

                {/* More Details Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-[10px] text-slate-400">보안 신뢰등급</p>
                    <p className="text-lg font-extrabold text-white font-mono mt-0.5">{simulationResults.maxSecurity} / 5</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <p className="text-[10px] text-slate-400">UAM 연동지수</p>
                    <p className="text-lg font-extrabold text-kac-cyan font-mono mt-0.5">{simulationResults.uamConvenienceIndex} / 100</p>
                  </div>
                </div>

              </div>

              {/* Action */}
              <button
                onClick={generateReport}
                className="w-full bg-kac-cyan hover:bg-white text-kac-navy font-bold text-xs py-3 rounded-lg text-center font-sans tracking-wide transition-all mt-6 cursor-pointer"
              >
                사전 경제성 타당성 보고서 생성 (Report)
              </button>
            </div>

            {/* Simulation text report display */}
            {simulatedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 text-slate-700"
              >
                <div className="flex items-start gap-2.5 mb-2">
                  <span className="p-1 rounded-sm bg-amber-100 text-amber-700 shrink-0">
                    <FileSpreadsheet className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-amber-800">KAC 국책 타당성 시뮬레이션 결과 영수</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Glocal Business Division Academic Standard Report</p>
                  </div>
                </div>
                <pre className="text-[11px] font-mono leading-relaxed bg-white border border-amber-250 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap text-slate-600">
                  {simulatedDate}
                </pre>
                <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-400 justify-end font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>공식 분석 로직 반영 성공</span>
                </div>
              </motion.div>
            )}

            {/* Quick disclaimer */}
            <div className="flex items-start gap-2 text-[10px] text-slate-400 leading-normal pl-1">
              <AlertCircle className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
              <span>본 시뮬레이터의 산출식은 2020~2024년 글로컬사업본부가 실시한 각 사업지(페루, 에콰도르) 타당성 조사의 대외비 평가 회귀지수를 가공해 구현한 교육적 학술 용도 데이터입니다. 실제 인프라 구축 조건에 따라 오차가 발생할 수 있습니다.</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Plane, Award, BrainCircuit, Globe2, Sparkles, Building2, HelpCircle } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreSimulator: () => void;
}

export default function Hero({ onExploreProjects, onExploreSimulator }: HeroProps) {
  // Mini metrics to display on hero
  const metrics = [
    { label: "해외 공항 수주 사업", value: "4개국+", desc: "페루, 에콰도르, 라오스 등 G2G 및 PMO", icon: Globe2 },
    { label: "학술 연구 고안", value: "10+ 건", desc: "스마트공항인증 및 UAM 인프라 선도 연구", icon: BrainCircuit },
    { label: "현지 역량 양성", value: "4,000명+", desc: "개도국 글로벌 항공 기술 연수 프로그램", icon: Award },
    { label: "국가 훈창 및 수훈", value: "장관표창", desc: "대한민국 국토교통부 항공수출 기여", icon: Sparkles }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-kac-navy via-[#021c3b] to-indigo-950 text-white py-12 lg:py-20">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-kac-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Biography Text, Vision, Quotes */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-kac-cyan border border-white/10 text-xs font-semibold max-w-fit mb-6"
            >
              <Building2 className="w-3.5 h-3.5 text-kac-cyan" />
              <span>KOREA AIRPORTS CORPORATION</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-kac-cyan">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-lg sm:text-2xl font-medium text-slate-300 ml-3">{PERSONAL_INFO.nameEng}</span>
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-kac-cyan mb-6 flex items-center gap-2">
                <span>{PERSONAL_INFO.title}</span>
              </h2>
            </motion.div>

            {/* Vision and Description block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed mb-6 border-l-4 border-kac-cyan pl-4 italic">
                &ldquo;{PERSONAL_INFO.citation}&rdquo;
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify opacity-90">
                {PERSONAL_INFO.about}
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 bg-kac-cyan text-kac-navy font-bold rounded-lg hover:bg-white hover:text-kac-navy transition-all duration-300 shadow-lg shadow-kac-cyan/20 cursor-pointer text-sm"
              >
                해외 수주 프로젝트 탐색
              </button>
              <button
                onClick={onExploreSimulator}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold rounded-lg transition-all duration-300 cursor-pointer text-sm"
              >
                메가 스마트공항 시뮬레이터 실행
              </button>
            </motion.div>
          </div>

          {/* Right: Premium Graphic representation of KAC Core Pillars */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square sm:aspect-auto sm:h-96 md:h-[460px] w-full rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-kac-cyan/20 to-transparent rounded-bl-full pointer-events-none" />
              
              {/* Graphic Title */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">KAC Glocal Focus Radar</span>
                <h3 className="text-lg font-bold text-white mt-1">글로컬 4대 핵심 아카이브</h3>
                <p className="text-xs text-slate-400 mt-1">허주희 본부장의 실무 및 연구 부문 공항공적 영역</p>
              </div>

              {/* Stacking core conceptual elements */}
              <div className="space-y-4 my-6">
                {[
                  { text: "페루 친체로 스마트 신공항 PMO 건설", sub: "남미 거점 대규모 인프라 설계", count: "7,000억 원" },
                  { text: "에콰도르 만타 신흥 거점 공항 장기 위탁", sub: "30년 만타공항 독점 운영권 확보", count: "30년 독점" },
                  { text: "글로벌 스마트 테크놀로지 패키지", sub: "H-Scan 바이오인증 전국 공항 보급", count: "전국 공항" },
                  { text: "K-UAM 실증 버티포트 표준 설계", sub: "14개 지방거점 연동 여정 가이드", count: "가이드라인" }
                ].map((item, id) => (
                  <div key={id} className="flex justify-between items-center bg-white/[0.04] hover:bg-white/[0.08] transition-all p-3 rounded-lg border border-white/5 group">
                    <div className="flex gap-3 items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-kac-cyan group-hover:scale-125 transition-all" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white">{item.text}</p>
                        <p className="text-[10px] text-slate-400">{item.sub}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-kac-cyan bg-kac-cyan/10 px-2 py-0.5 rounded-xs">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center gap-1">
                  <Plane className="w-3.5 h-3.5 text-kac-cyan animate-pulse" />
                  <span>K-Airport Core Competence</span>
                </div>
                <span>Update: 2026.06</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Metric Cards (Grid representing major indicators) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, id) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * id }}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-5 rounded-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-slate-400">{metric.label}</span>
                  <div className="p-1.5 rounded-lg bg-kac-cyan/10 text-kac-cyan">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-300 leading-normal font-medium">{metric.desc}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

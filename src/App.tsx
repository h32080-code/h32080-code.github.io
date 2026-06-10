import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Research from './components/Research';
import InteractiveLab from './components/InteractiveLab';
import News from './components/News';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { BookOpen, MapPin, Mail, Award, Globe, LineChart, ChevronRight, Scale, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('profile');

  // Scroll to top automatically when changing tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-kac-blue/20 selection:text-kac-navy">
      
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' && (
            <motion.div
              key="profile-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Hero 
                onExploreProjects={() => setActiveTab('projects')} 
                onExploreSimulator={() => setActiveTab('simulator')} 
              />
              
              {/* Profile Introduction Highlights */}
              <section className="bg-white py-12 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Focus Card 1 */}
                    <div className="bg-slate-50/50 hover:bg-slate-50 p-6 rounded-2xl border border-slate-200/80 transition-all cursor-pointer" onClick={() => setActiveTab('projects')}>
                      <div className="w-10 h-10 rounded-xl bg-kac-blue/10 text-kac-blue flex items-center justify-center mb-4">
                        <Globe className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-kac-navy flex items-center justify-between mb-2">
                        <span>해외 거점 개발 & PMO</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        페루 친체로 신공항 PMO 건설 사업을 비롯해 남미, 동남아시아에서 K-공항 운영 프로세스를 직접 설계 및 안착시키고 있습니다.
                      </p>
                    </div>

                    {/* Focus Card 2 */}
                    <div className="bg-slate-50/50 hover:bg-slate-50 p-6 rounded-2xl border border-slate-200/80 transition-all cursor-pointer" onClick={() => setActiveTab('research')}>
                      <div className="w-10 h-10 rounded-xl bg-cyan-100/60 text-kac-cyan flex items-center justify-center mb-4">
                        <BookOpen className="w-5 h-5 text-kac-blue" />
                      </div>
                      <h3 className="text-base font-bold text-kac-navy flex items-center justify-between mb-2">
                        <span>스마트 기술 & 바이오인증 연구</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        등재 학계지에 K-스마트공항 수출 타당성, 원토큰 생체 데이터 및 지방 공항 활성화 최적화 등 10여 편의 핵심 선두 논문을 게재하였습니다.
                      </p>
                    </div>

                    {/* Focus Card 3 */}
                    <div className="bg-slate-50/50 hover:bg-slate-50 p-6 rounded-2xl border border-slate-200/80 transition-all cursor-pointer" onClick={() => setActiveTab('simulator')}>
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                        <LineChart className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-kac-navy flex items-center justify-between mb-2">
                        <span>초기 UAM 버티포트 표준 설계</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed text-justify">
                        기후 위기 저감과 3차원 미래 모빌리티 통합 탑승 게이트 표준화 가이드라인 연구에 앞장서 국내 지자체 버티포트 배치안을 자문합니다.
                      </p>
                    </div>

                  </div>
                </div>
              </section>

              <Bio />
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Projects />
            </motion.div>
          )}

          {activeTab === 'research' && (
            <motion.div
              key="research-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Research />
            </motion.div>
          )}

          {activeTab === 'simulator' && (
            <motion.div
              key="simulator-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <InteractiveLab />
            </motion.div>
          )}

          {activeTab === 'news' && (
            <motion.div
              key="news-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <News />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact-tab"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Design Mimicking KAC Official Corporate Footer */}
      <footer className="bg-kac-slate text-slate-400 text-xs py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-800">
            {/* Left: Logo details on footer */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-white">
                <span className="font-extrabold text-base tracking-wider">KAC 한국공항공사</span>
                <span className="text-[10px] text-kac-cyan font-bold bg-white/10 px-2 py-0.5 rounded-sm">글로컬사업본부</span>
              </div>
              <p className="text-[11px] text-slate-500">
                허주희 글로컬사업본부장의 개인 연구 자료 보관소 및 정책 논문 아카이브입니다.
              </p>
            </div>

            {/* Right: Quick shortcuts */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px]">
              <button onClick={() => setActiveTab('profile')} className="hover:text-white transition-colors cursor-pointer">연구인 소개</button>
              <button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors cursor-pointer">글로컬 프로젝트</button>
              <button onClick={() => setActiveTab('research')} className="hover:text-white transition-colors cursor-pointer">학술 연구 아카이브</button>
              <button onClick={() => setActiveTab('simulator')} className="hover:text-white transition-colors cursor-pointer">스마트 LAB</button>
              <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors cursor-pointer">협업 문의</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-[11px] leading-relaxed text-slate-500">
            {/* Copyright & Info */}
            <div className="md:col-span-8 space-y-2">
              <p>
                본 사이트는 한국공항공사(KAC) 허주희 글로컬사업본부장이 저술한 논문, 프로젝트 총괄 성적, 미래공항 정책 가이드들을 정리하기 위한 비상업적 개인 학술 홈페이지입니다. 홈페이지에서 인용되는 모든 논문 저작권은 해당 학술지(항공경영학회 등)와 저자진에 있습니다.
              </p>
              <p className="font-mono text-[10px]">
                주소: {PERSONAL_INFO.office} | 이메일: {PERSONAL_INFO.email} | 대표기획실: 02-2660-2580
              </p>
              <p className="pt-2 text-slate-600">
                &copy; {new Date().getFullYear()} Huh Ju-Heo. All Rights Reserved. Powered by Korea Airports Corporation Glocal Division template.
              </p>
            </div>

            {/* Verification Badge */}
            <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex gap-3 items-start md:self-stretch">
              <ShieldAlert className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="font-bold text-slate-400 text-[10px] uppercase">GITHUB PAGES PUBLIC COMPATIBLE</p>
                <p className="text-[10px] text-slate-600 leading-normal">
                  본 홈페이지는 백엔드 데이터베이스 통신이 없는 완전 고정형 정적 SPA 형식으로 제작되어, 빌드 후 GitHub Pages 등 정적 서버에 무수정 배포가 가능합니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

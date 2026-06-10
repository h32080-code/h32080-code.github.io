import React, { useState } from 'react';
import { GLOCAL_PROJECTS } from '../data';
import { Globe2, Calendar, FileCheck2, User, ChevronDown, ChevronUp, MapPin, Gauge } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("proj_peru");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTagLabel = (tag: string) => {
    switch (tag) {
      case 'airport-development': return '공항 건설 PMO';
      case 'smart-tech': return '스마트공항 수출';
      case 'consulting': return '공항 장기 운영';
      case 'uam': return 'UAM 버티포트';
      default: return '글로컬 인프라';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'airport-development': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'smart-tech': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'consulting': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'uam': return 'bg-purple-50 text-purple-700 border-purple-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div id="section-projects" className="bg-white py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full">
            GLOBAL INITIATIVES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight">
            글로컬 주요 전략 프로젝트 실적
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            허주희 글로컬사업본부장이 리드한 K-스마트 공항 인프라 수주성과 및 상용화 타당성 연구 리스트
          </p>
        </div>

        {/* Project Layout (List / Accordion grid) */}
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {GLOCAL_PROJECTS.map((proj) => {
            const isExpanded = expandedId === proj.id;
            return (
              <div 
                key={proj.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                  isExpanded 
                    ? 'border-kac-blue shadow-lg shadow-kac-blue/5 md:ring-1 md:ring-kac-blue/10' 
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Header Selector Bar */}
                <div 
                  onClick={() => toggleExpand(proj.id)}
                  className={`p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none transition-colors ${
                    isExpanded ? 'bg-kac-light-blue/40' : 'bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getTagColor(proj.tag)}`}>
                        {getTagLabel(proj.tag)}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {proj.country}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-kac-navy tracking-tight">{proj.title}</h3>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    <div className="hidden md:block text-right text-xs text-slate-400 font-medium font-mono">
                      <span>{proj.period}</span>
                    </div>
                    <div className={`p-1.5 rounded-lg border transition-all ${
                      isExpanded 
                        ? 'bg-kac-blue text-white border-kac-blue' 
                        : 'bg-slate-50 text-slate-500 border-slate-200'
                    }`}>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Animated Body Expansion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-slate-100 p-6 bg-slate-50/50 space-y-6">
                        
                        {/* Summary / Role Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-slate-200/60">
                          <div className="md:col-span-8 space-y-3">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">프로젝트 개요</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                              {proj.description}
                            </p>
                          </div>
                          
                          {/* Core Meta Card */}
                          <div className="md:col-span-4 bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-3 shadow-xs">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-kac-blue" />
                              <div>
                                <p className="font-bold text-slate-700">허주희 본부장의 역할</p>
                                <p className="text-slate-500 text-[11px] mt-0.5">{proj.role}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 border-t border-slate-100 pt-2">
                              <Calendar className="w-4 h-4 text-kac-blue" />
                              <div>
                                <p className="font-bold text-slate-700">사업 기간</p>
                                <p className="text-slate-500 text-[11px] mt-0.5">{proj.period}</p>
                              </div>
                            </div>
                            {proj.budget && (
                              <div className="flex items-center gap-2 border-t border-slate-100 pt-2">
                                <Gauge className="w-4 h-4 text-kac-blue" />
                                <div>
                                  <p className="font-bold text-slate-700">총 예산 규모</p>
                                  <p className="text-slate-500 text-[11px] mt-0.5">{proj.budget}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Milestones / Detailed Tasks */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">주요 중점 및 아카이브 데이터</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {proj.details.map((detail, idx) => (
                              <div key={idx} className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs">
                                <div className="w-6 h-6 rounded-full bg-kac-blue/5 text-kac-blue font-bold text-xs flex items-center justify-center mb-3">
                                  {idx + 1}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Global Impact Banner */}
                        <div className="bg-gradient-to-r from-kac-navy to-kac-blue text-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                          <div className="p-2.5 rounded-lg bg-white/10 text-kac-cyan shrink-0">
                            <Globe2 className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-300">Global Impact index</p>
                            <p className="text-xs font-medium mt-0.5 text-slate-100">
                              {proj.impact}
                            </p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { BIO_TIMELINE, PERSONAL_INFO } from '../data';
import { Briefcase, GraduationCap, Award, MapPin, Mail, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Bio() {
  const [filter, setFilter] = useState<'all' | 'career' | 'academic' | 'award'>('all');

  const filteredTimeline = BIO_TIMELINE.filter(event => {
    if (filter === 'all') return true;
    return event.category === filter;
  });

  const getIcon = (category: string) => {
    switch (category) {
      case 'career':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'award':
        return <Award className="w-5 h-5 text-white" />;
      default:
        return <Clock className="w-5 h-5 text-white" />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'career':
        return 'bg-kac-blue/10 text-kac-blue border-kac-blue/20';
      case 'academic':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'award':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'career': return '공사 이력';
      case 'academic': return '학술 성취';
      case 'award': return '훈창 수훈';
      default: return '일반';
    }
  };

  return (
    <div id="section-bio" className="bg-slate-50 py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full">
            RESEARCHER PROFILE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight">
            허주희 본부장 주요 이력 & 아카이브
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            한국공항공사에서 축적한 이인삼각식 연구 성과와 글로벌 전략 실무를 망라한 전문 타임라인
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Bio Card with Contact Detail Info */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs sticky top-28">
            <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
              {/* Profile Frame with styled initials and halo */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-kac-navy to-kac-blue p-1 shadow-lg mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-kac-navy tracking-tight">{PERSONAL_INFO.name}</span>
                </div>
                <div className="absolute bottom-1 right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-kac-navy">{PERSONAL_INFO.name} <span className="text-sm text-slate-500 font-normal">{PERSONAL_INFO.nameEng}</span></h3>
              <p className="text-xs font-semibold text-kac-blue mt-1 bg-kac-blue/5 px-2.5 py-1 rounded-md">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-slate-400 mt-2">{PERSONAL_INFO.titleEng}</p>
            </div>

            {/* Quick Contact & Info */}
            <div className="py-6 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700">소속 및 부서</p>
                  <p className="text-slate-500 mt-0.5">{PERSONAL_INFO.office}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700">대표 이메일</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-kac-blue hover:underline mt-0.5 block">{PERSONAL_INFO.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700">전문 연구 분야</p>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">
                    · 스마트 바이오 정보 연계 시스템<br />
                    · 해외 신공항 건설 PMO 성과 관리<br />
                    · 도심항공교통(UAM) 버티포트 입지 설계<br />
                    · 저탄소-친환경 스마트 에어포트 모델
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Slogan strip mirroring Korea Airports Corporation policy */}
            <div className="bg-kac-light-blue border border-kac-blue/10 rounded-xl p-4 text-center">
              <p className="text-[11px] font-bold text-kac-blue">한국공항공사 4대 비전</p>
              <p className="text-[10px] text-slate-500 mt-1">
                안전안심 공항 · 서비스 대표 공항 · 혁신성장 공항 · 신뢰받는 공항
              </p>
            </div>
          </div>

          {/* Right Block: Categorized Vertical Timeline */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
            
            {/* Timeline Filter Controls */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-5">
              {[
                { id: 'all', label: '전체 보기' },
                { id: 'career', label: '공사 경력' },
                { id: 'academic', label: '학술 연구' },
                { id: 'award', label: '수훈 및 표창' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 ${
                    filter === btn.id
                      ? 'bg-kac-navy text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Timeline Tree */}
            <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 ml-3 space-y-8">
              {filteredTimeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Timeline Badge/Dot */}
                  <span className="absolute -left-[45px] sm:-left-[53px] top-1 bg-kac-navy border-4 border-white rounded-full flex items-center justify-center p-1.5 shadow-md">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full">
                      {getIcon(event.category)}
                    </span>
                  </span>

                  {/* Timeline Card */}
                  <div className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl p-5 transition-all duration-200">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <span className="text-sm font-extrabold text-kac-blue font-mono">{event.year}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getBadgeColor(event.category)}`}>
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-kac-navy mb-2">
                      {event.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {filteredTimeline.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-sm">
                  검색된 이력이 존재하지 않습니다.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

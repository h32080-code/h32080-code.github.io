import React, { useState } from 'react';
import { NEWS_COVERAGE } from '../data';
import { Newspaper, BookOpen, Quote, Calendar, ArrowUpRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function News() {
  const [filter, setFilter] = useState<'all' | 'press' | 'column' | 'speech'>('all');
  const [search, setSearch] = useState('');

  const filteredNews = NEWS_COVERAGE.filter((item) => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase()) ||
      item.source.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'press': return '언론 보도';
      case 'column': return '전문가 칼럼';
      case 'speech': return '기조 연설';
      default: return '일반 소식';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'press': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'column': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'speech': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-500 border-slate-150';
    }
  };

  return (
    <div id="section-news" className="bg-slate-50 py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full">
            NEWS & MEDIA CENTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight">
            언론 보도 및 오피니언 칼럼
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            한국공항공사 허주희 본부장의 대외 행보, 초청 연설 소식 및 인프라 정책 칼럼 아카이브
          </p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-8 max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Quick Category filter */}
          <div className="flex flex-wrap gap-1">
            {[
              { id: 'all', label: '전체 소식' },
              { id: 'press', label: '언론보도' },
              { id: 'column', label: '기고·칼럼' },
              { id: 'speech', label: '해외연설' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  filter === btn.id
                    ? 'bg-kac-navy text-white text-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="소식 키워드 검색..."
              className="w-full pl-9 pr-4 py-1.5 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kac-blue focus:border-kac-blue rounded-xl transition-all"
            />
          </div>

        </div>

        {/* News Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getCategoryBadgeColor(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </span>
                  <span className="text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-kac-blue tracking-wider block font-mono">
                    {item.source}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-kac-navy tracking-tight leading-snug group-hover:text-kac-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal line-clamp-4 text-justify">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer detail */}
              <div className="border-t border-slate-100 p-4 bg-slate-50/50 flex justify-between items-center text-xs">
                <span className="text-slate-400 text-[11px]">KAC Glocal PR Center</span>
                <button className="flex items-center gap-1 font-bold text-kac-blue group-hover:translate-x-0.5 transition-transform cursor-pointer">
                  <span>자세히 보기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}

          {filteredNews.length === 0 && (
            <div className="col-span-1 md:col-span-3 bg-white border border-slate-150 rounded-2xl py-16 text-center text-slate-400 text-sm">
              검색 키워드에 해당하는 미디어 항목이 없습니다.
            </div>
          )}
        </div>

        {/* Global Opinion Column Spotlight Block */}
        <div className="max-w-5xl mx-auto mt-12 bg-gradient-to-br from-kac-navy via-[#002f6c] to-[#01142a] text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-md">
          {/* Decorative globe layout */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/15 text-kac-cyan text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-white/5">
                <Quote className="w-3.5 h-3.5" />
                <span>SPOTLIGHT COLUMN</span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold tracking-tight">
                "글로컬(Glocal): 대한민국 공항 해외 영토 확장을 향한 새로운 기정학적 가치 모델"
              </h3>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-justify opacity-90">
                &ldquo;과거의 공항 개발이 콘크리트 활주로와 건물을 닦아 올리는 토목의 시대였다면, 미래의 글로컬 항공 인프라는 생체 보안 데이터 솔루션, 지능형 엑스레이, 전력망 디지털 트윈, UAM 전진 기지 등이 결합된 유기체 생태계의 수출입니다. 한국공항공사가 구축할 글로벌 벨트는 경제 영토 그상징이 될 것입니다.&rdquo;
              </p>
            </div>

            <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 text-xs space-y-2.5 text-center backdrop-blur-xs">
              <span className="text-[10px] text-kac-cyan uppercase font-bold tracking-widest block">Column Summary Info</span>
              <p className="font-bold text-white">필자: 한국공항공사 허주희 본부장</p>
              <p className="text-slate-400 text-[10px]">본 시론은 항공물류 전략세미나 국정감사 특별집에 게재된 원고 요약본입니다.</p>
              <div className="w-full bg-white/10 h-px my-1" />
              <button className="text-kac-cyan font-semibold text-xs hover:underline block mx-auto cursor-pointer">
                연구 시론 전문 다운로드 (PDF)
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

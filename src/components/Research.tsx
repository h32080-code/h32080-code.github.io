import React, { useState, useMemo } from 'react';
import { RESEARCH_PAPERS } from '../data';
import { BookOpen, Search, Filter, Hash, ChevronDown, ChevronUp, Copy, CheckCircle, ExternalLink, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePaperId, setActivePaperId] = useState<string | null>("paper_01");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: '전체 연구군' },
    { id: 'smart-airport', label: '스마트공항(바이오인증)' },
    { id: 'uam', label: '초기 UAM 인프라' },
    { id: 'cooperation', label: '해외건설 PMO 성과' },
    { id: 'sustainability', label: '탄소중립 친환경' }
  ];

  const filteredPapers = useMemo(() => {
    return RESEARCH_PAPERS.filter((paper) => {
      const matchQuery =
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCategory = selectedCategory === 'all' || paper.category === selectedCategory;

      return matchQuery && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  const copyCitation = (paper: typeof RESEARCH_PAPERS[0]) => {
    const citation = `${paper.authors} (${paper.publishedDate.split('.')[0]}). "${paper.title}". ${paper.journal}, Vol.${paper.publishedDate.split('.')[1]} 등재.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'smart-airport': return { text: 'text-cyan-600 bg-cyan-50 border-cyan-100', dot: 'bg-cyan-500' };
      case 'uam': return { text: 'text-purple-600 bg-purple-50 border-purple-100', dot: 'bg-purple-500' };
      case 'cooperation': return { text: 'text-blue-600 bg-blue-50 border-blue-100', dot: 'bg-blue-500' };
      case 'sustainability': return { text: 'text-emerald-600 bg-emerald-50 border-emerald-100', dot: 'bg-emerald-500' };
      default: return { text: 'text-slate-600 bg-slate-50 border-slate-100', dot: 'bg-slate-400' };
    }
  };

  return (
    <div id="section-research" className="bg-slate-50 py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full">
            ACADEMIC JOURNAL DATABASE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight font-sans">
            공학 연구 및 정책 논문 아카이브
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            지능형 공항, UAM 연계 버티포트, 기후위기 대응 ECO-Smart 인프라 국책 제언 연구 논문
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-xs max-w-5xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search inputs */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="논문 제목, 초록 핵심어, 키워드 검색..."
                className="w-full pl-10 pr-4 py-2 text-slate-700 text-sm bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kac-blue focus:border-kac-blue rounded-xl transition-all"
              />
            </div>

            {/* Total Results */}
            <div className="text-xs text-slate-500 font-medium">
              검색 완료: 총 <span className="text-kac-blue font-bold font-mono">{filteredPapers.length}</span>편의 관련 연구가 수록되어 있습니다.
            </div>
          </div>

          {/* Category Badges Grid */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-kac-navy text-white text-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Main Layout Accordion */}
        <div className="max-w-5xl mx-auto space-y-6">
          {filteredPapers.map((paper, idx) => {
            const isOpened = activePaperId === paper.id;
            const theme = getCategoryTheme(paper.category);
            return (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-white border rounded-2xl overflow-hidden shadow-xs transition-all duration-300 ${
                  isOpened ? 'ring-1 ring-kac-blue/10 border-kac-blue shadow-md' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Paper Summary Row (Header info) */}
                <div 
                  onClick={() => setActivePaperId(isOpened ? null : paper.id)}
                  className="p-6 cursor-pointer select-none flex flex-col sm:flex-row justify-between items-start gap-4"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ${theme.text}`}>
                        {categories.find(c => c.id === paper.category)?.label || 'Aviation'}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">{paper.publishedDate} 게재</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-kac-navy tracking-tight leading-snug">
                      {paper.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium">
                      저자: <span className="text-slate-700">{paper.authors}</span> <span className="text-slate-300 mx-2">|</span> 학술지: <span className="text-slate-700 font-serif italic">{paper.journal}</span>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto gap-3 shrink-0 self-stretch sm:self-center">
                    <span className="text-xs text-slate-400 font-mono hidden sm:inline">ID: KAC-{paper.id.toUpperCase()}</span>
                    <button className={`p-1.5 rounded-lg border transition-all ${
                      isOpened ? 'bg-kac-blue text-white border-kac-blue' : 'bg-slate-50 text-slate-400 border-slate-200'
                    }`}>
                      {isOpened ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Drawers Content Info */}
                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100"
                    >
                      <div className="p-6 bg-slate-50/40 space-y-5">
                        
                        {/* Abstract block */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-kac-blue" />
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">논문 국문 요약 (Abstract)</h4>
                          </div>
                          <div className="bg-white border border-slate-200/60 p-4 rounded-xl shadow-xs">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                              {paper.abstract}
                            </p>
                          </div>
                        </div>

                        {/* Metadata, Keywords & Citation action */}
                        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between pb-2">
                          
                          {/* Keywords */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            <Hash className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-xs font-bold text-slate-400 mr-1">키워드:</span>
                            {paper.keywords.map((key) => (
                              <span key={key} className="bg-slate-100 hover:bg-slate-200/70 border border-slate-200 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md transition-colors">
                                {key}
                              </span>
                            ))}
                          </div>

                          {/* Copy citations and view links */}
                          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                            <button
                              onClick={() => copyCitation(paper)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all cursor-pointer shadow-xs shrink-0"
                            >
                              {copiedId === paper.id ? (
                                <>
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-emerald-700">복사 완료!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                                  <span>학술 인용 양식 복사</span>
                                </>
                              )}
                            </button>

                            {paper.links?.doi && (
                              <a
                                href={paper.links.doi}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-kac-navy text-white hover:bg-kac-blue transition-all shadow-xs shrink-0"
                              >
                                <span>DOI 전문 보기</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>

                        </div>

                        {/* Citation Preview box */}
                        <div className="bg-kac-light-blue/50 border border-kac-blue/5 rounded-xl p-3 text-[11px] leading-relaxed text-slate-500">
                          <span className="font-bold text-kac-blue block mb-1">APA Academic Citation Sample</span>
                          {paper.authors} ({paper.publishedDate.split('.')[0]}). {paper.title}. <span className="italic">{paper.journal}</span>, Vol.{paper.publishedDate.split('.').slice(1).join('.') || '1'}.
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {filteredPapers.length === 0 && (
            <div className="bg-white border border-slate-150 rounded-2xl py-16 text-center text-slate-400 text-sm">
              일치하는 학술 연구 및 논문 자료가 없습니다. 검색어를 변경해 주세요.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

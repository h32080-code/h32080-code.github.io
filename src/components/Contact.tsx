import React, { useState } from 'react';
import { PERSONAL_INFO, PREVIEW_LOCATIONS } from '../data';
import { MapPin, Mail, Send, CheckCircle2, FileText, Phone, Building2, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface InquiryMsg {
  id: string;
  name: string;
  organization: string;
  email: string;
  content: string;
  category: string;
  date: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('academic-collab');
  const [content, setContent] = useState('');
  const [inquiries, setInquiries] = useState<InquiryMsg[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !content) return;

    const newMsg: InquiryMsg = {
      id: `msg_${Date.now()}`,
      name,
      organization: org || '개인 자격 연구원',
      email,
      content,
      category,
      date: new Date().toLocaleDateString('ko-KR')
    };

    setInquiries([newMsg, ...inquiries]);
    setSubmitted(true);

    // reset fields
    setName('');
    setOrg('');
    setEmail('');
    setContent('');

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const getCatLabel = (cat: string) => {
    switch (cat) {
      case 'academic-collab': return '학술 공동 연구 제안';
      case 'consulting-req': return '해외 공항 현대화 상담';
      case 'data-inquiry': return '논문 연구 데이터 자료 문의';
      default: return '일반 문의';
    }
  };

  return (
    <div id="section-contact" className="bg-white py-12 lg:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-kac-blue uppercase tracking-widest bg-kac-blue/5 px-3 py-1 rounded-full">
            COLABORATIVE CONTACT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-kac-navy mt-3 tracking-tight">
            연구 및 자문 협업 제안 창구
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            스마트공항 바이오 기술 패키지 이전, 국내외 UAM 버티포트 세미나 관련 공동 학술 자문 및 지상 조업 타당성 검토 요청 접수
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left panel: Info & Hub Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-kac-navy text-white rounded-xl">
                  <Building2 className="w-5 h-5 text-kac-cyan" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-kac-navy">KAC 글로컬사업본부 연구사무실</h3>
                  <p className="text-[10px] text-slate-400">Glocal Business Division Research Headquarters</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700">본사 주소</p>
                    <p className="text-slate-500 mt-0.5">{PERSONAL_INFO.office}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700">대표 학술 문의 전자우편</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-kac-blue hover:underline font-mono mt-0.5 block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-700">유선 연락처 (본부 비서실)</p>
                    <p className="text-slate-500 mt-0.5">02-2660-2580 (국가대표 항공번호 연결)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Alliance Hub Directory locations */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-kac-blue tracking-wide block mb-3">GLOBAL LEADERSHIP CORE HUBS</span>
              
              <div className="space-y-3.5 divide-y divide-slate-200/60 text-xs">
                {PREVIEW_LOCATIONS.map((loc, idx) => (
                  <div key={idx} className={`pt-3.5 ${idx === 0 ? 'pt-0 border-t-0' : ''}`}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-kac-navy flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-kac-cyan" />
                        {loc.name}
                      </p>
                      <span className="text-[9px] font-mono font-bold text-slate-400">Hub 0{idx + 1}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal pl-3">
                      {loc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Form input and submitted records */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Safe feedback Proposal Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">Academic Collaboration Inquiries</span>
              <h3 className="text-base sm:text-lg font-bold text-kac-navy mb-5 pb-3 border-b border-slate-100">
                학술 의뢰 및 글로벌 공사 협업 접수양식
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600">의뢰자 성명 <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="성함을 입력하세요"
                      className="w-full px-3 py-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-kac-blue focus:border-kac-blue focus:bg-white rounded-lg transition-all"
                    />
                  </div>
                  {/* Organization */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600">소속 기관 (대학/기관)</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="소속 처명을 입력하세요"
                      className="w-full px-3 py-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-kac-blue focus:border-kac-blue focus:bg-white rounded-lg transition-all"
                    />
                  </div>
                </div>

                {/* Email & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600">회신 이메일 <span className="text-rose-500">*</span></label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-kac-blue focus:border-kac-blue focus:bg-white rounded-lg transition-all font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600">의뢰 목적 및 성격</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-kac-blue focus:border-kac-blue focus:bg-white rounded-lg transition-all"
                    >
                      <option value="academic-collab">공동 학술 세미나 제안</option>
                      <option value="consulting-req">글로벌 노선 타당성 자문 의뢰</option>
                      <option value="data-inquiry">KAC 특허 기술 패키지 데이터 청구</option>
                      <option value="general">일반 협업 의사 제안</option>
                    </select>
                  </div>
                </div>

                {/* Contents description */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-600">질문 상세 및 제안 요약 <span className="text-rose-500">*</span></label>
                  <textarea
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="공동 연구, UAM 설계 검토 요청 등 상세내용을 작성바랍니다. 대외비 사항은 약술 바랍니다."
                    className="w-full px-3 py-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-kac-blue focus:border-kac-blue focus:bg-white rounded-lg transition-all resize-none"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] text-slate-400">※ 본 수신창구는 본부 인트라넷 기록용으로 개인 보관용입니다.</span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-kac-navy hover:bg-kac-blue text-white font-bold text-xs rounded-lg transition-all shadow-md shadow-kac-navy/10 cursor-pointer"
                  >
                    <span>의뢰 접수</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {/* Status indicator popup inside card */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h5 className="font-bold">의뢰가 정상 등록되었습니다!</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">허주희 본부장 로컬 백업 사서함 리스트에 안전 보관 중입니다.</p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Simulated Inquiry Inbox List (stored in offline local state) */}
            {inquiries.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex gap-2 items-center mb-4">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span className="text-xs uppercase font-extrabold text-slate-400">나의 임시 접수 내역 아카이브 (실시간 로컬 확인용)</span>
                </div>
                
                <div className="space-y-3">
                  {inquiries.map((item) => (
                    <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                      <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <span>{item.date}</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-500">{getCatLabel(item.category)}</span>
                      </div>
                      <p className="font-bold text-kac-navy">
                        {item.name} <span className="text-[10px] text-slate-400 font-normal">({item.organization})</span>
                      </p>
                      <p className="text-slate-600 bg-slate-50/50 p-2.5 rounded-lg text-[11px] leading-normal whitespace-pre-wrap">
                        {item.content}
                      </p>
                      <div className="text-right text-[10px] text-slate-400">
                        회신 희망 접수: <span className="font-mono text-slate-500">{item.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Plane, Globe, BookOpen, LineChart, MessageSquare, Newspaper, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const menuItems = [
    { id: 'profile', label: '연구인 프로필', icon: Award },
    { id: 'projects', label: '글로컬 글로벌 사업', icon: Globe },
    { id: 'research', label: '학술 연구·논문', icon: BookOpen },
    { id: 'simulator', label: '글로컬 스마트 LAB', icon: LineChart },
    { id: 'news', label: '언론·컬럼 소식', icon: Newspaper },
    { id: 'contact', label: '연구 협력·문의', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs backdrop-blur-md bg-white/95">
      {/* Top Warning Bar / Announcement Strip mimicking corporate websites */}
      <div className="bg-kac-navy text-white text-[11px] md:text-xs py-1.5 px-4 font-medium flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-3">
          <span className="bg-kac-cyan text-kac-navy px-2 py-0.5 rounded-xs text-[10px] font-bold">KAC 국책</span>
          <span className="opacity-90">한국공항공사 허주희 본부장 Glocal Airport & Infrastructure Research Portal</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 opacity-75 text-[11px]">
          <span>KAC 대한민국 공항 네트워크</span>
          <span className="w-1 h-1 rounded-full bg-kac-cyan"></span>
          <span>글로벌 스마트 리서치 허브</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand/Logo Mimicking KAC style feel */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('profile')}>
            <div className="relative flex items-center justify-center w-10 h-10 bg-kac-navy rounded-lg text-white shadow-md shadow-kac-blue/10">
              <Plane className="w-6 h-6 transform -rotate-45 text-kac-cyan" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-kac-cyan rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-[8px] text-kac-navy font-bold">H</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-kac-navy tracking-tight">KAC</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-sm bg-kac-light-blue text-kac-blue border border-kac-blue/10">
                  글로컬사업본부
                </span>
              </div>
              <h1 className="text-xs font-medium text-slate-500 tracking-tight">
                허주희 본부장 개인연구소 & 아카이브
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-kac-navy text-white shadow-md shadow-kac-navy/10 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-kac-navy'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-kac-cyan' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Quick Action */}
          <div className="flex lg:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="py-1.5 pl-3 pr-8 text-sm font-medium border border-slate-300 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-kac-blue focus:border-kac-blue"
            >
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

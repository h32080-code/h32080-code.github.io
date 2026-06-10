export interface BioEvent {
  year: string;
  title: string;
  description: string;
  category: 'academic' | 'career' | 'award';
}

export interface GlocalProject {
  id: string;
  title: string;
  country: string;
  period: string;
  budget?: string;
  description: string;
  role: string;
  details: string[];
  impact: string;
  imageAlt: string;
  tag: 'airport-development' | 'smart-tech' | 'consulting' | 'uam';
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  journal: string;
  publishedDate: string;
  category: 'smart-airport' | 'cooperation' | 'uam' | 'sustainability';
  abstract: string;
  keywords: string[];
  links?: {
    doi?: string;
    pdf?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url?: string;
  category: 'press' | 'column' | 'speech';
}

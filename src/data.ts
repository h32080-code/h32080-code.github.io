import { BioEvent, GlocalProject, ResearchPaper, NewsItem } from './types';

export const PERSONAL_INFO = {
  name: "허주희",
  nameEng: "Huh Ju-hee",
  title: "한국공항공사 글로컬사업본부장",
  titleEng: "Head of Glocal Business Division, Korea Airports Corporation (KAC)",
  email: "jhheo@airport.co.kr",
  office: "서울특별시 강서구 하늘길 78 한국공항공사 본사",
  vision: "글로벌 공항 산업의 혁신을 선도하고, 스마트 기술과 상호연동된 로컬 허브의 융합(Glocal)을 통해 글로벌 인프라 영토를 확장합니다.",
  visionEng: "Leading innovation in the global airport industry, expanding global infrastructure territory through Glocal convergence linking smart tech with local hubs.",
  citation: "공항은 이제 단순한 교통관문이 아닌, 스마트 기술과 세계를 잇는 글로벌 경제·문화의 플랫폼입니다. 우리의 기술과 운영 노하우를 세계에 심겠습니다.",
  about: "허주희 글로컬사업본부장은 한국공항공사(KAC)의 글로벌 자산 및 스마트공항 인프라 확장을 총괄하는 글로컬사업본부의 수장입니다. 지난 20여 년간 스마트공항 기술 개발, 해외 공항 운영권(PMO) 확보, 자격 검증 연구, 개발도상국 기술 지원 등 KAC의 주요 핵심 거점 사업을 진두지휘해 왔습니다. 본 홈페이지는 허주희 본부장이 축적한 글로벌 공항 개발 실무 노하우와 스마트 공항(Biometrics, Digital Twin, AI Security), 도심항공교통(UAM) 인프라 구축, 지속 가능한 ESG 탄소중립 공항 설계 모델에 관한 개인 연구 및 사상적 깊이를 아카이빙하고 공유하는 학술·실무 허브입니다."
};

export const BIO_TIMELINE: BioEvent[] = [
  {
    year: "2024 - 현재",
    title: "한국공항공사 글로컬사업본부장 (보임)",
    description: "해외공항 건설 총괄(페루 친체로 PMO, 라오스 등), 해외공항 운영권 확보(에콰도르 만타, 콜롬비아), 스마트 신기술 해외 수출 및 UAM 버티포트 등 미래 모빌리티 인프라 개발 지휘.",
    category: "career"
  },
  {
    year: "2021 - 2023",
    title: "한국공항공사 해외사업실장 / 글로벌협력처장",
    description: "해외 공항 수주 원팀 코리아 단장 역임. 동남아시아 및 중남미 지역 국가대상 공항 운영 컨설팅 및 항공안전 시스템(K-RASS) 보급 사업 운영.",
    category: "career"
  },
  {
    year: "2018 - 2020",
    title: "스마트공항개발처장",
    description: "세계 최초 '전국 공항 통합 바이오인증(Single Token)' 프로세스 구축 주도. 정맥인증, dynamic queuing 시뮬레이션 기반 스마트 탑승 절차 설계.",
    category: "career"
  },
  {
    year: "2015",
    title: "대한민국 국토교통부 장관 표창 (해외항공 수출 기여)",
    description: "항공 안전 시스템 및 국산 항행안전장비 수출 공로 인증으로 장관 표창을 수상함.",
    category: "award"
  },
  {
    year: "2012 - 2017",
    title: "KAC 글로벌항공교육원 교육기획팀장",
    description: "ICAO 인증 최우수 글로벌 항공 전문 교육 프로그램 설계. 개도국 항공안전요원 4,000여 명 양성 프로젝트 주도.",
    category: "career"
  },
  {
    year: "2010",
    title: "공학박사 학위 취득 (항공인프라공학 전공)",
    description: "논문: '여객 흐름 예측 및 스마트 게이트 시뮬레이션 모델을 통한 공항 터미널 처리 효율 극대화 연구'",
    category: "academic"
  },
  {
    year: "2002",
    title: "한국공항공사 입사 (기획정보기술 부문)",
    description: "국가 항공망 구축 및 항행운영 기획 실무 착수.",
    category: "career"
  }
];

export const GLOCAL_PROJECTS: GlocalProject[] = [
  {
    id: "proj_peru",
    title: "페루 친체로 신공항 건설사업 PMO 총괄",
    country: "페루 (Project Management Office, PMO)",
    period: "2019 - 2025 (진행중)",
    budget: "약 7,000억 원 상당",
    description: "KAC가 주도하는 컨소시엄이 페루 정부를 대신해 설계 검토, 시공사 선정, 공정 관리, 완공 후 시운전까지 공항 건설의 모든 과정을 총괄 관리하는 최초의 정부 간(G2G) 대형 사업입니다.",
    role: "PMO 사업 총괄 지도 및 자격 교육 연계 설계",
    details: [
      "세계 문화 유산 마추픽추 관문 공항으로서 친환경 스마트 공항 콘셉트 적용 조정",
      "K-건설 공법과 3D BIM(Building Information Modeling)을 연계한 설계 검토 표준화 연구",
      "고산지대(해발 3,700m) 공항 안전 운항 인프라 특화 시뮬레이션 분석 지원"
    ],
    impact: "독자적인 대기업-G2G 협업형 공항 수출 사업 모델 확립, 남미 시장 거점 인프라 건설 역량 입증.",
    imageAlt: "Peru Chinchero Airport PMO",
    tag: "airport-development"
  },
  {
    id: "proj_ecuador",
    title: "에콰도르 만타공항 30년 장기 운영권 확보",
    country: "에콰도르 (Manta Airport Concession)",
    period: "2021 - 2051",
    description: "대한민국 최초이자 역사적인 독자 해외 공항 운영권(Concession) 확보 사업으로, 향후 30년간 만타공항의 여객터미널 시설 관리, 항공기 착륙료 및 상업 시설 개발 이익을 자체 운영 및 회수하는 장기 프로젝트입니다.",
    role: "운영 모델 설계 및 현지 마스터 플랜 타당성 검토 연구",
    details: [
      "K-공항 운영 프로세스 이식을 위한 스마트 셀프 서비스(Self Check-in, Bag Drop) 레이아웃 고안",
      "투포트 연계 관광 노선 인프라 및 물류 거점화 연구 시나리오 수립",
      "기후 탄성적 활주로 유지 관리 및 스마트 안전 관제 모델 적용"
    ],
    impact: "해외 공항 위탁 개발을 넘어 자립형 장기 인프라 자산 확보를 통한 안정적 수익 창출 모델 수립.",
    imageAlt: "Ecuador Manta Airport Operation",
    tag: "consulting"
  },
  {
    id: "proj_smart_export",
    title: "K-스마트공항 시스템(Smart Airport Suite) 패키지 해외 진출",
    country: "글로벌 (라오스, 필리핀, 캄보디아 등)",
    period: "2020 - 현재",
    description: "KAC 가 자체 개발한 국내 스마트 게이트 시스템 및 Hand-Scan 정맥 바이오 인증 솔루션, 지능형 엑스레이 판독 시스템 등을 패키지화하여 개도국 노후 공항 현대화 프로젝트에 연계 보급하는 국가 수출 표준화 사업입니다.",
    role: "수출 전략 설계 및 국가별 시스템 호환성 타당성 연구",
    details: [
      "생체 정보 분산 처리 기반 보안 아키텍처 개도국 현지화 탑재 전략 수립",
      "AI 알고리즘 기반 휴대수하물 판독 정확도 향상 실증 연구 연계",
      "공항 대기 시간 예측 센서망 설계(Dynamic Queue Management)"
    ],
    impact: "한국 스마트 기술의 독점 공급 계약 체결을 통한 국내 중소 혁신 기업의 동반 해외 진출 로드맵 구현.",
    imageAlt: "KAK Smart Airport Suite Export",
    tag: "smart-tech"
  },
  {
    id: "proj_uam_vertiport",
    title: "지방공항 거점형 UAM(도심항공교통) 버티포트 표준 인프라 가이드라인",
    country: "대한민국 (Regional Hub UAM Vertiports)",
    period: "2022 - 현재",
    description: "가까운 미래 항공 교통의 혁신인 UAM 상용화에 앞서 기안한 연구로, 전국 14개 공항을 거점으로 연결하는 한국형 UAM 전용 버티포트(Vertiport, 수직이착륙장) 및 관제 인프라 표준 설계 프로세스를 선제 제정하는 사업입니다.",
    role: "UAM 실증 노선 사업 분석 및 버티포트 구조물 공학 자문",
    details: [
      "기존 여객 터미널 상부 공간 및 유휴부지를 활용한 다목적 버티포트 레이아웃 도출",
      "소음 저감형 지상 접근 절차 및 장애물 제한 표면(Obstacle Limitation Surfaces) 충돌 시나리오 연구",
      "K-UAM 드림팀 얼라이언스 핵심 분과 참여 및 지방 지자체 연결 노선 경제성 모델링"
    ],
    impact: "지방 거점 공항 활성화와 대중교통망을 통합하는 3차원 입체 항공 교통 가이드라인 정립.",
    imageAlt: "K-UAM Vertiport Design",
    tag: "uam"
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "paper_01",
    title: "한국형 스마트공항 기술 패키지의 신흥국 수출 전략에 관한 실증적 연구",
    authors: "허주희, 김경민",
    journal: "항공경영학회지 (KCI 등재지)",
    publishedDate: "2023.11",
    category: "smart-airport",
    abstract: "본 연구는 한국공항공사(KAC)가 자체 개발한 스마트공항 기술(바이오 자격 체크, 비대면 지능형 안내, 원격 지상조업)을 신흥국 공항 현대화 사업에 수출하기 위한 최적 전략을 제시한다. 동남아 및 중남미 지역 5개 공항의 설문 데이터와 국가별 기술수준평가를 바탕으로, ODA(정부개발원조) 연계형 패키지 수출과 G2G 협력 모델이 수출 장벽을 극복하는 데 미치는 영향을 실증적으로 입증하였다. 분석 결과 기술의 표준 독립성과 현지 인프라 가동 편의성이 해외 수용성과 재이용 의도에 가장 결정적 영향을 미침을 주장하였다.",
    keywords: ["스마트공항", "기술수출", "민관협력(PPP)", "공항공사", "G2G 모델"],
    links: {
      doi: "https://doi.org/10.37244/jam.2023.21.3.145"
    }
  },
  {
    id: "paper_02",
    title: "공동 거점화를 위한 지방공항 연계 UAM Vertiport 입지 선정 및 경제성 분석 시나리오",
    authors: "허주희",
    journal: "한국항공우주학회논문지",
    publishedDate: "2022.08",
    category: "uam",
    abstract: "초기 도심항공교통(UAM) 활성화 단계에서 도심 내 버티포트(Vertiport) 부지 협소 문제를 효율적으로 해결하고자, 기존 지방공항을 기종점으로 연계하는 광역 거점 모델을 제안한다. 14개 지방 거점 네트워크의 이용수요 예측 및 항공 기동 반경 분석, 전력 격자망 신뢰도를 변수로 입지점 우선순위를 산출했다. 결과 분석을 통해 김해, 제주, 대구 공항의 여객 복합 연계 가능 구간이 우선 선정되었으며, 버티포트 구축에 따른 항공 편익 증가 및 탄소 저감 효과를 다차원 회귀 분석으로 정량화하였다.",
    keywords: ["UAM", "버티포트", "지방 거점공항", "입지 분석", "탄소 절감 효과"],
    links: {
      doi: "https://doi.org/10.5139/JKSAS.2022.50.8.520"
    }
  },
  {
    id: "paper_03",
    title: "공항 프로젝트에 있어서 발주처형 PMO(Project Management Office)의 중남미 대형 공항 건설 성과 기여에 관한 사례연구: 페루 친체로 신공항을 중심으로",
    authors: "허주희, 최상현",
    journal: "글로벌 비즈니스 연구",
    publishedDate: "2021.05",
    category: "cooperation",
    abstract: "전통적인 시공 도급 수주 방식에서 탈피하여 발주자 대리인으로서 디자인, 환경 엔지니어링, 인허가 및 계약 관리를 일임받는 PMO(Project Management Office) 계약 모델의 효과성을 탐구한다. 페루 친체로 신공항(Chinchero International Airport) 건설 PMO 수주 사례를 질적 및 정량적으로 검증하였다. 본 연구는 발주처형 PMO 참여가 현지 법 제정 및 기후환경적 긴장 해결에 어떻게 작용하고 공기 단축 및 글로벌 표준 시공 효율을 유도하는지에 대한 정량적 리스크 저감 모형을 구축하여 추후 국내 공공 인프라 수출의 표준 가이드라인으로 활용될 기초 모형을 고안하였다.",
    keywords: ["공항 건설 PMO", "친체로 신공항", "G2G 계약", "인프라 수출", "리스크 관리"],
    links: {
      doi: "https://doi.org/10.22452/gbr.2021.14.2"
    }
  },
  {
    id: "paper_04",
    title: "지속 가능한 항공 생태계 조성을 위한 스마트 탄소 중립 공항(ECO-Smart Airport) 표준 평가지표 개발 연구",
    authors: "허주희, 이수현, 박동식",
    journal: "대한건설학회 학술논문총서",
    publishedDate: "2020.10",
    category: "sustainability",
    abstract: "글로벌 신기후 체제 도입에 대응해 스마트 기술(AI, IoT Sensor Network)을 에너지 수요 관리에 접목한 친환경 탄소중립 스마트공항(ECO-Smart Airport)의 개념을 정립하고 자체 표준 평가체계 지표를 도출했다. 주요 지표로 스마트 순환 환기, LED 조광 자동 제어, 디지털 트윈 전력 시뮬레이션 활용률을 상위 가중치군으로 정량 계량화하여 실제 KAC 통합 공항에 대입했다. 연구 결과 지능형 전력 분산망 도입 시 연간 탄소 배출량을 약 12% 이상 조기 감축할 수 있으며, 고질적인 피크 전력 이상 상승 리스크를 24% 예방할 수 있음을 입증했다.",
    keywords: ["지속가능한 공항", "탄소중립", "IoT 센서", "평가 지표", "친환경 인프라"],
    links: {
      doi: "https://doi.org/10.1232/ksce.2020.10.28"
    }
  }
];

export const NEWS_COVERAGE: NewsItem[] = [
  {
    id: "news_01",
    title: "\"K-공항 건설 노하우, 남미 안데스 산맥을 넘다\"... 페루 친체로 스마트 공항 기공 현장",
    source: "연합뉴스",
    date: "2024.03.15",
    summary: "한국공항공사 허주희 글로컬사업본부장은 '안데스 최정상에 피어나는 친체로 신공항은 중남미 미래 항공 교통망의 중심이자 최고의 친환경 스마트 게이트가 될 것'이라며, 현지 기술 이수 교육 및 해외 건설 협업 모델의 우수한 진척 상황을 밝혔다.",
    category: "press"
  },
  {
    id: "news_02",
    title: "[공항을 듣다 / 시론] 기후 위기와 친환경 도심 항공교통(UAM) 버티포트의 미래 인프라 표준",
    source: "한국경제 칼럼",
    date: "2023.11.02",
    summary: "교통 수단 자체의 전기·수소 전동화도 핵심이지만, 3차원 교통수단이 기착하고 안전 통제를 지원할 지상 인프라 즉 '스마트 버티포트'의 표준을 선점하는 장기적인 국가 안목과 투자가 필요한 시점이다. KAC의 실증 연구와 전국 연결 노선 기획을 전격 요약 소개한다.",
    category: "column"
  },
  {
    id: "news_03",
    title: "\"세계 1위 스마트 바이오 패키지 전국 융합 수립\"... ICAO 글로벌 세션 프레젠테이션",
    source: "글로벌 항공 데일리",
    date: "2023.06.18",
    summary: "몬트리올에서 개최된 ICAO 국제 항공 심포지엄의 세션 대변인으로 초청된 KAC 허주희 본부장은 대한민국 공항 패키지의 근간인 원정맥 바이오인증 패스를 전파했다. 전 세계적인 보안 일체성과 빠른 티케팅 속도에서 큰 박수를 이끌어 냈다.",
    category: "speech"
  }
];

export const PREVIEW_LOCATIONS = [
  { name: '페루 친체로 신공항 PMO', lat: -13.385, lng: -72.043, desc: '고산 지대 친환경 관광 스마트 관문 공항 건설 총괄 관리' },
  { name: '에콰도르 만타 공항', lat: -0.943, lng: -80.678, desc: '30년 장기 운영권 확보, K-운영 최적 이식 시범 스마트 공항' },
  { name: '콜롬비아 공항 컨설팅', lat: 4.711, lng: -74.072, desc: '주요 7개 거점 공항 현대화 마스터플랜 및 안전 기술 지원' },
  { name: '라오스 루앙프라방 공항', lat: 19.897, lng: 102.162, desc: '세계유산 연계 친환경 친수 공간 컨설팅 및 스마트화 검토' },
  { name: '대한민국 KAC 본사', lat: 37.558, lng: 126.804, desc: '글로컬 비즈니스 허브 본산지 및 전국 14개 공항 통합 총괄' }
];

import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser middleware
app.use(express.json());

// Initialize GoogleGenAI securely on the server
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Gemini features will be disabled.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. Research Chat Assistant: Helps author drafts, find citations, or explain airport technologies
app.post("/api/research/assistant", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages array" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured. Please add it in Settings > Secrets."
      });
    }

    const ai = getGeminiClient();

    // Map client messages to Gemini Chat contents format
    // Clients pass [{ role: 'user' | 'assistant', content: string }]
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const latestMessage = messages[messages.length - 1];
    if (!latestMessage || !latestMessage.content) {
      return res.status(400).json({ error: "Missing active message content" });
    }

    const systemInstruction = `당신은 대한민국 항공 및 공항 연구 전문가이자, 국가 공기업 '한국공항공사'(KAC)의 비전과 과제를 연구하는 '허주희' 연구원의 인공지능 연구 공동 집필자(Co-writer / Research Co-pilot)입니다.
전문적이고 신뢰감 넘치는 어조로 조언해 주세요.
주요 소통 및 자문 분야:
1. 한국공항공사(KAC)의 주요 핵심 사업군과 스마트 기술 혁신 (생체인식 탑승수속, 자율주행 수하물, 빅데이터 기반 공항 운영 정밀성 등)
2. 탄소 중립 및 친환경 공항 (태양광 발전, 지역 사회와 탄소 저감 프로젝트, 에코 공항)
3. 도심항공교통 (UAM / K-UAM) 정책, 버티포트(Vertiport) 설계 및 항공 안전 연계 방안
4. 학술 연구 작성을 위한 가이드: 구글 스콜라(Google Scholar) 검색 웅용 방법, 연구 논문의 초록 작성 조언, 전반적인 IMRAD 구조(서론, 방법, 결과, 토론) 개선, 인용 구조 개선.

학자로서의 품격 있는 태도를 유지하고, 핵심은 명확하고 이해하기 쉽게 조언해 주세요. 반드시 한국어로 대답하세요.`;

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history
    });

    const response = await chat.sendMessage({
      message: latestMessage.content
    });

    return res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in research assistant API:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// 2. Research Brainstorm Area: Generates research proposals and exact Google Scholar search queries
app.post("/api/research/brainstorm", async (req, res) => {
  try {
    const { topic, focusArea, currentHypothesis } = req.body;
    if (!focusArea) {
      return res.status(400).json({ error: "Missing focusArea" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured. Please add it in Settings > Secrets."
      });
    }

    const ai = getGeminiClient();

    const prompt = `연구 주제: [${topic || "자율적 선택"}]
한국공항공사 핵심 분야: [${focusArea}]
현재 가설/관심사: [${currentHypothesis || "없음"}]

위 정보를 바탕으로 한국공항공사의 실무 혁신에 기여하며 구글 스콜라(Google Scholar)에서 영향력 있게 등재될 수 있는 고유하고 전문적인 연구 기획서(Proposal Abstract)를 한국어로 설계해 주십시오.

다음의 JSON 형식을 반환하여 주십시오:
{
  "title": "논문 국문/영문 제목 제안",
  "background": "연구 배경 및 문제의식 (3~4줄)",
  "methodology": "연구 방법론 제안 (공항 데이터 분석, 시뮬레이션, 서베이 등 구체적인 방식 제안)",
  "expectedContribution": "공사의 실무적 기여도 및 학술적 의의",
  "googleScholarKeywords": ["구글 스콜라 검색용 키워드 조합 1", "구글 스콜라 검색용 키워드 조합 2", "구글 스콜라 검색용 키워드 조합 3"],
  "recommendedCitations": [
    {
       "authors": "대표 저자진 명",
       "year": 2024,
       "title": "함께 참고해 구글스콜라에 검색해 볼 만한 권위 있는 해외/국내 논문 가상 제목",
       "searchQuery": "구글 스콜라에서 검색하기 위한 간략화된 키워드 쿼리"
    },
    {
       "authors": "대표 저자진 명 2",
       "year": 2023,
       "title": "함께 참고할 수 있는 또다른 학술 논문 제목",
       "searchQuery": "학술 검색어 2"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.8,
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from Gemini API");
    }

    return res.json(JSON.parse(resultText.trim()));
  } catch (error: any) {
    console.error("Error in research brainstorm API:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
});


// Setup Vite middleware for development or serve built files in production
async function main() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server running at http://0.0.0.0:${PORT}`);
  });
}

main().catch(err => {
  console.error("Failed to start server:", err);
});


import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getLabAssistantResponse = async (userQuery: string) => {
  if (!API_KEY) return "AI Assistant is currently unavailable (API Key missing).";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the INC Lab Assistant for Gachon University's Intelligence & Networking Computing Laboratory. 
      Use the following information to answer user queries:
      - Professor: Joongheon Kim
      - Main Research Areas: Intelligence (Reinforcement Learning, Deep Learning), Networking (6G, V2X), Computing (Edge/Cloud).
      - Mission: Innovating the future of networked intelligence through rigorous research.
      - Admission: Looking for motivated graduate students and interns.
      
      User question: ${userQuery}`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to the lab brain. Please try again later.";
  }
};


import { GoogleGenAI } from "@google/genai";

export const getAIArchitectResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the 'Bycom AI Architect'. Bycom Solutions is an elite digital engineering agency.
    
    SPECIAL DIRECTIVE:
    When a user seems ready to start a project, discuss pricing, or asks for a consultation, you MUST encourage them to "Initiate Onboarding" via the official WhatsApp link: https://wa.me/966575271327.
    
    Agency Context:
    - Tech: React, Next.js, Node.js, Flutter, AI, ML.
    - Focus: Extreme performance, sub-ms latency, high-end aesthetics.
    - Identity: "Build Beyond Limits".
    
    Keep responses high-energy, technical yet accessible, and professional. Use clean Markdown formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I apologize, the uplink is unstable. Please retry your request or reach out at contact@bycomsolutions.com.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Neural link disrupted. Our tech-ops team is on it. Please try again shortly!";
  }
};

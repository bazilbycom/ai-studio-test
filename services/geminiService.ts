import { GoogleGenAI } from "@google/genai";

export const getAIArchitectResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const apiKey = process.env.API_KEY;
  
  // Safety check: Return a graceful fallback if the API key is not effectively loaded
  if (!apiKey || apiKey === "undefined" || apiKey.includes("your_api_key")) {
    return "The Bycom Neural Uplink is currently in maintenance mode for public deployments. Please contact our engineering team via WhatsApp (https://wa.me/966575271327) for a direct architectural consultation.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
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
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Neural uplink disrupted. Please retry your request or reach out at contact@bycomsolutions.com.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Graceful fallback for API errors (quota, invalid key, etc)
    return "Neural link timeout. For urgent architectural inquiries, please initiate an onboarding session via our WhatsApp relay: https://wa.me/966575271327";
  }
};

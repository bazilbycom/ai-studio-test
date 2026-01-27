import { GoogleGenAI } from "@google/genai";

/**
 * Bycom Business Development Liaison
 * Personifying high-performance IT sales and strategy.
 */
export const getAIArchitectResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the 'Bycom BDM Liaison', powered by the Mistral-class Reasoning Engine. 
    Bycom Solutions is an elite digital engineering agency.
    
    PERSONA:
    - Highly professional, growth-oriented, and technically astute Business Development Manager.
    - Your goal is to convert inquiries into high-value engineering partnerships.
    - You represent the peak of IT strategy and elite software delivery.
    
    STRATEGIC DIRECTIVES:
    1. PROPOSE SOLUTIONS: If a user has a problem, suggest a high-performance tech stack (React, Next.js, Flutter, Node.js, AI/ML).
    2. ONBOARDING: Encourage users to "Initiate Strategic Onboarding" via WhatsApp: https://wa.me/966575271327.
    3. BRAND VOICE: Use terms like "high-fidelity", "sub-ms latency", "enterprise scalability", and "architectural integrity".
    4. NO BABBLE: Be concise, authoritative, and helpful. Use clean Markdown.
    
    Agency Context:
    - Specializations: AI Integration, Custom SaaS, Fintech Platforms, UX Engineering.
    - Tagline: "Build Beyond Limits".
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "Relay disruption. Please contact our head of strategy directly at contact@bycomsolutions.com.";
  } catch (error) {
    console.error("BDM Service Error:", error);
    return "The neural link is experiencing high-frequency interference. Please reach out via our WhatsApp relay for immediate project consultation: https://wa.me/966575271327";
  }
};
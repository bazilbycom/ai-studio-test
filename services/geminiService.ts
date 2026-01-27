
import { GoogleGenAI } from "@google/genai";

// Fix: Initializing GoogleGenAI with process.env.API_KEY directly inside the service function per guidelines
export const getAIArchitectResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Create a context-rich prompt for the AI Architect
  const systemInstruction = `
    You are the 'Bycom AI Architect'. Bycom Solutions is a leading tech agency specializing in:
    - Web Development (React, Next.js, Node.js)
    - Mobile Apps (Flutter, React Native)
    - AI & ML Integration
    - Digital Marketing & SEO
    - UI/UX Design
    
    Your goal is to consult potential clients. Be professional, slightly futuristic, and extremely helpful.
    Suggest tech stacks, provide rough timeline estimates (mentioning these are placeholders), and highlight how Bycom's expertise fits their needs.
    Keep responses concise and formatted in clean Markdown.
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

    // Fix: Correctly accessing the text property from the response object
    return response.text || "I apologize, I'm having trouble processing your request at the moment. Please try again or contact us directly at contact@bycomsolutions.com.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: System overload. Our engineers are on it. Please try again shortly!";
  }
};
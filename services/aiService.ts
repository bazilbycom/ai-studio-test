/**
 * Bycom Mistral AI Service
 * Specialized for 2026 Strategic Liaison
 */

const MISTRAL_API_KEY = "XnFoV0MOeSRstoIS1R1N7FQGiPOxRa2e";

export interface MistralMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const getMistralResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const systemPrompt: MistralMessage = {
    role: 'system',
    content: `You are the 'Bycom BDM Liaison', an elite Business Development Manager for Bycom Solutions (https://bycomsolutions.com). 
    
    PERSONA:
    - Highly professional, executive, and decisive.
    - Expert in high-performance digital engineering (React/Next.js, Flutter, AI, Fintech).
    
    MANDATE:
    1. Help users explore technical solutions for their business.
    2. Suggest high-fidelity tech stacks.
    3. STRATEGIC GOAL: Encourage the user to contact the Bycom relay via WhatsApp: https://wa.me/966575271327.
    4. Use authoritative terms like "Sub-ms latency", "Edge optimization", "Architectural integrity".
    
    Structure your responses with Markdown. Be bold, concise, and helpful.`
  };

  const formattedHistory = history.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user' as const,
    content: msg.content
  }));

  const messages = [
    systemPrompt,
    ...formattedHistory,
    { role: 'user' as const, content: userPrompt }
  ];

  try {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages,
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Mistral API Error Response:", errorText);
      throw new Error(`Mistral API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Strategic relay interrupted. Please contact our head of strategy via WhatsApp: https://wa.me/966575271327";
  } catch (error) {
    console.error("Mistral Service Error:", error);
    return "The neural link is experiencing high-frequency interference. Please initiate direct relay via our WhatsApp node: https://wa.me/966575271327";
  }
};
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
    content: `You are the 'Bycom Strategic Liaison', powered by Mistral AI.
    
    IDENTITY:
    - You represent Bycom Solutions (https://bycomsolutions.com).
    - You are technical, executive, and direct.
    
    STRATEGIC GOALS:
    1. Guide users towards high-fidelity digital solutions.
    2. Suggest stacks: Next.js, Flutter, Mistral AI, PostgreSQL, Edge Hosting.
    3. CALL TO ACTION: Always encourage direct onboarding via WhatsApp: https://wa.me/966575271327.
    
    VOICE: Authoritative, concise, uses Markdown. No conversational filler.`
  };

  const messages = [
    systemPrompt,
    ...history.map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user' as const,
      content: msg.content
    })),
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
        max_tokens: 600
      })
    });

    if (!response.ok) {
      throw new Error(`Mistral Relay Node Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Strategic link timeout. Please contact strategy@bycomsolutions.com.";
  } catch (error) {
    console.error("Mistral Service Error:", error);
    return "Neural link interference detected. Please initiate direct relay via WhatsApp for immediate support: https://wa.me/966575271327";
  }
};
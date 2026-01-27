/**
 * Bycom Mistral AI Service
 * Specialized for Business Development and Strategic Liaison.
 */

const MISTRAL_API_KEY = "XnFoV0MOeSRstoIS1R1N7FQGiPOxRa2e";

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const getMistralResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const systemPrompt: Message = {
    role: 'system',
    content: `You are the 'Bycom BDM Liaison', a world-class Business Development Manager for Bycom Solutions (https://bycomsolutions.com). 
    
    PERSONA:
    - Highly professional, persuasive, and technically elite.
    - You speak with authority on high-performance IT infrastructure, AI ecosystems, and UX engineering.
    - Your tone is "Executive Tech": bold, clean, and results-oriented.
    
    MANDATE:
    1. CONVERSION: Your primary goal is to get the user to "Initiate Onboarding" via WhatsApp: https://wa.me/966575271327.
    2. EXPERTISE: Bycom specializes in:
       - Web & App Dev (Next.js, Flutter)
       - AI & Automation (LLMs, RAG, Python agents)
       - Fintech Engines (Sub-ms latency trading platforms)
       - Media Production (VFX, Audio)
    3. LANGUAGE: Use elite terminology: 'High-fidelity', 'Sub-millisecond latency', 'Edge optimization', 'Architectural integrity'.
    4. NO BABBLE: Keep responses structured with Markdown. Be direct.
    
    If asked about pricing, mention that Bycom builds custom assets for high-performers and requires a strategic consultation for precise quoting.`
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
        max_tokens: 1000
      })
    });

    const data = await response.json();
    return data.choices[0].message.content || "Neural relay disrupted. Please contact strategy@bycomsolutions.com directly.";
  } catch (error) {
    console.error("Mistral API Error:", error);
    return "Connectivity unstable. Please initiate direct relay via WhatsApp for immediate assistance: https://wa.me/966575271327";
  }
};

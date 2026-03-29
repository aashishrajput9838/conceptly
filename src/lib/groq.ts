import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

if (!apiKey) {
  console.warn("VITE_GROQ_API_KEY is not defined in import.meta.env. Using mock data fallback.");
}

const groq = new Groq({
  apiKey: apiKey || "",
  dangerouslyAllowBrowser: true,
});

export const isGroqEnabled = !!apiKey;

/**
 * AI Assistant Chat Completion
 */
export const generateGroqChat = async (messages: { role: string; content: string }[]) => {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are Conceptly AI, a modern, expert, and encouraging personal tutor for students. Your goal is to help them understand complex concepts clearly and concisely. Use formatting like bullet points and bold text to make your explanations easy to follow. Always stay encouraging and professional."
      },
      ...messages.map(m => ({
        role: (m.role === 'ai' ? 'assistant' : 'user') as any,
        content: m.content
      }))
    ],
    model: "llama-3.3-70b-versatile",
  });
  return completion.choices[0]?.message?.content || "";
};

/**
 * Concept Explainer Generation
 */
export const generateGroqExplanation = async (topic: string, difficulty: string) => {
  const prompt = `Explain the topic "${topic}" for a student at the ${difficulty} level. 
  Focus on being clear, concise, and educational. 
  Difficulty context: 
  - Beginner: Use simple analogies, no jargon. 
  - Intermediate: Use standard terminology, good detail. 
  - Advanced: Use technical language and deep scientific/academic depth.
  
  Format the response in plain text (no markdown headings).`;

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are the Conceptly Explainer AI. You provide clear academic explanations tailored to specific difficulty levels."
      },
      { role: "user", content: prompt }
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
  });
  
  return completion.choices[0]?.message?.content || "";
};

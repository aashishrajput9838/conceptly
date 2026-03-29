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
/**
 * Roadmap Generation
 */
export const generateGroqRoadmap = async (goal: string) => {
  const prompt = `Create a detailed, beautiful flowchart-style learning roadmap for the goal: "${goal}".
  
  Return the response as a valid JSON object with a single key "milestones" which is an array of exactly 8 steps.
  
  Each step object must have:
  - id: (string) unique ID
  - title: (string) Name of the stage (e.g., "Basics", "Advanced Hooks")
  - description: (string) Brief 1-2 sentence description of what the user will learn
  - duration: (string) Estimated time (e.g., "3 days", "1 week")
  - difficulty: (string) One of "Beginner", "Intermediate", "Advanced"
  - status: "locked" (default)
  
  Example structure (Programming): Basics -> Variables -> Loops -> Functions -> Arrays -> OOP -> DSA -> Projects.
  
  Ensure the JSON is strictly correctly formatted.`;

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are the Conceptly Roadmap AI. You provide structured, step-by-step learning paths in JSON format ONLY."
      },
      { role: "user", content: prompt }
    ],
    model: "llama-3.3-70b-versatile",
    response_format: { type: "json_object" },
  });
  
  const content = completion.choices[0]?.message?.content || "{\"milestones\": []}";
  return JSON.parse(content);
};

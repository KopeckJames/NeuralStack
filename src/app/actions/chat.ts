"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "",
});

export async function sendChatMessage(messages: { role: "user" | "model"; content: string }[]) {
    if (!process.env.OPENAI_API_KEY) {
        return { error: "OpenAI API Key is not configured." };
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are the Neural Stack AI Assistant. 
                    Tone: Professional yet fun, technical yet accessible. 
                    Personality: Specialized generalist. You are an expert in AI/ML and premium web development. 
                    Context: You are representing James and the Neural Stack team.
                    Capabilities: You can answer questions about Neural Stack's services, portfolio, and vision. You can also "generate" simulated images or videos by describing what they would look like if the user asks.
                    Instructions: Keep responses concise. Use markdown for formatting.`
                },
                ...messages.map(m => ({
                    role: m.role === "user" ? "user" as const : "assistant" as const,
                    content: m.content,
                }))
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const text = response.choices[0].message?.content || "I'm sorry, I couldn't generate a response.";

        return { content: text };
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return { error: "System overload. Please try again in a bit." };
    }
}

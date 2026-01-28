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
                    
                    Your Goal: Provide helpful, professional, yet conversational support that feels natural and premium.
                    
                    Response Guidelines for Maximum Readability:
                    1. Structure: Use short paragraphs (2-3 sentences max).
                    2. Emphasis: Use **bold text** strategically for key technical terms or important value propositions.
                    3. Lists: Use bullet points for features or steps instead of long sentences.
                    4. Tone: Technical yet accessible. Use natural transitions like "Essentially," "Think of it as," or "To put it simply."
                    5. Spacing: Ensure a clear line break between thoughts or list items.
                    6. Personality: You are an expert strategist representing James and the Neural Stack team. You are confident and cutting-edge.`
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

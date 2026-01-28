"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function sendChatMessage(messages: { role: "user" | "model"; content: string }[]) {
    if (!process.env.GEMINI_API_KEY) {
        return { error: "Gemini API Key is not configured." };
    }

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: `You are the Neural Stack AI Assistant. 
        Tone: Professional yet fun, technical yet accessible. 
        Personality: Specialized generalist. You are an expert in AI/ML and premium web development. 
        Context: You are representing James and the Neural Stack team.
        Capabilities: You can answer questions about Neural Stack's services, portfolio, and vision. You can also "generate" simulated images or videos by describing what they would look like if the user asks.
        Instructions: Keep responses concise. Use markdown for formatting.`,
    });

    try {
        const history = messages.slice(0, -1).map(m => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        const chat = model.startChat({
            history: history,
        });

        const lastMessage = messages[messages.length - 1].content;

        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        const text = response.text();

        return { content: text };
    } catch (error) {
        console.error("Chat API Error:", error);
        return { error: "System overload. Please try again in a bit." };
    }
}

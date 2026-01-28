import { sql } from "@vercel/postgres";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "",
});

export async function ingest(content: string, metadata: any = {}) {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: content,
        });

        const embedding = response.data[0].embedding;

        await sql`
      INSERT INTO knowledge_base (content, metadata, embedding)
      VALUES (${content}, ${JSON.stringify(metadata)}, ${JSON.stringify(embedding)}::vector)
    `;

        return { success: true };
    } catch (error) {
        console.error("Ingestion Error:", error);
        throw error;
    }
}

export async function search(query: string, limit: number = 3) {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: query,
        });

        const queryEmbedding = response.data[0].embedding;

        // Perform cosine similarity search
        const { rows } = await sql`
      SELECT content, metadata, 1 - (embedding <=> ${JSON.stringify(queryEmbedding)}::vector) as similarity
      FROM knowledge_base
      WHERE 1 - (embedding <=> ${JSON.stringify(queryEmbedding)}::vector) > 0.5
      ORDER BY similarity DESC
      LIMIT ${limit}
    `;

        return rows;
    } catch (error) {
        console.error("Search Error:", error);
        return [];
    }
}

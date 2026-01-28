# Neural Stack Knowledge Base 🧠

This guide explains how to manage the AI Chatbot's knowledge base using Vercel Postgres and RAG.

## 1. Setup Vercel Postgres
1. Go to your **Vercel Dashboard** > **Storage**.
2. Create a new **Postgres** database.
3. Connect it to your project.
4. Add the generated environment variables (especially `POSTGRES_URL`) to your `.env.local` for local testing.
5. Run the following SQL in the Vercel Postgres Console to initialize the schema:

```sql
-- Enable pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Create table
CREATE TABLE IF NOT EXISTS knowledge_base (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB,
  embedding vector(1536),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Optimized Index
CREATE INDEX ON knowledge_base USING hnsw (embedding vector_cosine_ops);
```

## 2. Ingesting Knowledge
To add new information to the chatbot, you can use the `ingest` utility. You can create a simple script or a temporary route to call this:

```typescript
import { ingest } from "@/lib/rag";

await ingest("Neural Stack offers premium AI/ML consultation and bespoke web development.");
```

## 3. How RAG Works
1. **Embedding**: When you add data, OpenAI converts the text into a 1536-dimensional vector.
2. **Storage**: This vector is stored in the `embedding` column of your Postgres database.
3. **Retrieval**: When a user asks a question, the assistant searches for the most similar vectors in the database.
4. **Augmentation**: The relevant facts are injected into the AI's prompt as context, ensuring accurate and grounded responses.

---
> [!TIP]
> Always use short, factual chunks for ingestion (e.g., 200-500 words per entry) for the best retrieval accuracy.

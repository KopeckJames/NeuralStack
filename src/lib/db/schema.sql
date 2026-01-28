-- Enable the pgvector extension to work with embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the knowledge base table
CREATE TABLE IF NOT EXISTS knowledge_base (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB,
  embedding vector(1536), -- OpenAI standard embedding size
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index for vector similarity search (IVFFlat or HNSW)
-- HNSW is generally faster and more accurate for production
CREATE INDEX ON knowledge_base USING hnsw (embedding vector_cosine_ops);

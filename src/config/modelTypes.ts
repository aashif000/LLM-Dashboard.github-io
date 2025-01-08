import { ModelTypeConfig } from "@/types/models";

export const MODEL_TYPES: Record<string, ModelTypeConfig> = {
  all: {
    label: "All Models",
    endpoint: ""
  },
  chat: {
    label: "Chat Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/chat_LLMs.json"
  },
  image: {
    label: "Image Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/image_LLM.json"
  },
  code: {
    label: "Code Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/code_LLM.json"
  },
  embedding: {
    label: "Embedding Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/embeddings_LLM.json"
  },
  language: {
    label: "Language Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/language_LLM.json"
  },
  rerank: {
    label: "Rerank Models",
    endpoint: "https://cdn.jsdelivr.net/gh/aashif000/LLM-Data@main/rerank_LLM.json"
  }
};
export interface BaseModel {
  name: string;
  description: string;
}

export interface ModelResponse {
  ChatModels?: BaseModel[];
  ImageModels?: BaseModel[];
  CodeModels?: BaseModel[];
  EmbeddingModels?: BaseModel[];
  LanguageModels?: BaseModel[];
  RerankModels?: BaseModel[];
  AllModels?: BaseModel[];
}

export type ModelType = 'all' | 'chat' | 'image' | 'code' | 'embedding' | 'language' | 'rerank';

export interface ModelTypeConfig {
  label: string;
  endpoint: string;
}
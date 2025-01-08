import { useQuery } from "@tanstack/react-query";
import { MODEL_TYPES } from "@/config/modelTypes";
import { ModelResponse, ModelType, BaseModel } from "@/types/models";

const fetchModels = async (type: ModelType): Promise<ModelResponse> => {
  if (type === 'all') {
    throw new Error("Use fetchAllModels for 'all' type");
  }
  const response = await fetch(MODEL_TYPES[type].endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }
  return response.json();
};

const fetchAllModels = async (): Promise<{ AllModels: BaseModel[] }> => {
  const modelTypes = Object.keys(MODEL_TYPES).filter(type => type !== 'all');
  const responses = await Promise.all(
    modelTypes.map(type => fetch(MODEL_TYPES[type as ModelType].endpoint))
  );
  
  const results = await Promise.all(
    responses.map(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }
      return response.json();
    })
  );
  
  const allModels: BaseModel[] = results.flatMap(result => {
    const models = Object.values(result)[0] as BaseModel[];
    return Array.isArray(models) ? models : [];
  });
  
  return { AllModels: allModels };
};

export const useModels = (type: ModelType) => {
  if (type === 'all') {
    return useQuery({
      queryKey: ["models", "all"],
      queryFn: fetchAllModels,
    });
  }

  return useQuery({
    queryKey: ["models", type],
    queryFn: () => fetchModels(type),
  });
};
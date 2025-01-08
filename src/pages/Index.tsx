import { useState } from "react";
import { useModels } from "@/hooks/use-models";
import { ModelType } from "@/types/models";
import { Sidebar } from "@/components/Sidebar";
import { ModelCard } from "@/components/ModelCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [selectedType, setSelectedType] = useState<ModelType>("chat");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, error } = useModels(selectedType);

  const models = data?.[`${selectedType.charAt(0).toUpperCase()}${selectedType.slice(1)}Models`] || [];
  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search models..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12 text-red-600">
              Failed to load models. Please try again later.
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model, index) => (
              <ModelCard key={index} model={model} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
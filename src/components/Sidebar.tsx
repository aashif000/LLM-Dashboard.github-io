import { cn } from "@/lib/utils";
import { MODEL_TYPES } from "@/config/modelTypes";
import { ModelType } from "@/types/models";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  selectedType: ModelType;
  onTypeSelect: (type: ModelType) => void;
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({
  selectedType,
  onTypeSelect,
  className,
  isCollapsed,
  onToggle,
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className={cn("font-semibold", isCollapsed && "hidden")}>
          Model Library
        </h2>
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <nav className="flex-1">
        {Object.entries(MODEL_TYPES).map(([type, config]) => (
          <button
            key={type}
            onClick={() => onTypeSelect(type as ModelType)}
            className={cn(
              "w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors",
              selectedType === type && "bg-blue-50 text-blue-600",
              isCollapsed && "text-center"
            )}
          >
            {isCollapsed ? type.charAt(0).toUpperCase() : config.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
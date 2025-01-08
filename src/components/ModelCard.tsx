import { BaseModel } from "@/types/models";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ModelCardProps {
  model: BaseModel;
}

export const ModelCard = ({ model }: ModelCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <CardHeader>
          <CardTitle className="text-lg">{model.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {model.description}
          </CardDescription>
        </CardHeader>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{model.name}</DialogTitle>
            <DialogDescription className="mt-4">
              {model.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
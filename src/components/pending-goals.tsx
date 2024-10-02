import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";

export function PendingGoals() {
    return (
      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4" />
          Meditar
        </OutlineButton>
      </div>
    );
}
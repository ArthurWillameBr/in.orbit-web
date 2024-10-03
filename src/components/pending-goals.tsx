import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPendingGoals } from "../api/get-pending-goals";
import { createGoalCompletion } from "../api/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient()
  const { data: pendingGoals } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
  });

  if (!pendingGoals) return null;

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);
    queryClient.invalidateQueries({queryKey: ["summary", "pending-goals"]});
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {pendingGoals?.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCounts >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}

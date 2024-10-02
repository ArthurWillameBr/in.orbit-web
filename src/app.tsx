import {
  Dialog
} from "./components/ui/diolog";
import { CreateGoal } from "./components/create-goal";
import { EmptyGoals } from "./components/empty-goals";
import { Summary } from "./components/summay";
import { useQuery } from "@tanstack/react-query";
import { GetSummary } from "./api/get-summary";

export function App() {

  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: GetSummary,
    staleTime: 1000 * 60 // 1 minute
  })
  
  return (
    <Dialog>
      {summary && summary?.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  );
}
import {
  Dialog
} from "./components/ui/diolog";
import { CreateGoal } from "./components/create-goal";
import { EmptyGoals } from "./components/empty-goals";

export function App() {
  return (
    <Dialog>
        <EmptyGoals />
        <CreateGoal />
    </Dialog>
  );
}
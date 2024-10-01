import {
  Dialog
} from "./components/ui/diolog";
import { CreateGoal } from "./components/create-goal";
import { EmptyGoals } from "./components/empty-goals";
import { Summary } from "./components/summay";

export function App() {
  return (
    <Dialog>
        {/* <EmptyGoals /> */}
        <Summary />
        <CreateGoal />
    </Dialog>
  );
}
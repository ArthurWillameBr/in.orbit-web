import { CheckCircle2, Plus } from "lucide-react";
import { DialogTrigger } from "./ui/diolog";
import { Button } from "./ui/button";
import { InOrbitIcon, } from "./in-orbit-logo";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";
import { useQuery } from "@tanstack/react-query";
import { GetSummary } from "../api/get-summary";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";

dayjs.locale(ptBR); 

export function Summary() {

  const { data: summary } = useQuery({
    queryKey: ["summary"],
    queryFn: GetSummary,
    staleTime: 1000 * 60, // 1 minute
  });

  if (!summary) return null;

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM');
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM');

  const completedPercentage = Math.round(
    (summary?.completed * 100) / summary?.total
  );

  return (
    <main className="py-10 px-5 mx-auto max-w-[480px] flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Adicionar Meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={summary?.completed} max={summary?.total}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{" "}
            <span className="text-zinc-100">{summary?.completed}</span> de{" "}
            <span className="text-zinc-100">{summary?.total}</span> metas nessa
            semana.
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>
      <Separator />
      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4" />
          Nadar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4" />
          Meditar
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {Object.entries(summary?.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format("dddd");
          const formattedDate = dayjs(date).format("D[ de ]MMMM");
          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium ">
                <span className="capitalize">{weekDay}</span>{" "}
                <span className="text-zinc-400 text-xs">({formattedDate})</span>
              </h3>
              <ul className="flex flex-col gap-3">
                {goals.map((goal) => {
                  const time = dayjs(goal.createdAt).format("HH:mm");
                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Você completou
                        <span className="text-zinc-100">
                          {" "}
                          "{goal.title}"
                        </span>{" "}
                        às <span className="text-zinc-100">{time}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
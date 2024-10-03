import { api } from "../lib/axios";

interface PendingGoalsResponse  {
  pendingGoals: {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCounts: number;
  }[];
};

export async function getPendingGoals() {
    const response = await api.get<PendingGoalsResponse>("/pending-goals");   
    return response.data.pendingGoals;
}
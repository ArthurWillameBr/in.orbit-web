import { api } from "../lib/axios";

interface GetSummaryResponse {
  summary: {
    completed: number;
    total: number;
    goalsPerDay: Record<
      string,
      {
        id: string;
        title: string;
        completedAt: string;
      }[]
    >;
  };
}

export async function GetSummary() {
  const response = await api.get<GetSummaryResponse>("/summary");
  return response.data.summary;
}